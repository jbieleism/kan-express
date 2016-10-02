const albumsController = {};

albumsController.GET = (req, res) => {
  console.log('this is the albums controller')
  res.json({
    message: 'straight swaggin g homes'
  })


};

albumsController.POST = (req, res) => {
  console.log('this is the post shit')
  res.json({
    message: 'boo beeeeez'
  })

}


module.exports = {
  albumsController: albumsController
}

