const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const recipes = require('./routers/recipes');
const dishes = require('./routers/dishes');
const server = express();

server.use(express.json())
server.use(helmet())
server.use(morgan('dev'))

server.get('/', async (req, res) => {
    res.send('This is not the endpoint you are looking for.')
})

server.use('/api/recipes', recipes)

server.use('/api/dishes', dishes)

module.exports = server
