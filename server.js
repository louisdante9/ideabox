import express from 'express';
import bodyParser from 'body-parser';
require('dotenv').config(); 

const app = express();
const port =  4003;

app.get('/', (req, res)=> {
  res.send('hello there!')
})

app.listen(port , (err)=> {
  if(err) {
    console.log(err);
  }
  console.log(`server is running on port: ${port}`)
})