  
import * as express from "express";
import * as path from "path";

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/../frontend/html/index.html'));
});

app.use("/assets", express.static(path.join(__dirname, "/../frontend/assets")));

app.listen(8080, () => {
    console.log("Server listening on Port 8080")
});