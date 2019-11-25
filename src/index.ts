import express from "express";

const app = express();
const port = 5555;

app.get("/", (req, res) => {
    console.log("GET request for /");
    res.send("Hello world!");
});

app.listen(port, () => {
    console.log(`Server started at http://127.0.0.1:${port}/`);
});