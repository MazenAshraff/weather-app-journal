const baseuri = 'api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '';
const projectData = [];

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

let zip = null;

app.post('/zip', (req, res) => {
    zip = req.body['zip'];
    console.log(zip);
    res.send('done');
})


// const getData = async(zip) => {
//     const req = await fetch(baseuri + zip + apiKey);
//     try {
//         const data = await req.json();
//         console.log('data');
//         return data;

//     } catch (e) {
//         console.log('error:' + e);
//     }
// }