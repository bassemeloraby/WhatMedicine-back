const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config()
const connectDB = require('./config/db');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = process.env.PORT || '5000';

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

//Connect to the database before listening
connectDB().then(() => {
    app.listen(port, (err) => {
        if (err) throw err;
        console.log('Server listening on port'.red, port.yellow);
      });      
})

// app.listen(port, (err) => {
//   if (err) throw err;
//   console.log('Server listening on port'.red, port.yellow);
// });
