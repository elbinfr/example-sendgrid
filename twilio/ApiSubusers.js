const Api = require('./Api');

const END_POINT = 'subusers';

async function create (data) {
    return Api.post(`${END_POINT}`, data);
}

module.exports = {
  create
}