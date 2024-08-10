import { Router} from "express";
import { SignUpController } from "../Controllers/SignIn/SignIn.Controller";
import { VerifyUser } from "../Controllers/VerifyOtp/Verifyotp.Controller";
import { LoginController } from "../Controllers/Login/Login.Controller";
import { UserProfile } from "../Controllers/Profile/Profile.Controller";
import { ResetPassword } from "../Controllers/ResetPassword/UserReset.Controller";

export const UserRouter = Router();



UserRouter.post("/signup",SignUpController.userSignUp);
UserRouter.post("/verify/:user",VerifyUser.verifyOtp);
UserRouter.post('/login',LoginController.loginUser);
UserRouter.post("/profile",UserProfile.userProfileController);
UserRouter.post("/resetpassword",ResetPassword.userResetPassword);
