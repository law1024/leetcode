class Solution:
    # @param {integer[]} nums
    # @param {integer} val
    # @return {integer}
    def removeElement(self, nums, val):
    	res = 0
    	l = len(nums)
    	i = 0
    	while i < l:
    		if nums[i] != val:
    			nums[res] = nums[i]
    			res += 1
    		i += 1

    	print(nums)
    	return res

