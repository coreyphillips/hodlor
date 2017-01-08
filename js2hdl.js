#!/usr/bin/env node

/**
 * Module dependencies.
 */

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
  if (hodlor.search(".js") > 0) { // user entered a .js file
    console.log('HODLOR: '.bold.cyan + hodlor.bold.white + ' => '.yellow + hodlor.replace('.js', '.hd').bold.white);
    var text = fs.readFileSync(hodlor).toString(); // the contents of the file
    convertCode(text);
  } else { // user entered something apart from a js file
    console.log('HODLOR:'.bold.red + ' hodlor hodlor!'.red);
  }
}

function convertCode (text) {
  var outputFileName = hodlor.replace(".js", ".hd");
  var hodlorText = text;
  
  for (i = 0; i < legend.length; i++){
    var query = legend[i];
    var re    = new RegExp(query.search, 'g');

    hodlorText = hodlorText.replace(re, query.replace);
  }
  
  fs.writeFileSync(outputFileName, hodlorText);  
}