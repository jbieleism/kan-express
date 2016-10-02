const express = require('express');
const userRouter = express.Router();

const usersController = require('../controllers').usersController;



userRouter.get('/', usersController.GET);
userRouter.post('/', usersController.POST)

module.exports = {
  userRouter: userRouter
}