import express from 'express';

const port = 3000;
const app = express();
app.use(express.static('public'));

const data = [
  { name: "flippo", price: 0.01, },
  { name: "Pippo", price: 0.01, },
  { name: "flippo", price: 0.01, },
  { name: "flippo", price: 0.01, },
];

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get("/thearray", (req,res)=>{
  res.json(data);
});

app.post("/message", (req,res)=>{
  console.log("test");
  res.json(data);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})