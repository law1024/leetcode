
//https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * Accepted
 */

var threeSum = function(nums) {
    //使用map是一种常见的空间换时间的方法
    if (nums.length < 3) {
        return [];
    }
    var map = {};
    var res = [];
    //对nums进行排序
    nums.sort(function(a, b) {
        return a - b;
    });
    //console.log(nums);
    var i = 0,
        l = nums.length;

    for (; i < l; i ++) {
        //找到差值
        var k = nums[i];

        var s = i + 1,
            e = l - 1;

        while (s < e) {
            var v = 0 - (nums[s] + nums[e]);
            //console.log(s, e, nums[s] + nums[e], k);
            if (v > k) {
                s ++;
            } else if (v < k) {
                e --;
            } else {
                //find it!
                //可能会有重复的
                var temp = [k, nums[s], nums[e]];
                var key = temp.join('#');
                
                if (!map[key]) {
                    res.push(temp);
                    map[key] = true;
                }
                //这个时候应该继续找下去
                s ++;
                e --;
            }
        }
    }
    return res;
};