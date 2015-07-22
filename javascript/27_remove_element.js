/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
	var i = 0,
    	l = nums.length;
    var res = 0;
    for (;i < l; i ++) {
    	if (nums[i] !== val) {
    		nums[res++] = nums[i];
    	}
    }

    return res;
};	