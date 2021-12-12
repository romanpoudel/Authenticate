const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// Import Routes
const authRoute = require('./routes/auth');

dotenv.config();


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
 res.send('Hello World');   
}
    )

// Route Middleware
app.use('/api/user',authRoute);

// connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true}, () => 
console.log('connected to DB')
);

app.listen(3000,()=>console.log('server is running on port 3000'));