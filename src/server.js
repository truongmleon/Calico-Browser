import express from "express";
const app = express();
app.get('/api/v1', (req, res) => {
    res.send({ "Generation One:": "/api/v1/GenerationOne" });
});
app.get("*");
app.listen(3000);
