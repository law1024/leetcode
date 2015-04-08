/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    var i = 0,
        l = s.length;

    var list = [];
    var max  = 0;

    for (;i < l; i ++) {
        var chr = s[i];
        var idx = list.indexOf(chr);
        list.push(chr);

        if (~idx) {
            list = list.slice(idx + 1);
        }
        if (list.length > max) {
            max = list.length;
        }
    }
    return max;
};
