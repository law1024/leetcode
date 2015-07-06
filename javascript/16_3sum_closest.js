
//https://leetcode.com/problems/3sum-closest/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * Accepted
 */
var threeSumClosest = function(nums, target) {
    //排序
    nums.sort(function(a, b) {
        return a - b;
    });
    var i = 0,
        l = nums.length;
    //保存当前差值的最小值
    var min = undefined;

    for (; i < l; i ++) {
        var j = i + 1;
        var k = l - 1;
        //从两边往中间查找
        while (j < k) {
            var sum = nums[i] + nums[j] + nums[k];
            var dis = target - sum;
            if (dis === 0) {
                return target;
            }
            if (min === undefined) {
                min = dis;
            } else if (Math.abs(min) > Math.abs(dis)) {
                //更新最小值
                min = dis;
            }
            if (dis > 0) {
                j ++;
            } else if (dis < 0) {
                k --;
            }
        }
    }
    return target - min;
};

var res = threeSumClosest([-1, 2, 1, -4], 1);
console.log(res);