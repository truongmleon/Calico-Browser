import express from 'express';

export const info = express.Router();

info.get('/', (req, res) => {
    res.send(
        {
            "info" : {
                "eng": "Blubasaur",
            }
        }
    )
});