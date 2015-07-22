/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var l = nums.length;
    if (nums < 2) {
        return l;
    }
    var i   = 1,
        res = 1;
    for (; i < l; i ++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        nums[res] = nums[i];
        res ++;
    }
};