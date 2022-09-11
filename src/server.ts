import express from 'express';
import redblue from './routes/genOne/redblue';

const app = express();

app.use("/RedBlue", redblue);

app.get('/', (req, res) => {
    res.redirect("https://www.google.com")
})

app.get("/api/v1", (req, res) => {
    const data = {
        PokémonEnglishNames: "http://localhost:4000/api/v1/en",
        PokémonJapaneseNames: "http://localhost:4000/api/v1/jp",
        PokémonIDs: "http://localhost:4000/api/v1/ids",
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