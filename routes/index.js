"use strict";

var countries = require('./countries');


module.exports = function(app) {
  app.get('/', countries.getcountires);
  app.get('/country/:name', countries.getcountry);
};