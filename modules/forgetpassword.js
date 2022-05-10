// packages imports
import jwt from "jsonwebtoken";

// file imports
import { emailsender } from "../mail.js";
import { userdb } from "../model/signupModel.js";


// forget password function
 export const forgetpassword=(async (request, response) => {
    const { emailid } = request.body;

    // checking whether the user is already there or not
    const findreq = await userdb.findOne({ emailid });
    if (findreq) {

        // generating a token
        const gentoken = jwt.sign({ id: findreq._id }, process.env.SECRET_KEY);
        console.log(gentoken);
        if (gentoken) {

            // upadting the password with token
            const updatepassword = await userdb.updateOne({ emailid }, { $set: { password: gentoken } });
            response.send(updatepassword);

            //    link that need to be redircted to the backend for verification
            const resetPasswordLink = `http://localhost:8000/authforgetpassword/forgetpassword/verify/${gentoken}`;

            //   Email functionality  
            const message = (
                `<p>Hai there 😊 link to reset the password</p>
      <a href=${resetPasswordLink}> Click here to reset your password </a>`
            );
            emailsender(emailid, message);

        }
    }

});
