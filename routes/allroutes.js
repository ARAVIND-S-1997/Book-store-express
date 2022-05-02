import express from "express";

import { signup } from "../modules/signup.js";
import { login } from "../modules/login.js";
import { allbooks } from "../modules/getallbooks.js";
import { booksbygenre } from "../modules/getbookbygenre.js";
import { bookdetail } from "../modules/getbookdetails.js";
import { forgetpassword } from "../modules/forgetpassword.js";
import { addtocart } from "../modules/addbooktocart.js";
import { booksincart } from "../modules/cartbooks.js";
import { deletecartbook } from "../modules/deletebookCartModule.js";
import { addaddress } from "../modules/addaddress.js";
import { orderpage } from "../modules/orderpageModule.js";

const router = express.Router();
export const myroutes = router;

router.post("/signup",signup);

router.post("/login",login);

router.post("/forgetpassword",forgetpassword);

router.get("/allbooks",allbooks);

router.get("/genre/:id",booksbygenre);

router.get("/particular/:id",bookdetail);

router.post("/addtocart/:id",addtocart);

router.post("/cartbooks",booksincart);

router.post("/deletecartbooks/:id",deletecartbook);

router.post("/addaddress",addaddress);

router.post("/orderdashboard",orderpage);