//Converter Class 
var Converter = require("csvtojson").Converter;
var converter = new Converter({});

converter.fromFile("/Users/tonywinglau/Desktop/Datasets/Airplane_Crashes_and_Fatalities_since_1908.csv", function(err, result) {
 console.log(result[0])
});

