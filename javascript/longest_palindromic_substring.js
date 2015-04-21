/**
 * @param {string} s
 * @return {string}
 */

// 返回最长子回文
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

// 将最简单3重循环优化，将每一个子串是否是回文保存在一个2维数组中
var longestPalindrome = function(s) {
    if (!s) {
        return 0;
    }
    if (s.length === 1) {
        return 1;
    }
    var plain = [];
    var i = 0,
        l = s.length,
        j;

    for (; i < l; i ++) {
        //必要的时候还是需要使用下new Array的
        plain.push(new Array(l));
    }
    var res = '';
    var max = 0;

    for (i = l - 1; i >= 0; i --) {
        for (j = i; j < l; j ++) {
            if (s[i] === s[j] && ((j - i <= 2) || (plain[i + 1][j -1] === true))) {

                //这个子串是回文
                plain[i][j] = true;
                if (max < j - i + 1) {
                    max = j - i + 1;
                    res = s.slice(i, j + 1);
                }
            }
        }
    }

    return res;

}
console.log(longestPalindrome('accaccf'));
// 第二种解法采用动态规划，http://www.tuicool.com/articles/eQNfqey