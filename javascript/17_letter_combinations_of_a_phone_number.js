
//https://leetcode.com/problems/letter-combinations-of-a-phone-number/

/**
 * @param {string} digits
 * @return {string[]}
 */

var digitList = [
	null,
	[''],
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
	['m', 'o', 'n'],
	['p', 'q', 'r', 's'],
	['t', 'u', 'v'],
	['w', 'x', 'y', 'z']
];


//采用深度优先搜索
var letterCombinations = function(digits) {
	var arr = digits.split('');
	var i = 0,
		l = arr.length;
	for (; i < l; i ++) {
		var letterList = digitList[arr[i]];
	}
};