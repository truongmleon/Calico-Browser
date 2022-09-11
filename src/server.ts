import express from 'express';

const app = express();

app.get("/api/v1", (req, res) => {
    const data = {
        GenerationOne: "http://localhost:4000/api/v1/GenerationOne",
        GenerationTwo: "http://localhost:4000/api/v1/GenerationTwo",
        GenerationThree: "http://localhost:4000/api/v1/GenerationThree",
        GenerationFour: "http://localhost:4000/api/v1/GenerationFour",
        GenerationFive: "http://localhost:4000/api/v1/GenerationFive",
        GenerationSix: "http://localhost:4000/api/v1/GenerationSix",
        GenerationSeven: "http://localhost:4000/api/v1/GenerationSeven",
        GenerationEight: "http://localhost:4000/api/v1/GenerationEight",
    }
    res.json(data);
});

app.get("/api/v1/GenerationOne", (req, res) => {
    const data = {

    }
});

app.get("/api/v1/GenerationTwo", (req, res) => {

});

app.get("/api/v1/GenerationThree", (req, res) => {

});

app.get("/api/v1/GenerationFour", (req, res) => {

});

app.get("/api/v1/GenerationFive", (req, res) => {

});

app.get("/api/v1/GenerationSix", (req, res) => {

});

app.get("/api/v1/GenerationSeven", (req, res) => {

});

app.get("/api/v1/GenerationEight", (req, res) => {

});

app.listen(4000);