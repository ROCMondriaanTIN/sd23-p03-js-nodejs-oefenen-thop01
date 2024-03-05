import express from 'express';
import { readFile } from 'node:fs/promises';
const app = express();
const port = 3000;

app.get('/', (request, response)=>{
    response.send("hello world!");
});



app.get('/pokemon', async (request, response)=>{
    // https://nodejs.org/docs/latest/api/fs.html
    try {
        const filePath = new URL('./data/poke.json', import.meta.url);
        const contents = await readFile(filePath, { encoding: 'utf8' });
        const pokemons = JSON.parse(contents);
        response.json(pokemons);
      } catch (err) {
        console.error(err.message);
      }
});

app.listen(port, ()=>{
    console.log("listen: " + port);
})