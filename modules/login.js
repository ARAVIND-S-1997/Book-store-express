// file imports
import { userdb } from "../model/signupModel.js";
import { token } from "../tokengenerator.js";

// packages imports
import bcrypt from "bcrypt"

// login function
export const login = (async (request, response) => {
    const { emailid, password } = request.body;

    // find user
    const reqUser = await userdb.findOne({ emailid: emailid });
    console.log(reqUser);

    if (reqUser) {
        const storedpassword = reqUser.password;
        console.log(storedpassword);

        // check password
        const comparison = await bcrypt.compare(password, storedpassword);
        if (comparison) {

            // generate token
            const finaltoken = await token({ id: reqUser._id });
            return response.send({ finaltoken, emailid });
        }
        else {
            return response.status(400).send("invalid password");
        }
    }
    if (!reqUser) {
        return response.status(400).send("Invalid emailid");
    }
});
