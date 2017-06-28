'use strict'


var dictionary = [];
var rectifiedCases = {};
var smallestWord =  2;

module.exports =  function (document, convention, callback) {
  var reader = require('./lib/dictionary-reader');
  reader('default', function (err, rows) {
    dictionary =  rows;

    if (err) { callback(err); }
    try {
      callback(null, convert(document, convention));
    }
    catch (e) {
      callback(e);
    }
  });
};

function convert(document, convention) {
 //createIndices(document, convention);


}


/*
function createIndices(document, conversion) {
  var keys =  Object.keys(document);

  for (var i in keys) {
    if (! rectifiedCases.hasOwnProperty(keys[i])) {
      rectifiedCases[keys[i]] =  addCase(document[keys[i]], convention);
    }
  }

  return true;
}
*/

function addCase(words, convention) {
  if (words.length <=  smallestWord) {  return words;}

  var recognisedCases = ['camel', 'snake'];
  if (! convention || recognisedCases.indexOf(convention) < 0) { convention =  'camel'; }

  var currentWord = '';
  var newKey = '';
  for (var i = 0; i < words.length; i++  ) {
    currentWord += words[i];
    if (currentWord.length >= smallestWord ) {
      var index =  dictionary.indexOf(currentWord);
      if (index >= 0) {
        newKey += prepareForCase(currentWord, convention, newKey.length === 0);
        currentWord = '';
      }
    }
  }

  if (currentWord.length > 0) {
    newKey += toSentenceCase(currentWord);
  }

  return newKey;
}

function prepareForCase(word,  convention, isFirst) {
  switch(convention) {
    case 'camel':
      if (isFirst) {
        return word.toLowerCase();
      }
      else {
        return toSentenceCase(word)
      }
      break;
    case 'snake':
      if (isFirst) {
        return word.toLowerCase();
      }
      else {
        return '_' +  word.toLowerCase();
      }
      break;
    default:
      return word;
      break;
  }
}

function toSentenceCase(word) {
  return word[0].toUpperCase() +  word.substr(1, word.length) ;
}


