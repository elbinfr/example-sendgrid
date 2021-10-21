'use strict';

const pool = require('./connection');

class Model {
  static connection = pool;
  
  constructor () {
    this.pool = pool;
  }

}

module.exports = Model;