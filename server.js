const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config()


const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = process.env.PORT || '5000';

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, (err) => {
  if (err) throw err;
  console.log('Server listening on port'.red, port.yellow);
});
