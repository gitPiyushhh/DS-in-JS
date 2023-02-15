const solve = (nums) => {
    if (!nums.length) return 0;
    // Helper method
    const helper = (nums, i) => {
        if (i === nums.length) return 1;
        return nums[i] * helper(nums, i+1);
    }
    return helper(nums, 0);
} 

console.log(solve([1, 2, 3, 4, 5]));