/**
 * https://leetcode.com/problems/basic-calculator/
 */

/**
 * 使用两个栈来对字符串进行处理
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var i = 0,
        l = s.length;

    var mainStack = [];
    var tempStack = [];
    var tempNum = '';
    // 充分利用下一次循环，不要轻易在循环里改变循环变量
    for (; i < l; i ++) {
        var c = s[i];
        if (c === ')') {
            while (mainStack.length) {
                var cc = mainStack.pop();
                if (cc === '(') {
                    break;
                }
                tempStack.push(cc);
            }
            //对tempStack进行计算
            mainStack.push(get(tempStack));
            tempStack = [];
        } else {
            if (c === ' ') {
                continue;
            }
            //可以入栈
            if (!isNaN(c)) {
                tempNum = '';
                while (!isNaN(c)) {
                    tempNum = tempNum + c;
                    c = s[++i];
                }
                i --;
                //是一个数字，下一个也可能是数字
                mainStack.push(tempNum);
                
            } else {
                mainStack.push(c);
            }
        }
    }
    return get(mainStack.reverse());
}

function get(stack) {
    while (stack.length > 1) {
        var a = parseInt(stack.pop());
        var b = stack.pop();
        var c = parseInt(stack.pop());
        var d = 0;
        if (b === '+') {
            d = a + c;
        } else {
            d = a - c;
        }
        stack.push(d);
    }
    return parseInt(stack[0]);
}