// packages imports
import jwt from "jsonwebtoken"

// file imports
import { userdb } from "../model/signupModel.js";


// get books in cart function
export const booksincart = (async (request, response) => {
    const { emailid, token } = request.headers;
    console.log(emailid, token);

    const verify = jwt.verify(token, process.env.SECRET_KEY);
    if (verify) {

        // find books from cart
        const cartbooks = await userdb.findOne({ emailid },
            { _id: 0, firstname: 0, lastname: 0, emailid: 0, dob: 0, password: 0, addressinfo: 0 })
            .populate("cart.BookName");
        response.send(cartbooks);

    }
    else {
        response.status(401).send("Authentication error");
    }

});


