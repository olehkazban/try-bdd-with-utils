var utils = require('./utils'),
  expect = require('expect.js');

describe('Utils', function () {

  describe('#sort()', function () {
    it('Should sort given array of numbers and pass in ascending ordering (with ascending comparator: a < b)', function () {
      expect(utils.deepEqual(utils.sort([2, 1, 1, 0], function (a, b) {
        return a < b;
      }), [0, 1, 1, 2])).to.equal(true);
    });

    it('Should sort given array of numbers in descending ordering (with descending comparator: a > b)', function () {
      expect(utils.deepEqual(utils.sort([2, 1, 3, 0], function (a, b) {
        return a > b;
      }), [3, 2, 1, 0])).to.equal(true);
    });

    it('Should throw an Error if input is not an Array', function () {
      expect(function () {
        utils.sort('test me if you can :)', function (a, b) {
          return a < b;
        })
      }).to.throwError('Incorrect input data format');
    });

    it('Should return an Array, if we call with Array in arguments', function () {
      var testArray = [0, 1, 2, 3];

      expect(utils.sort(testArray, function (a, b) {
        return a < b;
      })).to.be.a('array')
    });

    it('Should return an Object, if we call with Object in arguments', function () {
      var testObject = {
        1: [3, 1, 6],
        2: [1, 2, 3],
        3: [],
        4: [4, 0, 1]
      };

      expect(utils.sort(testObject, function (a, b) {
        return a < b;
      })).to.be.a('object')
    });

    it('Should not return a String', function () {
      var testArray = [1, 2, 3];

      expect(utils.sort(testArray, function (a, b) {
        return a < b;
      })).to.not.be('string');
    });

    it('Should return the same list instead of new instance',  function() {
      var testArray = [1, 2, 3];

      expect(utils.sort(testArray,  function(a, b) { return a < b; })).to.be.equal(testArray);
    });
  });

  describe('#capitalize()', function () {
    it('Should make first letter of given low case string upper case', function () {
      expect(utils.capitalize('just do it!')).to.equal('Just do it!');
    });

    it('Should make first letter of given upper case string upper case', function () {
      expect(utils.capitalize('JUST DO IT!')).to.equal('Just do it!');
    });

    it('Should throw an Error when input is not a String', function () {
      expect(function () {
        utils.capitalize(['a', 'b', 'c'])
      }).to.throwError('Incorrect input data format');
    });

    it('Should return a String', function () {
      var testString = 'try to test me :)';

      expect(utils.capitalize(testString)).to.be.a('string');
    });

    it('Should not return an Array', function () {
      var testString = 'try to test me :)';

      expect(utils.capitalize(testString)).to.not.be.a('array');
    });

    it('Should not return an Object', function () {
      var testString = 'try to test me :)';

      expect(utils.capitalize(testString)).to.not.be.a('object');
    });
  });

  describe('#camelize()', function () {
    it('Should camelize given string and pass', function () {
      expect(utils.camelize('just do it!')).to.equal('JustDoIt');
    });

    it('Should camelize given string and pass', function () {
      expect(utils.camelize('just   do  it!')).to.equal('JustDoIt');
    });

    it('Should camelize given array of string and pass', function () {
      expect(utils.camelize(['just', 'do', 'it!'])).to.equal('JustDoIt');
    });

    it('Should camelize given array of string and pass', function () {
      expect(utils.camelize(['just try to', 'do', 'it!'])).to.equal('JustTryToDoIt');
    });

    it('Should camelize given array of string and pass', function () {
      expect(utils.camelize([['just try to', 'do', 'it!'], 'do', 'it!'])).to.equal('JustTryToDoItDoIt');
    });

    it('Should camelize given array of string and pass', function () {
      expect(utils.camelize([['just   try  to', 'do', 'it!'], 'do', 'it!'])).to.equal('JustTryToDoItDoIt');
    });

    it('Should throw an Error when input data is not String or Array of Strings', function () {
      expect(function () {
        var testObject = {
          string: 'try to test me :)'
        };

        utils.camelize(testObject)
      }).to.throwError('Incorrect input data format');
    });

    it('Should return a string if input is String', function () {
      var testString = 'try to test me :)';

      expect(utils.camelize(testString)).to.be.a('string');
    });

    it('Should return a string if input is Array of Strings', function () {
      var testArray = [
        'try',
        'to test',
        'me :)))'
      ];

      expect(utils.camelize(testArray)).to.be.a('string');
    });

    it('Should not return an Object', function () {
      var testString = 'try to test me :)';

      expect(utils.camelize(testString)).to.not.be.a('object')
    });
  });

  describe('#trim()', function () {
    it('Should cut of any count of spaces from the beginning and from the end of the string', function () {
      expect(utils.trim('just try to do it!')).to.equal('just try to do it!');
    });

    it('Should cut of any count of spaces from the beginning and from the end of the string', function () {
      expect(utils.trim('   just try to do it!')).to.equal('just try to do it!');
    });

    it('Should cut of any count of spaces from the beginning and from the end of the string', function () {
      expect(utils.trim('just try to do it!     ')).to.equal('just try to do it!');
    });

    it('Should cut of any count of spaces from the beginning and from the end of the string', function () {
      expect(utils.trim('just try to do it!     ')).to.equal('just try to do it!');
    });

    it('Should cut of any count of spaces from the beginning and from the end of the string', function () {
      expect(utils.trim(' just try to do it!     ')).to.equal('just try to do it!');
    });

    it('Should cut of any count of spaces from the beginning and from the end of the string', function () {
      expect(utils.trim(' just   try  to do it!     ')).to.equal('just   try  to do it!');
    });

    it('Should throw an Error when input is not equal the string', function () {
      expect(function () {
        utils.trim([0, 1, 2, 3])
      }).to.throwError('Incorrect input data format');
    })

    it('Should return a String', function () {
      var testString = '    try to  test   me     :) ))   ';
      expect(utils.trim(testString)).to.be.a('string');
    });

    it('Should not return an Array', function () {
      var testString = '   try to test   me: ))';

      expect(utils.trim(testString)).to.not.be.a('array');
    });

    it('Should not return an Object', function () {
      var testString = '   try to test   me: ))';

      expect(utils.trim(testString)).to.not.be.a('object');
    });
  });

  describe('#reverse()', function () {
    it('Should reverses a specified list', function () {
      var testArray = [];

      expect(utils.deepEqual(utils.reverse(testArray), [])).to.equal(true);
    });

    it('Should reverses a specified list', function () {
      var testArray = [0];

      expect(utils.deepEqual(utils.reverse(testArray), [0])).to.equal(true);
    });

    it('Should reverses a specified list', function () {
      var testArray = [0, 1];

      expect(utils.deepEqual(utils.reverse(testArray), [1, 0])).to.equal(true);
    });

    it('Should reverses a specified list', function () {
      var testArray = [0, 1, 2];

      expect(utils.deepEqual(utils.reverse(testArray), [2, 1, 0])).to.equal(true);
    });

    it('Should reverses a specified list', function () {
      var testArray = [0, 1, 2, 3];

      expect(utils.deepEqual(utils.reverse(testArray), [3, 2, 1, 0])).to.equal(true);
    });

    it('Should reverses a specified list with expected length', function () {
      var testArray = [0, 1, 2, 3, 4];

      expect(utils.reverse(testArray)).to.have.length(5);
    });

    it('Should reverses a specified list and return the same instance', function () {
      var testArray = [0, 1, 2, 3];
      var reversedArray = utils.reverse(testArray);

      expect(utils.reverse(testArray)).to.equal(reversedArray);
    });

    it('Should throw an Error if return other instance of array', function () {
      var testArray1 = [0, 1, 2, 3];
      var testArray2 = [0, 1, 2, 3];

      expect(utils.reverse(testArray1) === utils.reverse(testArray2)).to.equal(false);
    });

    it('Should throw an Error if input is not Array', function () {
      expect(function () {
        utils.reverse('try to test me :)')
      }).to.throwError('Incorrect input data format');
    });

    it('Should not return an String', function () {
      var testArray = [1, 2, 3];

      expect(utils.reverse(testArray)).to.not.be.a('string')
    });

    it('Should return an Array', function () {
      var testArray = [1, 2, 3];

      expect(utils.reverse(testArray)).to.be.a('array')
    });

    it('Should return the same instance instead of new one', function () {
      var testArray = [0, 1, 2, 3];

      expect(utils.reverse(testArray)).to.be.equal(testArray);
    });
  });

  describe('#map()', function () {
    it('Should change each list element by applying handler', function () {
      var testArray = [1, 2, 3, 4, 5];

      expect(utils.deepEqual(utils.map(testArray, function (int) {
        return ++int;
      }), [2, 3, 4, 5, 6])).to.equal(true);
    });

    it('Should change each object key value by applying handler', function () {
      var testObject = {
        firstName: 'SomeFirstName',
        lastName: 'SomeLastName',
        address: 'Ukraine, Kharkiv, Novgorodska str, 3B',
        age: '35',
        phone: '+380677760670'
      };
      var equalObject = {
        firstName: 'SOMEFIRSTNAME',
        lastName: 'SOMELASTNAME',
        address: 'UKRAINE, KHARKIV, NOVGORODSKA STR, 3B',
        age: '35',
        phone: '+380677760670'
      };

      expect(utils.deepEqual(utils.map(testObject, function (string) {
        return string.toUpperCase();
      }), equalObject)).to.equal(true);
    });

    it('Should throw an Error if input is not an Array or Object', function () {
      expect(function () {
        utils.map('try to test me :)', function () {
          return true
        })
      }).to.throwError('Incorrect input data format');
    });

    it('Should return an modified Array if input is Array', function () {
      var testArray = [0, 1, 2, 3, 4];
      var map = utils.map(testArray, function (num) {
        return ++num;
      });

      expect(map).to.be.a('array');
    });

    it('Should return an modified Object if input is Object', function () {
      var testObject = {
        name: 'name',
        lastName: 'lastname'
      };

      var map = utils.map(testObject, function (string) {
        return string.toUpperCase();
      });

      expect(map).to.be.a('object');
    });

    it('Should return new instance of list instead of modified one', function () {
      var testArray = [0, 1, 2, 3, 4];
      var map = utils.map(testArray, function (num) {
        return ++num;
      });

      expect(map).to.not.be.equal(testArray);
    });
  });

  describe('#groupBy()', function () {
    it('Should accept an empty array and return an empty object', function () {
      var testArray = [];
      var expectedObject = {};

      expect(utils.deepEqual(utils.groupBy(testArray, function (num) {
        return Math.floor(num);
      }), expectedObject)).to.equal(true);
    });

    it('Should accept array with single element and return according object', function () {
      var testArray = [1.1];
      var expectedObject = {
        1: [1.1]
      };

      expect(utils.deepEqual(utils.groupBy(testArray, function (num) {
        return Math.floor(num);
      }), expectedObject)).to.equal(true);
    });

    it('Should group input sequnce in accordance with iterator and pass', function () {
      var testArray = [1.1, 4.5, 3.8, 3.1, 1.2, 1.3, 4.6, 5.2, 1.22, 5.25];
      var expectedObject = {
        1: [1.1, 1.2, 1.3, 1.22],
        3: [3.8, 3.1],
        4: [4.5, 4.6],
        5: [5.2, 5.25]
      };

      expect(utils.deepEqual(utils.groupBy(testArray, function (num) {
        return Math.floor(num);
      }), expectedObject)).to.equal(true);
    });

    it('Should group input sequnce in accordance with iterator and sort fields value by using util.sort()', function () {
      var testArray = [1.1, 4.5, 3.8, 3.1, 1.2, 1.3, 4.6, 5.2, 1.22, 5.25];
      var expectedObject = {
        1: [1.1, 1.2, 1.22, 1.3],
        3: [3.1, 3.8],
        4: [4.5, 4.6],
        5: [5.2, 5.25]
      };

      expect(utils.deepEqual(utils.sort(utils.groupBy(testArray, function (num) {
        return Math.floor(num);
      }), function (a, b) {
        return a < b;
      }), expectedObject)).to.equal(true);
    });

    it('Should throw an Error if input is not an Array', function () {
      expect(function () {
        utils.groupBy('try to input me :)', function () {
          return true;
        });
      }).to.throwError('Incorrect input data format');
    });

    it('Should return an Object', function () {
      var testArray = [1.25, 2.5, 4.58, 7.89, 5.2, 1.34, 0.38, 1.25, 2.98, 7.65];
      var groupBy = utils.groupBy(testArray, function (num) {
        return Math.floor(num);
      });

      expect(groupBy).to.be.a('object');
    });

    it('Should not return an String', function () {
      var testArray = [1.25, 2.5, 4.58, 7.89, 5.2, 1.34, 0.38, 1.25, 2.98, 7.65];
      var groupBy = utils.groupBy(testArray, function (num) {
        return Math.floor(num);
      });

      expect(groupBy).to.not.be.a('string');
    });
  });

  describe('#once()', function () {
    it('Function should run only once', function () {
      var testCounter = 0;

      var testFunc = utils.once(function () {
        ++testCounter;
      });

      for (var count = 0; count < 100; count++) {
        testFunc();
      }

      expect(testCounter).to.equal(1);
    });
  });

  describe('#debounce()', function () {
    it('Should return expected result', function () {
      var delay = 1000;
      var testVar = 'try to test me :)';

      expect(
        utils.debounce(function () {
          return testVar.toUpperCase()
        }, delay)
      ).to.equal('TRY TO TEST ME :)');
    });

    it('Should run after wait', function () {
      var delay = 1000;
      var testVar = 'try to test me :)';

      var date;
      var currentDate;

      var test = function () {
        date = new Date();
        utils.debounce(function () {
          return testVar.toUpperCase();
        }, delay);
        currentDate = new Date();

        return ((currentDate - date) <= delay);
      };

      expect(test()).to.equal(true);
    });

    it('Should run not less an delay', function () {
      var delay = 500;
      var testString = 'try to test me:)';

      var start = new Date();
      utils.debounce(function () {
        return testString.toUpperCase();
      }, delay);
      var finish = new Date();

      var duration = parseInt(finish - start);

      expect(duration).to.be.equal(delay);
    });
  });

  describe('#deepEqual()', function () {
    it('Should compare and pass equal arrays of equal size', function () {
      var testArray1 = [1, 2, 3];
      var testArray2 = [1, 2, 3];

      expect(utils.deepEqual(testArray1, testArray2)).to.equal(true);
    });

    it('Should compare and fail non equal arrays of equal size', function () {
      var testArray1 = [3, 2, 1];
      var testArray2 = [1, 2, 3];

      expect(utils.deepEqual(testArray1, testArray2)).to.equal(false);
    });

    it('Should compare and pass equal objects of equal size', function () {
      var testObject1 = {
        userFirstName: 'Maria',
        userAge: 25
      };
      var testObject2 = {
        userFirstName: 'Maria',
        userAge: 25
      };

      expect(utils.deepEqual(testObject1, testObject2)).to.equal(true);
    });

    it('Should compare and fail non equal objects of equal size', function () {
      var testObject1 = {
        userFirstName: 'Anna',
        userAge: 25
      };
      var testObject2 = {
        userFirstName: 'Maria',
        userAge: 27
      };

      expect(utils.deepEqual(testObject1, testObject2)).to.equal(false);
    });

    it('Should compare and fail non equal objects of equal size', function () {
      var testObject1 = {
        userFirstName: 'Anna',
        userAge: 25
      };
      var testObject2 = {
        userFirstName: 'Anna',
        userAge: 27
      };

      expect(utils.deepEqual(testObject1, testObject2)).to.equal(false);
    });

    it('Should compare and fail non equal objects of equal size', function () {
      var testObject1 = {
        userFirstName: 'Anna',
        userAge: 27
      };
      var testObject2 = {
        userFirstName: 'Maria',
        userAge: 27
      };

      expect(utils.deepEqual(testObject1, testObject2)).to.equal(false);
    });

    it('Should compare and fail when arrays are different size', function () {
      var testArray1 = [3, 2, 1, 4, 5];
      var testArray2 = [1, 2, 3];

      expect(utils.deepEqual(testArray1, testArray2)
      ).to.equal(false);
    });

    it('Should compare and fail when quantities of object fields are different', function () {
      var testObject1 = {
        userFirstName: 'FirstName'
      };
      var testObject2 = {
        userFirstName: 'FirstName',
        userLastName: 'LastName'
      };

      expect(utils.deepEqual(testObject1, testObject2)
      ).to.equal(false);
    });
  });

});