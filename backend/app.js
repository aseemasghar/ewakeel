const express = require('express');
const errorMiddleware = require('./middleware/error');
const app = express();
app.use(express.json())

const lawyers = require('./routes/lawyersRoute')

app.use('/api/v1',lawyers)

// Middleware for errors

app.use(errorMiddleware);



module.exports=app