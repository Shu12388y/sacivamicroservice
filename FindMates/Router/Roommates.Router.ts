import { Router } from "express";
import { RoomMateController } from "../Controllers/RoomatesController/Roomates.Controller";


export const roomMateRouter = Router()



// defining routes
roomMateRouter.post("/createprofile",RoomMateController.createProfile);