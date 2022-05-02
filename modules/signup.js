import { userdb } from "../model/signupModel.js"
import { generatePassword } from "../passwordgenerator.js"

// signup
export const signup = (async (request, response) => {

    const { firstname, lastname, emailid, dob, password } = request.body;
    console.log(firstname, lastname, emailid, dob, password);

    const userData = await userdb.findOne({ emailid });
    if (userData) {
        response.status(400).send("email id already exist");
    }
    else {
        const finalPassword = await generatePassword(password);
        console.log(finalPassword);

        const data = new userdb({
            firstname: firstname,
            lastname: lastname,
            emailid: emailid,
            dob: dob,
            password: finalPassword
        })

        const newuser = data.save();
        response.status(200).send("successfully signed up");

    }
});
