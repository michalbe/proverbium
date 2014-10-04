'use strict';

var proverbium = require('./');
var clc = require('cli-color');

proverbium(function(result) {
  console.log('');
  console.log('1st proverb: ', clc.white(result.first));
  console.log('2nd proverb: ', clc.white(result.second));
  console.log('Mix: ', clc.redBright.bold(result.mix));
  console.log('');
});
