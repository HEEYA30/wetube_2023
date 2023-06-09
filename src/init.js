import "./db";
import "./models/video";
import app from "./server";

const PORT = 1031;
const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);