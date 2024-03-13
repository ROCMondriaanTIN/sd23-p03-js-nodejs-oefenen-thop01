import express from 'express';

const app = express()
const port = 3003

const cards = [
    { title: "card1", description: "dit is kaart 1", img: "img/n1.jpg" },
    { title: "card2", description: "dit is kaart 2", img: "img/n2.jpg" },
];

const bikes = [
    { title: "card1", description: "dit is kaart 1", img: "img/n1.jpg" },
    { title: "card2", description: "dit is kaart 2", img: "img/n2.jpg" },
];



app.use(express.static('kijkshop'))

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