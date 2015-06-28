/**
 * https://leetcode.com/problems/rectangle-area/
 */

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    // 首先计算出每个矩形的面积
    var area1 = (C - A) * (D - B);
    var area2 = (G - E) * (H - F);
    // 如何判断两个矩形是否相交
    // 以宽为例（高同理），右边的最小值减去左边的最大值，如果小于0，则不相交
    var width  = Math.max(Math.min(C, G) - Math.max(A, E), 0);
    var height = Math.max(Math.min(D, H) - Math.max(B, F), 0);
    return area1 + area2 - Math.max(width * height, 0);
};