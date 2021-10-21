const Axios = require('axios');
const ExampleModel = require('./dao/ExampleModel');


ExampleModel.getToday()
  .then( response => {
    console.log(response.rows)
  }).catch( error => {
    console.log(error)
  });