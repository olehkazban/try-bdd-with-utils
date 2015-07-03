module.exports = {

  /**
   * Sort given array by provided rule in comparator function
   * @param {Array} list
   * @param {Function} comparator
   */

  sort: function (list, comparator) {
    var condition;

    if (comparator) {
      condition = comparator(10, 20);
    }

    if (condition == undefined || condition >= 0) {
      for (var barrier = list.length - 1; barrier >= 0; barrier--) {
        for (var count = 0; count < barrier; count++) {
          if (list[count] > list[count + 1]) {
            var tmp = list[count];
            list[count] = list[count + 1];
            list[count + 1] = tmp;
          }
        }
      }
    } else if (condition < 0) {
      for (var barrier = 0; barrier < list.length; barrier++) {
        for (var count = barrier; count >= 0; count--) {
          if (list[count] < list[count + 1]) {
            var tmp = list[count];
            list[count] = list[count + 1];
            list[count + 1] = tmp;
          }
        }
      }
    }

    return list;
  },

  /**
   * Make first letter of given string upper case
   * @param {String} string
   * @return {String} capitalized string
   */

  capitalize: function (string) {
    string = string.toLowerCase();
    string = string.replace(/^[a-z]/, function (m) {
      return m.toUpperCase();
    });
    return string;
  },

  /**
   * Camelize given string or array of string
   * @param {Array|String} sequence
   * @return {String} capitalized string
   */

  camelize: function (sequence) {
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
  },

  /**
   * Cut of any count of spaces from the beginning and from the end of the string
   * @param {String} str
   * @return {String}
   */

  trim: function (string) {
    string = string.replace(/(^\s*)/, '').replace(/(\s*$)/, '');
    return string;
  },

  /**
   * Reverses a specified list.
   * @param {Array} list - a list to be reversed, may be empty.
   * @return {Array} - the same instance of list but reverted
   */

  reverse: function (list) {

    for (var count = 0; count < list.length / 2; count++) {
      var tmp = list[count];
      list[count] = list[list.length - 1 - count];
      list[list.length - 1 - count] = tmp;
    }

    return list;
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

  deepEqual: function (value1, value2) {

    if (typeof value1 === 'object' &&
      typeof value2 === 'object' &&
      value1 !== null &&
      value2 !== null) {

      if (Object.keys(value1).length !== Object.keys(value2).length) {
        return false;
      } else {
        for (var key in value1) {
          if (typeof value1[key] === 'object') {
            return deepEqual(value1[key], value2[key]);
          } else {
            return (value1[key] === value2[key]);
          }
        }
      }

    } else {
      return (value1 === value2);
    }

  }


};