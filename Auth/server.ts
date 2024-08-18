import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieparser from "cookie-parser";
import { UserRouter } from "./Routes/Router";




export const app = express();



// Middlewares
app.use(cors({origin:['http://localhost:3000','https://sacivamvp.vercel.app']}));
app.use(helmet());
app.use(express.json({limit:"30mb"}));
app.use(express.urlencoded({limit:'30mb',extended:true}));
app.use(cookieparser());


// Config Routes
app.use("/api/v1",UserRouter);








