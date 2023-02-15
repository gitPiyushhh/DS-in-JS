const solve = (nums, target) => {
    for(var i = 0; i < nums.length; i++) {
        if (nums[i] === target) return true;
    }
    return false;
} 

console.log(solve([1, 2, 3, 4, 5], 5))