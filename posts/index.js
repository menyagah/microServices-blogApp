const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');//Add code to randomly generate an ID
const app = express();
app.use(bodyParser.json());

const posts = {};

app.get('/posts', (req, res) =>{
    res.send(posts); //Implement get posts route handler
});

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex')//implement the ability to create a new post
    const { title } = req.body;

    posts[id] = {
        id, title
    };
    res.status(201).send(posts[id])
});

app.listen(4000, () => {
    console.log('listening on 4000');
});