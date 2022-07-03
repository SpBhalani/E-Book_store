const app = require('express')();
const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors')
const bodyParser = require('body-parser')
const userRoute = require('./Routes/user')
const userDataRoute = require('./Routes/userData');
const categoryRoute = require("./Routes/category");
const bookRoute = require("./Routes/book");
const cartRoute = require("./Routes/cart");
const url = process.env.URL;

mongoose.connect(url, () => console.log('Database Connected...'), { useNewUrlParser: true, useUnifiedTopology: true })

const port = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(express.json());
app.use(cors())
app.use(cookieParser());
app.use('/api', userRoute);
app.use('/api', userDataRoute);
app.use('/api', categoryRoute);
app.use('/api', bookRoute);
app.use('/api', cartRoute);
app.listen(port, () => console.log(`Server Running on ${port}...`));