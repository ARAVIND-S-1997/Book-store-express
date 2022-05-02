import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { mongoconnection } from "./mongooseconnection.js";
import {myroutes} from "./routes/allroutes.js"


await mongoconnection();
// express connection

const server = express();
const port = process.env.PORT;
server.listen(port, () => { console.log("server is connected in port:8000") });

// middleware

server.use(express.json());
server.use(cors());
server.use("/books", myroutes);

