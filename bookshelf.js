const DB_USER = require('./config').DB_USER,
      DB_PW   = require('./config').DB_PASSWORD



const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: DB_USER,
    password: DB_PW,
    database: 'graph_that'
  }
})

module.exports = require('bookshelf')(knex)