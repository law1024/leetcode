/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    if (str === "") {
        return 0;
    }
    var res = parseInt(str);
    if (isNaN(res)) {
        res = 0;
    }
    return res;
    //使用简单的parseInt无法完成
};