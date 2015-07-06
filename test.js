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

    it('We expect that we accept an Array, but not object or something else', function () {
      expect(function () {
        utils.sort('test me if you can :)', function (a, b) {
          return a < b;
        })
      }).to.throwError('Incorrect input data format');
    });
  });

  describe('#capitalize()', function () {
    it('Should make first letter of given low case string upper case', function () {
      expect(utils.capitalize('just do it!')).to.equal('Just do it!');
    });

    it('Should make first letter of given upper case string upper case', function () {
      expect(utils.capitalize('JUST DO IT!')).to.equal('Just do it!');
    });

    it('We expect that we accept an string, but not something else', function () {
      expect(function () {
        utils.capitalize(['a', 'b', 'c'])
      }).to.throwError('Incorrect input data format');
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

    it('Should fail when input data is not String or Array of Strings', function () {
      expect(function () {
        var testObject = {
          string: 'try to test me :)'
        };

        utils.camelize(testObject)
      }).to.throwError('Incorrect input data format');
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

    it('Should fail when input is not equal the string', function () {
      expect(function () {
        utils.trim([0, 1, 2, 3])
      }).to.throwError('Incorrect input data format');
    })
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

    it('Should reverses a specified list and return the same instance', function () {
      var testArray = [0, 1, 2, 3];
      var reversedArray = utils.reverse(testArray);

      expect(utils.reverse(testArray)).to.equal(reversedArray);
    });

    it('Should fail if return other instance of array', function () {
      var testArray1 = [0, 1, 2, 3];
      var testArray2 = [0, 1, 2, 3];

      expect(utils.reverse(testArray1) === utils.reverse(testArray2)).to.equal(false);
    });

    it('Should fail if input is not Array', function() {
      expect(function() {
        utils.reverse('try to test me :)')
      }).to.throwError('Incorrect input data format');
    });
  });

  describe('#map()', function () {
    it('should change each list element by applying handler', function () {
      var testArray = [1, 2, 3, 4, 5];

      expect(utils.map(testArray, function (int) {
        return ++int;
      }).join()).to.equal([2, 3, 4, 5, 6].join());
    });
  });

  describe('#map()', function () {
    it('should change each list element by applying handler', function () {
      var testObject = {
        firstName: 'SomeFirstName',
        lastName: 'SomeLastName',
        address: 'Ukraine, Kharkiv, Novgorodska str, 3B',
        age: 35,
        phone: '+380677760670'
      };

      var equalObject = {
        firstName: 'SOMEFIRSTNAME',
        lastName: 'SOMELASTNAME',
        address: 'UKRAINE, KHARKIV, NOVGORODSKA STR, 3B',
        age: 35,
        phone: '+380677760670'
      };

      expect(utils.map(testObject, function (string) {
        string += '';
        return string.toUpperCase();
      }).toString()).to.equal(equalObject.toString());
    });
  });


  describe('#deepEqual', function () {
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

  //describe('#groupBy()', function() {
  //  it('should group some input sequence of element by some rule', function() {
  //  });
  //});
  //
  //describe('#once()', function() {
  //  it('should create a version of the function that can only be called one time', function() {
  //  });
  //});
  //
  //describe('#debounce()', function() {
  //  it('should create and return a new debounced version of the passed function', function() {
  //  });
  //});

});