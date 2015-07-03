var utils = require('./utils');

var testArray1 = ['just', 'do', 'it!'];
var testArray2 = ['just try to:', 'do', 'it!'];
var testArray3 = [['just', 'do', 'it!'], 'and do', 'it!'];

var testString1 = 'just do it!';
var testString2 = 'just   do  it!';

console.log(testArray1 + ' : ' + utils.camelize(testArray1));
console.log(testArray2 + ' : ' + utils.camelize(testArray2));
console.log(testArray3 + ' : ' + utils.camelize(testArray3));

console.log(testString1 + ' : ' + utils.camelize(testString1));
console.log(testString2 + ' : ' + utils.camelize(testString2));

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
