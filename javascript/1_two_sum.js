
//https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * Time Limit Exceeded
 */

var twoSum = function(nums, target) {
    //对每一项计算差值，并寻找该差值是否存在
    for (var i = 0, num; (num = nums[i]) !== undefined; i ++) {

        var dis = target - num;
        var n = nums.lastIndexOf(dis);

        if (~n && n > i) {
            return [i + 1, n + 1];
        }
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * Accepted
 */

var twoSum = function(nums, target) {
    //先对数组进行排序
    var temp = nums.slice();
    //sort函数会改变数组本身
    nums.sort(function(a, b) {
        return a - b;
    });

    var i = 0,
        l = nums.length - 1;

    //从两边进行查找
    while (i !== l) {
        var sum = nums[i] + nums[l];
        if (sum < target) {
            i ++;
        } else if (sum > target) {
            l --;
        } else {
            //find it!	
            var a = temp.indexOf(nums[i]);
            var b = temp.lastIndexOf(nums[l]);

            return [a+1, b+1].sort(function(a, b) {
                return a - b;
            });
        }
    }
}