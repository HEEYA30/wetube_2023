import express from "express";

import { 
    getUpload, 
    // avatarUpload, 
    watch, 
    deleteVideo, 
    getEdit, 
    postEdit 
} from "../controllers/videoController";
// import { protectorMiddleware, uploadVideo } from "../middlewares";

const videoRouter = express.Router();


videoRouter
    .route("/upload")
    // .all(protectorMiddleware)
    .get(getUpload)
    // .post(videoUpload.single("video"), postUpload);
videoRouter
    .get("/:id([0-9a-f]{24})", watch);
videoRouter
    .get("/:id([0-9a-f]{24})/delete", deleteVideo);
//delete는 변수로 못 쓰는.. 그래서 Video 붙임
videoRouter
    .route("/:id([0-9a-f]{24})/edit")
    .get(getEdit)
    .post(postEdit);
// 합치기 videoRouter.get("/:id(\\d+)/edit", getEdit);
// + videoRouter.post("/:id(\\d+)/edit", postEdit);

export default videoRouter;