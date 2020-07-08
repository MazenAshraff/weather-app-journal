let projectData = {};

const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const cors = require('cors');
app.use(cors());

const port = 8000;
const listening = () => {
    console.log('Server is running');
    console.log(`localhost::${port}`);

}
app.use(express.static('website'));

app.listen(port, listening);
let i = -1;
app.post('/data', (req, res) => {
    i++;
    projectData[`${i}`] = req.body;
    console.log(projectData);
    res.send({ done: 'true' });
});

app.get('/search', (req, res) => {
    res.send(projectData[`${i}`]);
});