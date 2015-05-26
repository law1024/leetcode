/*
 * Write a function to find the longest common prefix string amongst an array of strings.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //遍历数组，直到某一项中不包含字符chr
    if (!strs.length) {
        return '';
    }
    var first = strs[0];
    var i = 0,
        n = 1,
        m = strs.length,
        l = first.length;

    for (; i < l; i ++) {
        for (n = 1; n < m; n ++) {
            if (strs[n][i] !== first[i]) {
                return first.slice(0, i);
            }
        }
    }
    return first;
}