import { getSystemStatus } from "./sys";
import {type Response, type Request } from "express";

export class GetStatus{
    static async getStatus(_:Request,res:Response){
                try {
                    const data = getSystemStatus()
                    return res.json({message:data}).status(200)
                } catch (error) {
                    return res.json({message:error}).status(500)
                }
    }
}