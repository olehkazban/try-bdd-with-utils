var utils = require('./utils');

var testArray1 = ['just', 'do', 'it!'];
var testArray2 = ['just try to:', 'do', 'it!'];
var testArray3 = [['just', 'do', 'it!'], 'and do', 'it!'];

var testArray4 = [];
var testArray5 = [1];
var testArray6 = [1, 2];
var testArray7 = [1, 2, 3];
var testArray8 = [1, 2, 3, 4];
var testArray10 = [4, 3, 1, 2];
var testArray11 = [1, 3, 2, 4];
var testArray12 = [1, 3, 2, 4];

var testArray9 = [10, 2, -3, 40, -100, 5, 6];

var testString1 = 'just do it!';
var testString2 = 'just   do  it!';

var spaceString1 = '   abdfrg ';
var spaceString2 = 'abdfrg   ';
var spaceString3 = '  abd frg   ';
var spaceString4 = 'abd   frg';

var testObject1 = {
  userFirstName: 'Anna',
  userAge: 27
};
var testObject2 = {
  userFirstName: 'Maria',
  userAge: 27
};
var testObject3 = {
  userFirstName: 'Anna',
  userAge: 25
};
var testObject4 = {
  userFirstName: 'Anna',
  userAge: 25
};

//var testObject1 = {
//  firstName: 'FirstName',
//  lastName: 'LastName',
//  address: 'Ukraine, Kharkiv, Novgorodska str, 3B',
//  age: 35,
//  phone: '+380677760670'
//};

//console.log(testArray8 + ' : ' + utils.map(testArray8, function (int) {
//    return ++int;
//  }));
//
//console.log(testObject1 + ' : ' + utils.map(testObject1, function (field) {
//    return field.toUpperCase();
//  }));
//
//console.log(testObject1 + ' : ' + utils.map(testObject1, function (field) {
//    return field.toUpperCase();
//  }));

//function testMap(){
//  var testObject1 = {
//    firstName: 'SomeFirstName',
//    lastName: 'SomeLastName',
//    address: 'Ukraine, Kharkiv, Novgorodska str, 3B',
//    age: 35,
//    phone: '+380677760670'
//  };
//
//  var testObject2 = utils.map(testObject1, function(string){
//    string += '';
//    return string.toUpperCase(); });
//
//  printObject(testObject1);
//  printObject(testObject2);
//
//};

//testMap();

//function printObject(object) {
//  for (var objectProperty in object) {
//    console.log(object[objectProperty]);
//  }
//};

//printObject(testObject1);

//console.log(testArray1 + ' : ' + utils.camelize(testArray1));
//console.log(testArray2 + ' : ' + utils.camelize(testArray2));
//console.log(testArray3 + ' : ' + utils.camelize(testArray3));

//console.log(testArray4 + ' : ' + utils.reverse(testArray4));
//console.log(testArray5 + ' : ' + utils.reverse(testArray5));
//console.log(testArray6 + ' : ' + utils.reverse(testArray6));
//console.log(testArray7 + ' : ' + utils.reverse(testArray7));
//console.log(testArray8 + ' : ' + utils.reverse(testArray8));

//console.log(testString1 + ' : ' + utils.camelize(testString1));
//console.log(testString2 + ' : ' + utils.camelize(testString2));

//console.log(spaceString1 + ' : ' + utils.trim(spaceString1));
//console.log(spaceString2 + ' : ' + utils.trim(spaceString2));
//console.log(spaceString3 + ' : ' + utils.trim(spaceString3));
//console.log(spaceString4 + ' : ' + utils.trim(spaceString4));

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

//console.log(Object.prototype.toString.call(testArray1).toUpperCase());
//console.log(Object.prototype.toString.call(testString1).toUpperCase());
//console.log(Object.prototype.toString.call(testObject1).toUpperCase());

//console.log(testArray9 + ' : ' + utils.sort(testArray9, function(a, b) {return a < b}));
//console.log(testArray9 + ' : ' + utils.sort(testArray9, function(a, b) {return a = b}));
//console.log(testArray9 + ' : ' + utils.sort(testArray9, function(a, b) {return a > b}));

//console.log(testString1 + ' : ' + testString2 + ' : ' + utils.deepEqual(testString1, testString2));
//
//console.log(testArray8 + ' : ' + testArray10 + ' : ' + utils.deepEqual(testArray8, testArray10));
//console.log(testArray8 + ' : ' + testArray11 + ' : ' + utils.deepEqual(testArray8, testArray11));
//console.log(testArray11 + ' : ' + testArray12 + ' : ' + utils.deepEqual(testArray11, testArray12));

console.log(testObject1 + ' : ' + testObject2 + ' : ' + utils.deepEqual(testObject1, testObject2));
console.log(testObject1 + ' : ' + testObject3 + ' : ' + utils.deepEqual(testObject1, testObject3));
console.log(testObject3 + ' : ' + testObject4 + ' : ' + utils.deepEqual(testObject3, testObject4));
