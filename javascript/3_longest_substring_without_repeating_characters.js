
//https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 *
 * Accepted
 */

var lengthOfLongestSubstring = function(s) {
    //顺序查找
    var i = 0,
        l = s.length;

    var list = [];
    var max  = 0;

    for (; i < l; i ++) {
        var c = s[i];
        var idx = list.indexOf(c);
        list.push(c);
        //如果存在重复
        if (~idx) {
            list = list.slice(idx + 1);
        }
        var ll = list.length;
        if (ll > max) {
            max = ll;
        }
    }
    return max;
}
