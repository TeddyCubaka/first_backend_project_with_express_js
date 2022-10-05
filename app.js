const express = require('express');
const mongoose = require('mongoose');

const stuffRoutes = require('./routes/stuff')

const app = express();

mongoose.connect('mongodb+srv://Teddy:birhingingwa@teddy.miua6qr.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlParser: true,
  useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use('/api/stuff', stuffRoutes)

module.exports = app;