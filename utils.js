module.exports = {
 
    /**
     * Sort given array by provided rule in comparator function
     * @param {Array} list
     * @param {Function} comparator
     */
 
    sort:function (list, comparator) {
        return [];
    },
 
    /**
     * Make first letter of given string upper case
     * @param {String} string
     * @return {String} capitalized string
     */
 
    capitalize:function (string) {
        return "";
    },
 
    /**
     * Camelize given string or array of string
     * @param {Array|String} sequence
     * @return {String} capitalized string
     */
 
    camelize:function (sequence) {
        return "";
    },
 
    /**
     * Cut of any count of spaces from the beginning and from the end of the string
     * @param {String} str
     * @return {String}
     */
 
    trim:function (str) {
        return "";
    },

    /**
     * Reverses a specified list.
     * @param {Array} list - a list to be reversed, may be empty.
     * @return {Array} - the same instance of list but reverted
     */
 
    reverse:function (list) {
        return [];
    },
 
    /**
     *  Change each list's element by applying handler
     *  @params {Array|Object} list - input sequence
     *  @params {Function} iterator  - some rule which changes each element
     *  @return {Array} new list with changes elements
     */
 
    map:function (list, iterator) {
        return [];
    },
 
    /**
     * Group some input sequence of element by some rule
     * @param {Array} list - input sequence
     * @param {Function} iterator -  provide group id for each element
     * @return {Object} object of group id properties which point to arrays of element from input sequence
     */
 
    groupBy:function (list, iterator) {
        return {};
    }
 
};