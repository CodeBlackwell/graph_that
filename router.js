module.exports = function(app, Twitter, knex) {

  app.get('/tweets/:user', function(req, res) {
    var params = { screen_name: req.params.user }
    if( req.query.max_id ){ params.max_id = req.query.max_id }

    Twitter.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        res.json(tweets)
      } else if (error) { throw error }
    })
  })

  app.get('/data/planecrashes', function(req, res) {
    knex.select().table('plane_crashes_1908').limit(10)
    .then(function(crashData) {
      res.json(cleanCrashData(crashData))
    })
    .catch(err => console.log(err))
  })
} 

/**
*@params {Array} data - an array of JSON objects containing information about individual plane crashes
*@returns {Array} An array containing only the utilized key-value pairs from the data
*/
function cleanCrashData(data) {
  return data.map(function(crashData) {
    return {
      id: crashData.id,
      location: crashData.location,
      date: crashData.date,
      fatalities: crashData.fatalities,
      summary: crashData.summary
    }
  })
}