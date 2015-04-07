(function() {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]} two integers in an array, ie: [index1, index2]
     */

    // verson1
    var twoSum = function(numbers, target) {
        var i,
            l = numbers.length;
        for (i = 0; i < l; i ++) {
            var item = numbers[i];
            var dis  = target - item;
            //寻找该差值
            var arr  = numbers.slice(i + 1, l),
                n    = arr.indexOf(dis);

            if (~n) {
                return [i + 1, i + n + 2];
            }
        }
    }
    // 该方法的最大时间复杂度为 O(n2) so Time Limit Exceeded

    // verson2
    var twoSum = function(numbers, target) {
        var clone = numbers.slice();
        //先排序
        numbers   = numbers.sort(function(a, b) {
            return a - b;
        });
        var i = 0, j = numbers.length - 1;
        //两边往中间查找
        while(i !== j) {
            var l = numbers[i],
                r = numbers[j];

            if (l + r > target) {
                j --;
                continue;
            }
            if (l + r < target) {
                i ++;
                continue;
            }
            if (l + r === target) {
                return [clone.indexOf(r) + 1, clone.lastIndexOf(l) + 1].sort(function(a, b) {
                    return a - b;
                });
            }
        }
    }
    // 该方法的最大时间复杂度为 O(n * log n) so Accepted
})();