// @flow
import { Router } from "express";
import { get } from "./SocialController";

const userRouter = Router();
userRouter.route("/social").get(get);

export default userRouter;
