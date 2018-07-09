// const express = require('express');
import express from 'express';
// import {welcome, add} from './hello';
import welcome from './hello';

const app = express();

// app.get('/', (req, res) => res.send('Hello World!'));
app.get('/', (req, res) => res.send(welcome));
// app.get('/', (req, res) => res.send(add(5, 5).toString()));

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

// Create a node application:
// npm init -y 

// Install express server module
// npm i express --save

// To run server type the following:
// node --experimental-modules index.mjs

// To install nodemon server type the following:
// npm i -D nodemon --save

// To run nodemon server type the following:
// npm start
