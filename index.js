'use strict';

var rpp = require('random-polish-proverb');

var getFirst = function(first) {
  if (~first.indexOf(', ') && ~~(Math.random()*3) > 0) {
    return first.split(', ')[0];
  } else if (~first.indexOf('; ')) {
    return first.split('; ')[0];
  } else {
    var splitted = first.split(' ');
    var wordsCount = Math.round(splitted.length/2) + (1-~~(Math.random()*3));
    var words = splitted.slice(0, wordsCount);
    return words.join(' ');
  }
};
var getLast = function(last) {
  if (~last.indexOf(', ') && ~~(Math.random()*3) > 0) {
    return last.split(', ').pop();
  } else if (~last.indexOf('; ')) {
    return last.split('; ').pop();
  } else {
    var splitted = last.split(' ');
    var wordsCount = Math.round(splitted.length/2) + (1-~~(Math.random()*3));
    var words = splitted.slice(Math.max(splitted.length - wordsCount, 1));
    return words.join(' ');
  }
};

var proverbium = function(cb) {
  rpp(function(a){
    rpp(function(b) {
      cb({
        first: a,
        second: b,
        mix1: getFirst(a) + ' ' + getLast(b),
        mix2: getFirst(b) + ' ' + getLast(a)
      });
    });
  });
};

module.exports = proverbium;
