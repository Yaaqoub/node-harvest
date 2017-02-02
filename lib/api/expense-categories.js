'use strict';

const helpers = require('../helpers');

function ExpenseCategories(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;
}

ExpenseCategories.prototype.list = function(options, cb) {
  let uri = '/expense_categories';
  this.harvest.request('GET', uri, {}, cb);
};

ExpenseCategories.prototype.get = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('retrieving an expense catageory requires an id'));
  }

  let uri = '/expense_categories/' + options.id;
  this.harvest.request('GET', uri, {}, cb);
};

ExpenseCategories.prototype.create = function(options, cb) {
  let uri = '/expense_categories';
  this.harvest.request('POST', uri, options, cb);
};

ExpenseCategories.prototype.update = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('updating an expense catageory requires an id'));
  }

  let uri = '/expense_categories/' + options.id;
  this.harvest.request('PUT', uri, {}, cb);

};

ExpenseCategories.prototype.toggle = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('toggling an expense catageory requires an id'));
  }

  let uri = '/expense_categories/' + options.id + '/toggle';
  this.harvest.request('POST', uri, {}, cb);
};

ExpenseCategories.prototype.delete = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('deleting an expense catageory requires an id'));
  }

  let uri = '/expense_categories/' + options.id;
  this.harvest.request('DELETE', uri, {}, cb);
};

module.exports = ExpenseCategories;