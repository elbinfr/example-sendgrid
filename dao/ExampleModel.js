'use strict';

const Model = require('./Model');

class ExampleModel extends Model{

  static async getToday () {
    return ExampleModel.connection.query('SELECT NOW()');
  }

}

module.exports = ExampleModel;