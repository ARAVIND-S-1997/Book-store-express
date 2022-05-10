// packages imports
import jwt from "jsonwebtoken";

// file imports
import { userdb } from "../model/signupModel.js";


// delete books from cart function
export const deletecartbook = async (request, response) => {
    try {
        const { id } = request.params;
        console.log("Id is(Delete cart function):", id);

        const { emailid, token } = request.headers;
        console.log("Email id is(Delete cart function):", emailid);
        console.log("Token is(Delete cart function):", token);

        const check = jwt.verify(token, process.env.SECRET_KEY);
        if (check) {

            // delete books from cart
            const deletebookReq = await userdb.updateMany({ emailid: emailid }, { $pull: { cart: { _id: id } } });
            if (deletebookReq) {

                // find books from cart
                const cartbooks = await userdb.findOne({ emailid },
                    { _id: 0, firstname: 0, lastname: 0, emailid: 0, dob: 0, password: 0, addressinfo: 0 })
                    .populate("cart.BookName");
                response.send(cartbooks);
            }

        } else {
            response.send("Invalid token");
        }

    } catch (error) {
        console.log("Error is:(Delete cart function)", error);
    }
}