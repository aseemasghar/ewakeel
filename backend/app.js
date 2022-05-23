const express = require('express');
const app = express();
app.use(express.json())

const lawyers = require('./routes/lawyersRoute')

app.use('/api/v1',lawyers)

module.exports=app