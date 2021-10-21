const ApiSubusers = require('../twilio/ApiSubusers');

let subuser = {
  username: 'pcarranza',
  email: 'pcarranza@sinapsis.com.pe',
  password: 'pierina123$',
  ips: [
    '190.235.15.99'
  ]
}

ApiSubusers.create(subuser)
  .then( response => {
    console.log('subuser saved');
    console.log(response.data);
  }).catch( error => {
    console.log(error.response.data.errors);
  });