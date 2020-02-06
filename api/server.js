const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const animalRouter = require('../animals/animal-router');
const userRouter = require('../users/user-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/animals', animalRouter);
server.use('/users', userRouter);

server.get('/', (req, res) => {
  res.status(200).json({
    message: "In the jungle, the mighty jungle, the lion sleeps tonight!"
  })
});

module.exports = server;