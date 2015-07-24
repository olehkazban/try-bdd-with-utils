var util = {
  /**
   * Sort given array by provided rule in comparator function
   * @param {Array|Object[]} list
   * @param {Function} comparator
   */

  sort: function (list, comparator) {
    if (util.inputType(list) === 'array') { // we should ensure that input is an Array, not something else

      for (var barrier = list.length - 1; barrier >= 0; barrier--) {
        for (var count = 0; count < barrier; count++) {
          if (comparator(list[barrier], list[count])) {
            var tmp = list[count];
            list[count] = list[barrier];
            list[barrier] = tmp;
          }
        }
      }

      return list;
    } else if (util.inputType(list) === 'object') {
      for (var property in list) {
        if (list.hasOwnProperty(property) && util.inputType(list[property]) === 'array') {
          list[property] = util.sort(list[property], comparator);
        }
      }

      return list;
    } else {
      throw new Error('Incorrect input data format');
    }
  },

  /**
   * Make first letter of given string upper case
   * @param {String} string
   * @return {String} capitalized string
   */

  capitalize: function (string) {
    if (util.inputType(string) === 'string') {
      string = string.toLowerCase();
      string = string.replace(/^[a-z]/, function (m) {
        return m.toUpperCase();
      });

      return string;
    } else {
      throw new Error('Incorrect input data format');
    }
  },

  /**
   * Camelize given string or array of string
   * @param {Array|String} sequence
   * @return {String} capitalized string
   */

  camelize: function (sequence) {
    if (
      util.inputType(sequence) === 'array' ||
      util.inputType(sequence) === 'string'
    ) {
      var string = '';

      if (util.inputType(sequence) === 'array') {
        for (var counter = 0; counter < sequence.length; counter++) {
          if ((typeof sequence[counter]) === 'object') {
            var subSequence = sequence[counter];
            string += util.camelize(subSequence);
          } else if (/\s/.test(sequence[counter])) {
            var subSequence = sequence[counter].split(' ');
            string += util.camelize(subSequence);
          } else {
            sequence[counter] = sequence[counter].replace(/\W/, ''); // removing spec chars
            sequence[counter] = sequence[counter].replace(/[0-9]]/); // removing digits

            string += util.capitalize(sequence[counter]);
          }
        }
      }
      else if (util.inputType(sequence) === 'string') {
        var subSequence = sequence.split(' ');
        string += util.camelize(subSequence);
      }

      return string;
    } else {
      throw new Error('Incorrect input data format');
    }
  },

  /**
   * Cut of any count of spaces from the beginning and from the end of the string
   * @param {String} str
   * @return {String}
   */

  trim: function (string) {
    if (util.inputType(string) === 'string') {
      string = string.replace(/(^\s*)/, '').replace(/(\s*$)/, '');

      return string;
    } else {
      throw new Error('Incorrect input data format');
    }
  },

  /**
   * Reverses a specified list.
   * @param {Array} list - a list to be reversed, may be empty.
   * @return {Array} - the same instance of list but reverted
   */

  reverse: function (list) {

    if (util.inputType(list) === 'array') {
      for (var count = 0; count < list.length / 2; count++) {
        var tmp = list[count];
        list[count] = list[list.length - 1 - count];
        list[list.length - 1 - count] = tmp;
      }

      return list;
    } else {
      throw new Error('Incorrect input data format');
    }
  },

  /**
   *  Change each list's element by applying handler
   *  @params {Array|Object} list - input sequence
   *  @params {Function} iterator  - some rule which changes each element
   *  @return {Array} new list with changes elements
   */

  map: function (list, iterator) {

    if (util.inputType(list) === 'object') {
      var newObject = {};

      for (var listProperty in list) {
        if (list.hasOwnProperty(listProperty)) {
          newObject[listProperty] = iterator(list[listProperty]);
        }
      }

      return newObject;
    } else if (util.inputType(list) === 'array') {
      var newList = [];

      for (var count = 0; count < list.length; count++) {
        newList.push(iterator(list[count]));
      }

      return newList;
    } else {
      throw new Error('Incorrect input data format');
    }
  },

  /**
   * Group some input sequence of element by some rule
   * @param {Array} list - input sequence
   * @param {Function} iterator -  provide group id for each element
   * @return {Object} object of group id properties which point to arrays of element from input sequence
   */

  groupBy: function (list, iterator) {
    if (util.inputType(list) === 'array') {
      var object = {};

      for (var count = 0; count < list.length; count++) {
        if (!object.hasOwnProperty(iterator(list[count]))) {
          object[iterator(list[count])] = [];
          object[iterator(list[count])].push(list[count]);
        } else {
          object[iterator(list[count])].push(list[count]);
        }
      }
    } else {
      throw new Error('Incorrect input data format');
    }

    return object;
  },

  /**
   * Creates a version of the function that can only be called one time.
   * Repeated calls to the modified function will have no effect.
   * @param {Function} func - your target function
   * @return {Function} new  function which could be invoked only once
   */

  once: function (func) {
    var executed = false;

    return function () {
      if (!executed) {
        executed = true;

        return func.apply(this, arguments);
      }
    };
  },

  /**
   * Creates and returns a new debounced version of the passed function
   * which will postpone its execution until after wait milliseconds
   * have elapsed since the last time it was invoked.
   * @param {Function} func - your target function
   * @param {Number} wait -  milliseconds have elapsed since the last time it was invoked
   * @return {Function} new debounced version of the passed function
   */

  debounce: function (func, wait) {

    var result = setTimeout(function () {
      func.apply(this, arguments);
    }, wait);

    return result;
  },

  /**
   * Utility function for equivalent comparing of objects and arrays.
   * Accept an array or object and perform deep comparison of cells or values
   * @param {Array | Object} array or object to be compared to
   */

  deepEqual: function (value1, value2) {

    if (util.inputType(value1) === 'object' &&
      util.inputType(value2) === 'object'
    ) {

      if (Object.keys(value1).length !== Object.keys(value2).length) {
        return false;
      } else {
        var flags = [];

        for (var key in value1) {
          if (
            util.inputType(value1[key]) === 'object' &&
            util.inputType(value2[key]) === 'object'
          ) {
            return util.deepEqual(value1[key], value2[key]);
          } else if (
            util.inputType(value1[key]) === 'array' &&
            util.inputType(value2[key]) === 'array'
          ) {
            return util.deepEqual(value1[key], value2[key]);
          } else {
            flags.push(value1[key] === value2[key]);
          }
        }

        if (flags.indexOf(false) >= 0) {
          return false;
        } else {
          return true;
        }
      }
    } else if (
      util.inputType(value1) === 'array' &&
      util.inputType(value2) === 'array'
    ) {
      if (value1.length != value2.length) {
        return false;
      } else {
        var flags = [];

        for (var count = 0; count < value1.length; count++) {
          if (
            util.inputType(value1[count]) === 'object' &&
            util.inputType(value2[count]) === 'object'
          ) {
            return util.deepEqual(value1[count], value2[count]);
          } else if (
            util.inputType(value1[count]) === 'array' &&
            util.inputType(value2[count]) === 'array'
          ) {
            return util.deepEqual(value1[count], value2[count]);
          } else {
            flags.push(value1[count] === value2[count]);
          }
        }

        if (flags.indexOf(false) >= 0) {
          return false;
        } else {
          return true;
        }
      }
    } else {
      return (value1 === value2);
    }
  },

  /**
   * Utility function for converting Object to String.
   * Accept an Object and convert it as key : value string, or accept an array
   * and convert it as cell #: value.
   * @param {Array | Object} array or object to be parsed
   * @return (String) returns complex String of keys and values.
   */

  toString: function (object) {
    var string = '';

    if (util.inputType(object) === 'array') {
      for (var count = 0; count < object.length; count++) {
        if (util.inputType(object[count]) === 'array' ||
          util.inputType(object[count]) === 'object') {
          string += 'cell #' + count + '\t: \n' + util.toString(object[count]);
        } else {
          string += 'cell #' + count + '\t: ' + object[count];
        }
        if (count !== object.length - 1) {
          string += '\n';
        }
      }
    } else if (util.inputType(object) === 'object') {
      for (var objectProperty in object) {
        if (util.inputType(object[objectProperty]) === 'object' ||
          util.inputType(object[objectProperty]) === 'array') {
          string += objectProperty + '\t: \n' + util.toString(object[objectProperty]) + '\n';
        } else {
          string += objectProperty + ' : ' + object[objectProperty] + '\n';
        }
      }
    } else if (util.inputType(object) === 'string') {
      string += object;
    }
    else {
      throw new Error('Invalid input');
    }

    return string;
  },

  /**
   * Utility function to determine of input type of object
   * @param {Array | Object | String | Number | Boolean | null | undefined} Accept any type of object
   * @return {String} null: if input is null
   * @return {String} undefined: if input is undefined
   * @return {String} number: if input is integer or float (number)
   * @return {String} string: if input is string
   * @return {String} boolean: if input is boolean
   * @return {String} array: if input is array
   * @return {String} object: if input is object
   */

  inputType: function (input) {
    if (util.inputType.arguments.length > 0) {
      var result = Object.prototype.toString.call(input).toUpperCase();

      result = result.substring(1, result.length - 1);
      result = result.replace(/^OBJECT\s/, '').toLowerCase();

      return result;
    } else {
      throw new Error('Empty input!');
    }
  }
};

module.exports = util;