const express = require('express');

const userRouter = require('./users.router').userRouter;
const albumRouter = require('./albums.router').albumRouter;
const postRouter = require('./posts.router').postRouter;




const rootRouter = express.Router();

rootRouter.use('/users', userRouter);
rootRouter.use('/albums', albumRouter);
rootRouter.use('/posts', postRouter);



module.exports = {
  rootRouter: rootRouter
};







