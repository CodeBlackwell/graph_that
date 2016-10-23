module.exports = function(app, Twitter) {

  app.get('/tweets/:user', function(req, res) {
    var params = { screen_name: req.params.user }

    Twitter.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        res.json(tweets)
      } else if (error) { throw error }
    })
  })
} 