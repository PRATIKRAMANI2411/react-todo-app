const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/ToDoRoute');
const cors = require('cors');

require('dotenv').config();
 
const app = express();
app.use(express.json())
app.use(cors())
const PORT = process.env.port || 5000

mongoose
.connect('mongodb://localhost:27017/todo-list')
.then(()=> console.log('Connect to MongoDB...'))
.catch((err)=> console.log(err))

app.use(routes);

app.listen(PORT, () => console.log(`Listening ${PORT}`))
 
