
//https://leetcode.com/problems/letter-combinations-of-a-phone-number/

/**
 * @param {string} digits
 * @return {string[]}
 */
var maps = [
    null,
    [''],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']
];

var get = function() {

}

var letterCombinations = function(digits) {
    var res = [];
    var digits = digits.split('');
    //首先构造一颗树
    var i = 0,
        l = digits.length;

    for (; i < l; i ++) {
        console.log(maps[digits[i]]);
    }
    return res;

};
letterCombinations('234');