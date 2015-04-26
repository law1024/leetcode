/**
 * 判断一个整数是否是一个回文（顺着读和倒着读是一样的）
 * 要求O(1)的空间复杂度
 */

/**
 * @param {number} x
 * @return {boolean}
*/

var isPalindrome = function(x) {
    /*
    * 思路：将数字翻转，然后判断是否与原数字相等
    */
    if (x < 0) {
        return false;
    }
    var res    = 0;
    var origin = x;

    for (; x > 0;) {
        res = res * 10 + x % 10;
        x   = 0|(x / 10);
    }
    return res === origin;
};

console.log(isPalindrome(100201));