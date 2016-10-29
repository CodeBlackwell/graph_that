"use strict"
var knex = require('../database/bookshelf').knex
var bookshelf = require('../database/bookshelf').bookshelf
// var Promise = require('bluebird')


var PlaneCrash = bookshelf.Model.extend({
  tableName: 'plane_crashes_1908'
})

//Converter Class 
const Converter = require("csvtojson").Converter
const converter = new Converter({})

converter.fromFile("/Users/tonywinglau/Desktop/Datasets/Airplane_Crashes_and_Fatalities_since_1908.csv", function(err, crashRecords) {
  if(err){
    throw err
  }
  crashRecords.forEach(record => {
    for(var key in record) {
      if (key === 'Flight #') {
        var temp = record[key]
        record['Flight'] = temp
        delete record[key]
      } else if (key === 'cn/In') {
        delete record[key]
      } else if (record[key] === '') {
        record[key] = null
      }
    }
  })
  knex('plane_crashes_1908').insert(crashRecords)
  .then(() => console.log('insertion complete. Enjoy your data sir'))
  .catch(error => { throw error })
})


