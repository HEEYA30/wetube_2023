import express from "express";

import { edit, remove, logout, see } from "../controllers/userController";
const userRouter = express.Router();

userRouter.get(":id", see);
userRouter.get("/logout",logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);

//Why not user? 이미 userRouter안이기에 동사edit만 쓴 것.

export default userRouter;