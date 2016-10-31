var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var publicPath = path.resolve(__dirname, 'public');
var Twitter = require('twitter')
var bodyParser = require('body-parser')


var config = require('./config')
var router = require('./router')
var knex = require('./database/').knex

var client = new Twitter({
  consumer_key: config.TWITTER_CONSUMER_KEY,
  consumer_secret: config.TWITTER_CONSUMER_SECRET,
  access_token_key: config.TWITTER_ACCESS_TOKEN,
  access_token_secret: config.TWITTER_ACCESS_SECRET
})

// We need to add a configuration to our proxy server,
// as we are now proxying outside localhost
var isProduction = process.env.NODE_ENV === 'production'
var port = isProduction ? process.env.PORT : 3000

var proxy = httpProxy.createProxyServer({
  changeOrigin: true
})
var app = express()

app.use(bodyParser.json())
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(publicPath))

// If you only want this for development, you would of course
// put it in the "if" block below

if (!isProduction) {
  var bundle = require('./compiler/compiler.js')
  bundle()
  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    })
  })
}

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...')
})

app.listen(port, function () {
  console.log('Server running on port ' + port)
})


router(app, client, knex)