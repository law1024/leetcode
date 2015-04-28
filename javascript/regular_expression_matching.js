/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var patten = new RegExp(p);
    return patten.test(s);
};

console.log(isMatch("aa","a"));