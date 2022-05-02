import { userdb } from "../model/signupModel.js";
import { booksdb } from "../model/booksModel.js";

import jwt from "jsonwebtoken";

// add to cart api
export const addtocart = (async (request, response) => {
    const { id } = request.params;
    const { emailid, token } = request.headers;
    console.log(emailid, token);
    const verify = jwt.verify(token, process.env.SECRET_KEY);

    // if verification was true find the book details
    if (verify) {

        // find the book details from the mybooks collection
        const reqdata = await booksdb.findOne({ _id: id });
        const { _id } = reqdata;
        console.log(_id);

        // find the user details 
        const finduser = await userdb.findOne({ emailid });
        console.log(finduser);
        const { cart } = finduser;
        console.log("Cart is",cart);

        // check the cart is present or not
        if (finduser.cart !== null) {

            // check whether book is available in the cart or not
            const check = cart.find((value) => {return (value.BookName.toString() === _id.toString()); });
            console.log("Book is ",check);

            // if not available then add the book to the cart 
            if (check === undefined) {
                const addbookincart = await userdb.updateOne({ emailid }, { $push: { cart: { BookName: _id, Quantity: 1 } } });
                console.log(addbookincart);
                response.send({ message: "Book got inserted", addbookincart });
                return;

            }

            // if available increase the quantity
            if (check.BookName.toString() === _id.toString()) {
                const BookName = check.BookName;
                console.log(BookName);
                const updatequantity = await userdb.updateOne({ emailid, "cart.BookName": _id }, { $inc: { "cart.$.Quantity": +1 } });
                console.log(updatequantity);
                response.send({ message: "Book quantity got updated", updatequantity });
                return;
            }
        }

        // if cart is not created then create cart and insert an object of book details inside an array
        else {
            const { _id, } = reqdata;
            const createcart = await userdb.updateOne({ emailid }, { $set: { cart: [{ BookName: _id, Quantity: 1 }] } });
            console.log(createcart);
            response.send(createcart);
            return;
        }
    }
});
