const express = require('express');
const errorMiddleware = require('./middleware/error');
const app = express();
const cookieParser = require('cookie-parser');


app.use(express.json());
app.use(cookieParser());

//Import Routes
const lawyer = require('./routes/lawyersRoute');
const client = require('./routes/clientsRoute');

app.use('/api/v1',lawyer);
app.use('/api/v1',client);

// Middleware for errors

app.use(errorMiddleware);



module.exports=app