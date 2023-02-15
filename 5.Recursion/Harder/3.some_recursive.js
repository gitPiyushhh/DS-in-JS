const fun = (n) => {
    return (n & 1); // Return 1 if num is odd
}

const solve = (nums, i) => {
    if (i == nums.length) return true
    return fun(nums[i]) && solve(nums, i+1);  // If we pass any odd num then it becomes short-circuit
}

console.log(solve([1, 2, 3], 0))