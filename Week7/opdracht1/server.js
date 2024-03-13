import express from 'express';
import bodyParser from 'body-parser'; // uitlezen van post request body
const app = express()
const port = 3003

app.use(express.static('public'));
app.use(bodyParser.json());  // uitlezen van post request body

const cards = [
    { title: "card1", description: "dit is kaart 1", img: "img/n1.jpg" },
    { title: "card2", description: "dit is kaart 2", img: "img/n2.jpg" },
];

const bikes = [
    { title: "card1", description: "dit is kaart 1", img: "img/n1.jpg" },
    { title: "card2", description: "dit is kaart 2", img: "img/n2.jpg" },
];

const messageArray = [];

app.get('/messages', (req, res) => {
    res.json(messageArray);
});


app.post('/sendMessage', (req, res) => {
    const message = req.body.message;
    const sender = req.body.sender;
    messageArray.push({
        sender: sender,
        message: message,
        date: new Date()
    });
    res.send({ success: true });
});




app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/cards', (req, res) => {
    res.json(cards);
})

app.get('/bikes', (req, res) => {
    res.json(bikes);
})

app.get('/hello', (req, res) => {
    res.send('<h1> Hello world </h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})