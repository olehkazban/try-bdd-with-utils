var utils = require('./utils');

var testArray1 = ['just', 'do', 'it!'];
var testArray2 = ['just try to:', 'do', 'it!'];
var testArray3 = [['just', 'do', 'it!'], 'and do', 'it!'];

var testString1 = 'just do it!';
var testString2 = 'just   do  it!';

var spaceString1 = '   abdfrg ';
var spaceString2 = 'abdfrg   ';
var spaceString3 = '  abd frg   ';
var spaceString4 = 'abd   frg';

//console.log(testArray1 + ' : ' + utils.camelize(testArray1));
//console.log(testArray2 + ' : ' + utils.camelize(testArray2));
//console.log(testArray3 + ' : ' + utils.camelize(testArray3));
//
//console.log(testString1 + ' : ' + utils.camelize(testString1));
//console.log(testString2 + ' : ' + utils.camelize(testString2));

console.log(spaceString1 + ' : ' + utils.trim(spaceString1));
console.log(spaceString2 + ' : ' + utils.trim(spaceString2));
console.log(spaceString3 + ' : ' + utils.trim(spaceString3));
console.log(spaceString4 + ' : ' + utils.trim(spaceString4));

//console.log('Array instance of');
//console.log('Array: ' + (testArray1 instanceof Array));
//console.log('String: ' + (testArray1 instanceof String));
//console.log('Object: ' + (testArray1 instanceof Object));
//
//console.log('typeof array: ' + (typeof testArray1));
//
//console.log('String instance of');
//console.log('Array: ' + (testString1 instanceof Array));
//console.log('String: ' + (testString1 instanceof String));
//console.log('Object: ' + (testString1 instanceof Object));
//
//console.log('typeof string: ' + (typeof testString1));
