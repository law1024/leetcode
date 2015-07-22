class Solution:
    # @param {integer[]} nums
    # @return {integer}
    def removeDuplicates(self, nums):
        l = len(nums)
        if l < 2:
            return l

        i   = 1
        res = 1

        while i < l:
            if nums[i] == nums[i - 1]:
                i += 1
                continue
            #改变原始数组
            nums[res] = nums[i]
            i += 1
            res += 1

        return res