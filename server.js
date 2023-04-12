const express = require('express');
const cors = require('cors')
const colors = require('colors');
const dotenv = require('dotenv').config()
const connectDB = require('./config/db');

const router = express.Router();

const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// main routes
app.use('/api/drugs', require('./routes/drugRoute'));
app.use('/api/users', require('./routes/userRoutes'));

const port = process.env.PORT || '5000';

app.get('/', (req, res) => {
    res.send('Hello World! . that is backend of whatMedicine')
  })


//Connect to the database before listening
connectDB().then(() => {
    app.listen(port, (err) => {
        if (err) throw err;
        console.log('Server listening on port'.red, port.yellow);
      });      
})
