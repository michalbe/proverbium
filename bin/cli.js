#!/usr/bin/env node
'use strict';

var proverbium = require('../');
var clc = require('cli-color');
var argv = require('minimist')(process.argv.slice(2));

proverbium(function(result) {
  console.log('');
  console.log('1st proverb: ', clc.white(result.first));
  console.log('2nd proverb: ', clc.white(result.second));
  console.log('Mix 1: ', clc.redBright.bold(result.mix1));
  console.log('Mix 2: ', clc.redBright.bold(result.mix2));
  console.log('');
}, argv._[0]);
