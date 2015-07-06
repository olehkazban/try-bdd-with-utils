module.exports = {

  /**
   * Sort given array by provided rule in comparator function
   * @param {Array} list
   * @param {Function} comparator
   */

  sort: function (list, comparator) {
    if (Object.prototype.toString.call(list).toUpperCase() === '[OBJECT ARRAY]') { // we should ensure that input is an Array, not something else

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
    if (Object.prototype.toString.call(string).toUpperCase() === '[OBJECT STRING]') {
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
      Object.prototype.toString.call(sequence).toUpperCase() === '[OBJECT ARRAY]' ||
      Object.prototype.toString.call(sequence).toUpperCase() === '[OBJECT STRING]'
    ) {
      var string = '';

      if (Object.prototype.toString.call(sequence).toUpperCase() === '[OBJECT ARRAY]') {
        for (var counter = 0; counter < sequence.length; counter++) {
          if ((typeof sequence[counter]) === 'object') {
            var subSequence = sequence[counter];
            string += module.exports.camelize(subSequence);
          } else if (/\s/.test(sequence[counter])) {
            var subSequence = sequence[counter].split(' ');
            string += module.exports.camelize(subSequence);
          } else {
            sequence[counter] = sequence[counter].replace(/\W/, ''); // removing spec chars
            sequence[counter] = sequence[counter].replace(/[0-9]]/); // removing digits

            string += module.exports.capitalize(sequence[counter]);
          }
        }
      }
      else if (Object.prototype.toString.call(sequence).toUpperCase() === '[OBJECT STRING]') {
        var subSequence = sequence.split(' ');
        string += module.exports.camelize(subSequence);
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
    if (Object.prototype.toString.call(string).toUpperCase() === '[OBJECT STRING]') {
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

    if (Object.prototype.toString.call(list).toUpperCase() === '[OBJECT ARRAY]') {
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
    if (Object.prototype.toString.call(list).toUpperCase() === '[OBJECT OBJECT]') {
      var newObject = {};

      for (var listProperty in list) {
        if (list.hasOwnProperty(listProperty)) {
          newObject[listProperty] = iterator(list[listProperty]);
        }
      }

      return newObject;
    } else if (Object.prototype.toString.call(list).toUpperCase() === '[OBJECT ARRAY]') {
      var newList = [];

      for (var count = 0; count < list.length; count++) {
        newList.push(iterator(list[count]));
      }

      return newList;
    }
  },

  /**
   * Group some input sequence of element by some rule
   * @param {Array} list - input sequence
   * @param {Function} iterator -  provide group id for each element
   * @return {Object} object of group id properties which point to arrays of element from input sequence
   */

  groupBy: function (list, iterator) {
    return {};
  },

  /**
   * Creates a version of the function that can only be called one time.
   * Repeated calls to the modified function will have no effect.
   * @param {Function} func - your target function
   * @return {Function} new  function which could be invoked only once
   */

  once: function (func) {
    return;
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
    return;
  },

  /**
   * Utility function for equivalent comparing of objects and arrays.
   * Accept an array or object and perform deep comparison of cells or values
   * @param {Array | Object} array or object to be compared to
   */

  deepEqual: function (value1, value2) {

    if (
      Object.prototype.toString.call(value1).toUpperCase() === '[OBJECT OBJECT]' &&
      Object.prototype.toString.call(value2).toUpperCase() === '[OBJECT OBJECT]' &&
      value1 !== null &&
      value2 !== null
    ) {

      if (Object.keys(value1).length !== Object.keys(value2).length) {
        return false;
      } else {
        var flags = [];

        for (var key in value1) {
          if (
            Object.prototype.toString.call(value1[key]).toUpperCase() === '[OBJECT OBJECT]' &&
            Object.prototype.toString.call(value2[key]).toUpperCase() === '[OBJECT OBJECT]'
          ) {
            return module.exports.deepEqual(value1[key], value2[key]);
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
      Object.prototype.toString.call(value1).toUpperCase() === '[OBJECT ARRAY]' &&
      Object.prototype.toString.call(value2).toUpperCase() === '[OBJECT ARRAY]'
    ) {
      if (value1.length != value2.length) {
        return false;
      } else {
        var flags = [];

        for (var count = 0; count < value1.length; count++) {
          flags.push(value1[count] === value2[count]);
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
  }
};