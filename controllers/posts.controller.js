const postsController = {};


postsController.GET = (req, res) => {
  console.log('this is the posts GET');
  res.json({
    message:'poopy pants in the posts gets'
  })
}


postsController.POST = (req, res) =>{
  console.log("pooppppppyyyyy")
  res.json({
    message:'everything is fine nothing to see here'
  })
}


module.exports = {
  postsController: postsController
}
