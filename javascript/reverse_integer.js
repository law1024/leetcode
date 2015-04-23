/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var xList  = x.toString(10).split('');
    var symbol = '';
    var res = 0;
    if (xList[0] === '-') {
        //是一个负数
        symbol = '-';
        xList = xList.slice(1);
    }
    //console.log(symbol + xList.reverse().join(''));

    res = parseInt(symbol + xList.reverse().join(''));
    // 对边界进行考虑
    if (res > Math.pow(2, 31)) {
        return 0;
    }
    if (res < -Math.pow(2, 31) + 1) {
        return 0;
    }
    return res;
};


console.log(reverse(123));