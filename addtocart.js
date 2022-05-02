// import { client } from "./index.js";
// import { ObjectId } from "mongodb";
// import jwt from "jsonwebtoken";
// import express from "express";


// const router = express.Router();
// export const addtocartRouter = router;


// router.route("/addcart/:id").post(async (request, response) => {
//     const { token, emailid } = request.headers;
//     console.log("Token (My cart) :", token);
//     console.log("Email id (My cart) :", emailid);

//     const { id } = request.params;
//     console.log("Id is (My cart) :", id);

//     const check = jwt.verify(token, process.env.SECRET_KEY);
//     if (check) {
//         const findbook = await client.db("books").collection("mybooks").findOne({ _id: ObjectId(id) });
//         console.log(findbook)
//         const { _id } = findbook;
//         // find the user details 
//         const findcartbook = await client.db("books").collection("cart").findOne({ emailid });
//         console.log(findcartbook);

//         if (findcartbook === null) {
//             const addbootocartReq = await client.db("books").collection("cart").insertOne({user:emailid,});
//             response.send(addbootocartReq)
//         }


//     }

// })

