import express from 'express';

const app = express();


app.get('/api/v1', (req, res) => {
    const data = [
        {GenerationOne: "http://localhost:4000/api/v1/GenerationOne"}
    ]
    res.json(data);
});

app.listen(4000);