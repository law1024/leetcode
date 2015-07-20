
//https://leetcode.com/problems/string-to-integer-atoi/

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    if (str === "") {
        return 0;
    }
    var res = parseInt(str);
    
    if (isNaN(res)) {
        res = 0;
    }
    var MAX = Math.pow(2, 31) - 1;
    var MIN = -Math.pow(2, 31);
    
    if (res > MAX) {
        return MAX;
    }
    if (res < MIN) {
        return MIN;
    }
    return res;
};