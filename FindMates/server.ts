import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { roomMateRouter } from "./Router/Roommates.Router";



export const app  = express();





// configure midddlewares
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json({limit:'30mb'}));
app.use(express.urlencoded({extended:true,limit:"30mb"}));




// configure Routers
app.use("/api/v1",roomMateRouter);