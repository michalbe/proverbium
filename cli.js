'use strict';

var proverbium = require('./');
var clc = require('cli-color');

proverbium(function(result){
  console.log(clc.white(result.first));
  console.log(clc.white(result.second));
  console.log(clc.redBright.bold(result.mix));
});
