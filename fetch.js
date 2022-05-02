// import { client } from "./index.js";
// import express from "express";
// import jwt from "jsonwebtoken";
// export const router = express.Router();
// console.log(router)
// export const booksRouter = router;
// console.log(booksRouter)
 
// // router.route("/allbooks").get(async (request, response) => {
// //     const{token}=request.headers;
// //     console.log(token);
// //     const verify=jwt.verify(token,process.env.SECRET_KEY);
// //     if(verify){
// //         const Books = await client.db("books").collection("mybooks").find({}).toArray();
// //         return response.send({ message: "token was verified",Books });
// //     }else{
// //         console.error("error is")
// //     }
       
// // })

// /

// // get searched book
// router.route("/:bookname").get(async(request,response)=>{
//     const{bookname}=request.params;
//     console.log(bookname)
//     const Book=await client.db("books").collection("mybooks").findOne({BookName:bookname})
//     console.log(Book)
//     response.send(Book)
// })


// // search for particular books

// router.route("/:searchbooks").get(async (request, response) => {
//     const { searchbooks: BookName } = request.params;
//     console.log(BookName)
//     const reqData = await client.db("books").collection("cart").findOne({ BookName });
//     response.send(reqData)
// })




