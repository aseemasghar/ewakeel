const express = require('express');
const errorMiddleware = require('./middleware/error');
const app = express();
const cookieParser = require('cookie-parser');


app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({limit:"50mb",extended:true}));
app.use(cookieParser());

//Import Routes
const Case = require('./routes/caseRoute');
const user = require('./routes/userRoute');

app.use('/api/v1',Case);
app.use('/api/v1',user);

// Middleware for errors

app.use(errorMiddleware);



module.exports=app