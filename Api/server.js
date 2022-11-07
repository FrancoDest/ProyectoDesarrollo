
const express = require('express');
const cors = require('cors');
const _ = require('lodash');
const { v4: uuidv4 } = require('uuid');
// Constants
const PORT = 3000;
const HOST = 'localhost';

// App
const app = express();
var corsOptions = {
    origin: 'https://localhost:4200/Login',
    optionsSuccessStatus: 200, 
    methods: "GET, PUT, POST"
}
app.use(express.json())
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World');
});

/*app.get('/card', (req, res) => {
    res.send(cards);
  });

app.post('/card', (req, res) => {   
  let card = {
    id: uuidv4().toString(),
    text: req.body.text
  }
  cards.push(card) 
  res.send(card);
});

app.put('/card/:id', (req, res) => {    
  let card = {
    id: req.params['id'],
    text: req.body.text
  }
  _.remove(cards, (elem)=>{
    return elem.id == req.params['id']    
  });
  cards.push(card);
  res.send(card);
});

app.delete('/card/:id', (req, res) => {    
  _.remove(cards, (elem)=> {
    return elem.id == req.params['id']    
  });
  res.send(cards);
});*/


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`); 

