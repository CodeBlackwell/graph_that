"use strict"

var bookshelf = require('../bookshelf')

module.exports = function(knex) {
  
  knex.schema.createTableIfNotExists("plane_crashes_1908", function(table) {
    
    table.increments('crash_id').primary();
    table.string('date')
    table.string('time')
    table.string('location')
    table.string('operator')
    table.string('flight_#')
    table.string('route')
    table.string('type')
    table.string('registration')
    table.integer('aboard')
    table.integer('fatalities')
    table.integer('ground')
    table.string('summary')
  }).then(function(){ console.log('done')})

  var User = bookshelf.Model.extend({
    tableName: 'users'
  })

  new User({name: 'New User'}).save().then(function(){
    console.log('saved a user')
  })

  //Converter Class 
  const Converter = require("csvtojson").Converter;
  const converter = new Converter({});

  converter.fromFile("/Users/tonywinglau/Desktop/Datasets/Airplane_Crashes_and_Fatalities_since_1908.csv", function(err, result) {
   console.log(result[0])
  });
}

