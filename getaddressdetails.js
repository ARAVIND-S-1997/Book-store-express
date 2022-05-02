// import { client } from "./index.js";
// import jwt from "jsonwebtoken";
// import { router } from "./fetch";

// // get address details
// router.route("/getaddress").get(async (request, response) => {
//     const { emailid, token } = request.headers;
//     const verify = jwt.verify(token, process.env.SECRET_KEY);
//     if (verify) {
//         const requestedData = await client.db("books").collection("users").findOne({ emailid }, { projection: { password: 0, cart: 0 } });
//         response.send(requestedData);
//     }
// });
