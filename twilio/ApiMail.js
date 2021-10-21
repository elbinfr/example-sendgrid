const Api = require('./Api');

const END_POINT = 'mail';

async function send (data) {
    return Api.post(`${END_POINT}/send`, data);
}

module.exports = {
    send
}