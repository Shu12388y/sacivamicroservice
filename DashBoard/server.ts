import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { DashBoardRouter } from "./Routes/DashBoard.Router";
import { healthRouter } from "./healthCheck/healthcheck";
import { FileSystemRouter } from "bun";
import { sysRouter } from "./systemStatus/Sys.Router";


export const app = express(); 




// Configure middlewares
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(express.json({limit:"30mb"}));
app.use(express.urlencoded({extended:true,limit:'30mb'}));
app.use(compression());



// Router
app.use("/api/v1",DashBoardRouter);
app.use(healthRouter);
app.use(sysRouter);

