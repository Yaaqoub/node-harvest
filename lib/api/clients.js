'use strict';

const helpers = require('../helpers');

function Clients(harvest) {
  this.harvest = harvest;
  this.harvest.request = harvest.request;
}

Clients.prototype.list = function(options, cb) {
  let uri = '/clients';
  this.harvest.request('GET', uri, {}, cb);
};

Clients.prototype.get = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('retrieving a single client requires an id'));
  }

  let uri = '/clients/' + options.id;
  this.harvest.request('GET', uri, {}, cb);
};

Clients.prototype.create = function(options, cb) {
  let uri = '/clients';
  this.harvest.request('POST', uri, options, cb);
};

Clients.prototype.update = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('updating a client requires an id'));
  }

  let uri = '/clients/' + options.id;
  delete options.id;
  this.harvest.request('PUT', uri, options, cb);
};

Clients.prototype.toggleActivation = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('toggling client activation requires an id'));
  }

  let uri = '/clients/' + options.id + '/toggle';
  this.harvest.request('POST', uri, {}, cb);
};

Clients.prototype.delete = function(options, cb) {
  if (!helpers.has(options, ['id'])) {
    return cb(new Error('deleting clients requires an id'));
  }

  let uri = '/clients/' + options.id;
  this.harvest.request('DELETE', uri, {}, cb);
};

module.exports = Clients;