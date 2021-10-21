'use strict';

const Model = require('./Model');

class ContactModel extends Model {

  async insert ({ email, first_name, last_name, plan, payment_method, term, attached, id }) {
    let query = `INSERT INTO contacts
    (email, first_name, last_name, plan, payment_method, term, attached, id)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8)`;

    return this.pool.query(query, [ email, first_name, last_name, plan, payment_method, term, attached, id ]);
  }

  async getAll () {
    return this.pool.query('select * from contacts order by id');
  }
}

module.exports = ContactModel;