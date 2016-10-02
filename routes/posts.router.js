const express = require('express');

const postRouter = express.Router();


postRouter.get('/posts', (req, res) => {
  console.log('are these some posts?')
  res.json({
    message:'this is a post'
  });
});


module.exports = {
  postRouter: postRouter
}
