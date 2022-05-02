const app = require('express')();
const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors')

const userRoute = require('./Routes/user')
const userDataRoute = require('./Routes/userData');
const url = process.env.URL;

mongoose.connect(url,() => console.log('Database Connected...') , {  useNewUrlParser: true, useUnifiedTopology: true  })

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())
app.use(cookieParser());    
app.use('/api' , userRoute);
app.use('/api' , userDataRoute);
app.listen(port , () => console.log(`Server Runnning on ${port}...`));