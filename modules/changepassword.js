
import { generatePassword } from "./passwordgenerator.js";
import { emailsender } from "./mail.js";

import { userdb } from "../model/signupModel.js";

// change password
export const changepassword = (async (request, response) => {
    const { authtoken } = request.headers;
    const { password } = request.body;

    //  checking whether the password(token which was repaced) and the token is same or not
    const verification = await userdb.findOne({ password: { $eq: authtoken } });
    if (verification) {
        const { emailid } = verification;

        // generating new password
        const genpassword = await generatePassword(password);

        // updating the password to the db
        const updatepassword = await userdb.updateOne({ emailid }, { $set: { password: genpassword } });
        response.send("password updated sucessfully")

        // email functionality
        const message = (
            `<p>Password changed successfully ☺ </p>`
        );
        emailsender(emailid, message);
        return;
    }


    // if token was invalid
    else {
        response.status(400).send({ message: "Invalid token" });
    }
});
