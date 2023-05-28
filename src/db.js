import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube");

const db = mongoose.connection;

const handleOpen = () => console.log("✅connected to DB");
const handleError = (error) => console.log("❌DB Eroor", error);

db.on("error", handleError);
db.once("open", handleOpen);

