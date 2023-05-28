import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";


const app = express();

const logger = morgan("dev");
//GET요청 등을 수행하는 미들웨어임
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(logger);
app.use(express.urlencoded({extended: true }));
//미들웨어임. 이를 통해 자바코드 이해가능케 함
app.use("/upload", express.static("upload"));
app.use("/static", express.static("assets"));
app.use("/", globalRouter);
app.use("/video", videoRouter);
app.use("/user", userRouter);

export default app;
// *첫 코드
// const globalRouter = express.Router();
// const handleHome = (req, res) => res.send("Home");
// globalRouter.get("/", handleHome);

// const userRouter = express.Router();
// const handleEditUser = (req, res) => res.send("Edit User");
// userRouter.get("/edit", handleEditUser);

// const videoRouter = express.Router();
// const handleWatchVideo = (req, res) => res.send("Watch Video");
// videoRouter.get("/watch", handleWatchVideo);

// app.use("/", globalRouter);
// app.use("/video", videoRouter);
// app.use("/user",userRouter);







// const handleClick = event
// button.addEventListenr("click", handleClick)

