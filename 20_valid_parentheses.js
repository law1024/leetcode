
//https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 *
 * Accepted
 */

var isValid = function(s) {
    if (s === '') {
        return true;
    }
    if (s.length % 2 !== 0) {
        return false;
    }
    //使用栈来实现
    var stack = [];

    var i = 0,
        l = s.length;

    for (; i < l; i ++) {
        var c = s[i];
        if (c === '(' || c === '[' || c === '{') {
            stack.push(c);
            continue;
        }
        var top = stack.pop();
        if (c === ')' && top !== '(') {
            return false;
        }
        if (c === ']' && top !== '[') {
            return false;
        }
        if (c === '}' && top !== '{') {
            return false;
        }
    }
    //如果这个时候，栈不是空的话，return false
    if (stack.length) {
        return false;
    }
    return true;
};