#!/usr/bin/env node

/**
 * Module dependencies.
 */

String.prototype.replaceAll = function(substring, replacement) {
  var result = '';
  var lastIndex = 0;

  while(true) {
    var index = this.indexOf(substring, lastIndex);
    if(index === -1) break;
    result += this.substring(lastIndex, index) + replacement;
    lastIndex = index + substring.length;
  }

  return result + this.substring(lastIndex);
};

var program = require('commander'),
    pkginfo = require('pkginfo')(module, 'version'),
    colors  = require("colors"),
    fs      = require('fs');

var legend = require('./legend'); // ./ means current directory, and don't need .js b/c all require files are js

program
  .version(module.exports.version, '-v, --version')
  .description('Hodlor hodlor hodlor')
  .parse(process.argv);

var hodlor = program.args[0];

if( typeof(hodlor) === 'undefined') {
  console.log('HODLOR:'.bold.red + ' hodlor hodlor hodlor!'.red);
} else {
  if (hodlor.search(".hd") > 0) { // user entered a .hd file
    console.log('HODLOR: '.bold.cyan + '\\-> '.white + hodlor.white);
    var text = fs.readFileSync(hodlor).toString(); // the contents of the file
    convertCode(text);
  } else { // user entered something apart from a hd file
    console.log('HODLOR:'.bold.red + ' hodlor hodlor!'.red);
  }
}

function convertCode (text) {
  var hodlorText = text;

  for (i = (legend.length - 1); i >= 0; i--){
    var query = legend[i];

    hodlorText = hodlorText.replaceAll(query.replace, query.search);
  }

  hodlorText = hodlorText.replace(/hello,? world!?/ig, 'HODLOR');

  eval(hodlorText);
}