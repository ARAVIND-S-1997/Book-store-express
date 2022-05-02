// import { client } from "./index.js";
// import { router } from "./fetch";

// // get books in the cart
// // router.get("",async(request,response)=>{
// //     const{emailid}=request.headers;
// //     console.log(emailid)
// //     const getcart=await client.db("books").collection("users").findOne({emailid});
// //     console.log("getcart",getcart)
// //     response.send(getcart)
// // })
// // delete books from cart
// router.route("/deletecartBooks/:id").delete(async (request, response) => {
//     const { id: BookName } = request.params;
//     console.log(BookName);
//     const reqData = await client.db("books").collection("cart").deleteOne({ BookName });
//     console.log(reqData);
//     response.send(reqData);
// });
