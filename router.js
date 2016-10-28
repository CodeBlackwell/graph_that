module.exports = function(app, Twitter) {

  app.get('/tweets/:user', function(req, res) {

    var params = { screen_name: req.params.user }
    if( req.query.max_id ){ params.max_id = req.query.max_id }


    Twitter.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        res.json(tweets)
      } else if (error) { throw error }
    })
  })
} 