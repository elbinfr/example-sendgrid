const configApp = require('config');
const axios = require('axios');

let Api = axios.create({
  baseURL: configApp.get('sendgrid.url')
});

Api.interceptors.request.use(
  (config) => {
      let apiKey = configApp.get('sendgrid.apiKey');

      if (apiKey) {
          config.headers['Authorization'] = `Bearer ${apiKey}`;
          config.headers['content-type'] = "application/json";
      }

      return config
  },

  (error) => {
      return Promise.reject(error)
  }
)

module.exports = Api;