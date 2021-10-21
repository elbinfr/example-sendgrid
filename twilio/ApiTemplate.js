const Api = require('./Api');

const END_POINT = 'templates';

async function create (data) {
  return Api.post(`${END_POINT}`, data);
}

async function createVersion (templateId, data) {
  return Api.post(`${END_POINT}/${templateId}/versions`, data);
}

module.exports = {
  create,
  createVersion
}