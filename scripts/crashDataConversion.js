const DB_USER = require('../config').DB_USER,
      DB_PW   = require('../config').DB_PASSWORD

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: DB_USER,
    password: DB_PW,
    database: 'graph_that'
  }
});
//Converter Class 
var Converter = require("csvtojson").Converter;
var converter = new Converter({});

converter.fromFile("/Users/tonywinglau/Desktop/Datasets/Airplane_Crashes_and_Fatalities_since_1908.csv", function(err, result) {
 console.log(result[0])
});

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
  console.log('table created')

})
