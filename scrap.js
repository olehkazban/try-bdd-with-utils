/**
 * @license JSUtilities 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Programming-Language for details
 */

var utils = require('./utils');

var testIntArray = [0, 1, 2, 3, 4];
var testStringArray = [
  'First sentence',
  'Second sentence',
  'Third sentence',
  'Fourth sentence',
  'Fifth sentence'
];
var testArrayObject = [
  {
    name: 'First Object',
    id: 0
  },
  {
    name: 'Second Object',
    id: 1
  },
  {
    name: 'Third Object',
    id: 2
  },
  {
    name: 'Fourth Object',
    id: 3
  },
  {
    name: 'Fifth Object',
    id: 4
  }
];
var testArrayOfArray = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24]
];
var testComplexArray = [
  [12, 15, 423, 34],
  1,
  2,
  [
    [1, 2, 3],
    [10, 20, 30]
  ]
];
var testObject = {
  name: 'First Object',
  id: 0
};
var testObjectArrays = {
  0: [0.2, 0.58, 0.47, 0.154],
  1: [1.23, 1.78, 1.47],
  8: [8]
};
var testObjectObject = {
  0: {
    name: 'First Object',
    id: 0
  },
  1: {
    name: 'Second Object',
    id: 1
  },
  2: {
    name: 'Third Object',
    id: 2
  }
};
var testSmartObject = {
  firstName: 'Oleh',
  lastName: 'Kazban',
  age: 35,
  email: 'kazban.oleh@gmail.com',
  address: 'Ukraine, Kharkiv, Academician Walter str., 19, apt. #567',
  phone: '+380 67 776 06 70',
  children: [
    {
      firstName: 'Dmitriy',
      lastName: 'Kazban',
      age: 8
    },
    {
      firstName: 'Veronika',
      lastName: 'Kazban',
      age: 4
    }
  ]
};
var testSmartObject2 = {
  firstName: 'Oleh',
  lastName: 'Kazban',
  age: 35,
  email: 'kazban.oleh@gmail.com',
  address: 'Ukraine, Kharkiv, Academician Walter str., 19, apt. #567',
  phone: '+380 67 776 06 70',
  children: [
    {
      firstName: 'Dmitriy',
      lastName: 'Kazban',
      age: 8
    },
    {
      firstName: 'Veronika',
      lastName: 'Kazban',
      age: 4
    }
  ]
};
var testInt = 123;
var testFloat = 7.62;
var testString = 'try to test me :)';
var testBoolean = false;
var testNull = null;
var testUndefined = undefined;

console.log('inputType() usage result:');
console.log(testNull + ' : ' + utils.inputType(testNull));
console.log(testUndefined + ' : ' + utils.inputType(testUndefined));
console.log(testInt + ' : ' + utils.inputType(testInt));
console.log(testFloat + ' : ' + utils.inputType(testFloat));
console.log(testString + ' : ' + utils.inputType(testString));
console.log(testBoolean + ' : ' + utils.inputType(testBoolean));
console.log(testIntArray + ' : ' + utils.inputType(testIntArray));
console.log(testObject + ' : ' + utils.inputType(testObject));
console.log(testArrayObject + ' : ' + utils.inputType(testArrayObject) + '\n');

console.log('toString() usage result:');
console.log(testIntArray + ' : \n' + utils.toString(testIntArray));
console.log(testStringArray + ' : \n' + utils.toString(testStringArray));
console.log(testArrayObject + ' : \n' + utils.toString(testArrayObject));
console.log(testArrayOfArray + ' : \n' + utils.toString(testArrayOfArray));
console.log(testComplexArray + ' : \n' + utils.toString(testComplexArray));
console.log(testObject + ' : \n' + utils.toString(testObject));
console.log(testObjectArrays + ' : \n' + utils.toString(testObjectArrays));
console.log(testObjectObject + ' : \n' + utils.toString(testObjectObject));
console.log(testSmartObject + ' : \n' + utils.toString(testSmartObject));

console.log('deepEqual() on smartObjects usage result:');
console.log(utils.deepEqual(testSmartObject, testSmartObject2));

