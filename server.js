// server.js

const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

let currentSet = 1;
 
// Load questions from the JSON file
const questionsBySet = JSON.parse(fs.readFileSync('questions.json', 'utf-8'));

app.use(express.static('public'));

app.get('/questions', (req, res) => {
    const set = req.query.set || 1;
    const questions = questionsBySet[set] || [];
    res.json({ questions, set });
});

app.get('/check-set', (req, res) => {
    res.json({ set: currentSet });
});

app.post('/change-set', (req, res) => {
    currentSet = (currentSet % Object.keys(questionsBySet).length) + 1;
    res.send('Set changed successfully');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
