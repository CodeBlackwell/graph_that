"use strict"

var bookshelf = require('../bookshelf')



// knex.schema.createTableIfNotExists("plane_crashes_1908", function(table) {
  
//   table.increments('crash_id').primary();
//   table.string('date')
//   table.string('time')
//   table.string('location')
//   table.string('operator')
//   table.string('flight_#')
//   table.string('route')
//   table.string('type')
//   table.string('registration')
//   table.integer('aboard')
//   table.integer('fatalities')
//   table.integer('ground')
//   table.string('summary')
//   console.log('table created')

// })

var users = bookshelf.Model.extend({
  tableName: 'users'
})

//Converter Class 
const Converter = require("csvtojson").Converter;
const converter = new Converter({});

converter.fromFile("/Users/tonywinglau/Desktop/Datasets/Airplane_Crashes_and_Fatalities_since_1908.csv", function(err, result) {
 console.log(result[0])
});
