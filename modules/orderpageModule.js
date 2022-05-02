import { userdb } from "../model/signupModel.js";
import jwt from "jsonwebtoken"

export const orderpage = async (request, response) => {
    try {
        const { emailid, token } = request.headers;
        console.log("Email id (order page function): ", emailid);
        console.log("Token (order page function): ", token);

        const verify = jwt.verify(token, process.env.SECRET_KEY);

        if (verify) {
            const cartbooks = await userdb.findOne({ emailid },
                { _id: 0, firstname: 0, lastname: 0, emailid: 0, dob: 0, password: 0 })
                .populate("cart.BookName");
            response.send(cartbooks);

        }
        else {
            response.status(401).send("Authentication error");
        }
    } catch (error) {
        console.log("Error is (order page function): ", error)
    }


}