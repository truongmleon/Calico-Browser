import express from 'express';

import { redblue } from './routes/genOne/frontSprites/redblue.js';
import { green }  from './routes/genOne/frontSprites/green.js';
import { yellow } from './routes/genOne/frontSprites/yellow.js';
import { trainers } from './routes/genOne/frontSprites/trainers.js';

const app = express();

app.use("/api/v1/GenerationOne/RedBlue", redblue);
app.use("/api/v1/GenerationOne/Green", green);
app.use("/api/v1/GenerationOne/Yellow", yellow);
app.use("/api/v1/GenerationOne/Trainers", trainers);

app.get('/', (req, res) => {
    res.redirect("https://www.google.com");
});

app.get("/api/v1", (req, res) => {
    const data = {
        GeneralInfo: "http://localhost:4000/api/v1/GeneralInfo",
        GenerationOneSprites: "http://localhost:4000/api/v1/GenerationOne",
        GenerationTwoSprites: "http://localhost:4000/api/v1/GenerationTwo",
        GenerationThreeSprites: "http://localhost:4000/api/v1/GenerationThree",
        GenerationFourSprites: "http://localhost:4000/api/v1/GenerationFour",
        GenerationFiveSprites: "http://localhost:4000/api/v1/GenerationFive",
        GenerationSixSprites: "http://localhost:4000/api/v1/GenerationSix",
        GenerationSevenSprites: "http://localhost:4000/api/v1/GenerationSeven",
        GenerationEightSprites: "http://localhost:4000/api/v1/GenerationEight",
    }

    res.json(data);
});

app.get("/api/v1/GenerationOne", (req, res) => {
    const data = {
        PokémonRedBlue: "http://localhost:4000/api/v1/GenerationOne/RedBlue",
        PokémonGreen: "http://localhost:4000/api/v1/GenerationOneGreen",
        PokémonYellow: "http://localhost:4000/api/v1/GenerationOne/Yellow",
        TrainerNames: "http://localhost:4000/api/v1/GenerationOne/TrainerNames",
        TrainerSprites: "http://localhost:4000/api/v1/GenerationOne/TrainerSprites",
    }

    res.json(data);
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