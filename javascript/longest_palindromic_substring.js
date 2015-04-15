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

// version 2 将两个循环合并成了一个

var longestPalindrome = function(s) {
    //首先对特殊情况进行判断
    if (!s) {
        return 0;
    }
    if (s.length === 1) {
        return s;
    }
    // 如何合并两个循环
    // 分析，如果一下子看不出来，就一步步写下来，然后归纳总结
    var left, right;
    var i = 0,
        l = s.length,
        n = 2 * l - 1;
    var str = '';

    for (; i < n; i ++) {
        //right不变，left和奇偶有关
        right = (left = 0|i / 2) + 1;
        if (i % 2 === 0) {
            left--;
        }
        for (; left >= 0 && right < l; left--, right ++) {
            if (s[left] !== s[right]) {
                break;
            }
            if (str.length < right - left + 1) {
                str = s.slice(left, right + 1);
            }
        }
    }
    return str;
}

console.log(longestPalindrome('ccc'));
// 第二种解法采用动态规划，http://www.tuicool.com/articles/eQNfqey