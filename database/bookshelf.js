var DB_USER = require('../config').DB_USER
var DB_PASSWORD = require('../config').DB_PASSWORD

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: DB_USER,
    password: DB_PASSWORD,
    database: 'graph_that',
    charset: 'utf8'
  },
  useNullAsDefault: true
})

var bookshelf = require('bookshelf')(knex)

bookshelf.plugin('registry')

module.exports = {
  knex: knex,
  bookshelf: bookshelf
}
