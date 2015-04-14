/**
 * @param {string} s
 * @return {string}
 */

// 返回最长子回文

// version1 对每一个间隙进行遍历，并保存当前遍历到的最大子回文
var longestPalindrome = function(s) {
    if (!s) {
        return 0;
    }

    if (s.length === 1) {
        return s;
    }
    var i = 0,
        l = s.length;

    var str = '';

    for (; i < l; i++) {
        //先考虑以s[i]为中心
        var m = i - 1,
            n = i + 1;

        for (; n < l, m >= 0; n ++, m --) {
            if (s[n] !== s[m]) {
                break;
            }
            if (str.length < n - m + 1) {
                str = s.slice(m, n + 1);
            }
        }
    }
    // 考虑以间隙为分隔符，先分开写吧，之后再考虑合并

    for (i = 0; i < l; i ++) {
        var m = i,
            n = i + 1;

        for (; n < l, m >= 0; n ++, m --) {
            if (s[n] !== s[m]) {
                break;
            }

            if (str.length < n - m + 1) {
                str = s.slice(m, n + 1);
            }
        }
    }
    return str;
};

// 第二种解法采用动态规划，http://www.tuicool.com/articles/eQNfqey