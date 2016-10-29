var Promise = require('bluebird')
var knex = require('../database/bookshelf').knex



knex.schema.createTableIfNotExists('plane_crashes_1908', function(table) {
  table.increments()
  table.string('date')
  table.string('time')
  table.string('location')
  table.string('operator')
  table.string('flight')
  table.string('route')
  table.string('type')
  table.string('registration')
  table.integer('aboard')
  table.integer('fatalities')
  table.integer('ground')
  table.text('summary')
}).then(function(){ console.log('finished creating plane_crashes_1908 table') }).catch(err => { throw err })
