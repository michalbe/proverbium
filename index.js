'use strict';

var rpp = require('random-polish-proverb');

var getFirst = function(first) {
  if (~first.indexOf(',')) {
    return first.split(',')[0];
  } else if (~first.indexOf(';')) {
    return first.split(';')[0];
  } else {
    var splitted = first.split(' ');
    var wordsCount = Math.round(splitted.length/2);
    // var words = splitted.slice(Math.max(splitted.length - wordsCount, 1));
    var words = splitted.slice(0, wordsCount);
    return words.join(' ');
  }
};

var proverbium = function(cb) {
  rpp(function(pr1){
    rpp(function(pr2) {
      var first = getFirst(pr1);
      cb([pr1, pr2, first]);
    });
  });
};

proverbium(function(result){
  console.log(result);
});
