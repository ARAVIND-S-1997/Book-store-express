import { userdb } from "../model/signupModel.js";
import bcrypt from "bcrypt"
import { token } from "../tokengenerator.js";

// login 

export const login=(async (request, response) => {
    const { emailid, password } = request.body;
    const reqUser = await userdb.findOne({ emailid: emailid });
    console.log(reqUser);
    if (reqUser) {
        const storedpassword = reqUser.password;
        console.log(storedpassword);
        const comparison = await bcrypt.compare(password, storedpassword);
        if (comparison) {
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
