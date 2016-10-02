const express = require('express');
const albumRouter = express.Router();
const albumsController = require('../controllers').albumsController


albumRouter.get('/', albumsController);



module.exports = {
  albumRouter: albumRouter
}