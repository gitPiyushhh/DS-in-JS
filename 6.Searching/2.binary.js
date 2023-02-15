const solve = (nums, target, left, right) => {
    if (left > right) {return false;}

    var mid = Math.floor(left + (right - left) / 2);  //Use to get the floor division

    if (nums[mid] === target) {
        return true;
    }
    else if (nums[mid] > target) {
        return solve(nums, target, left, mid-1);
    }
    else {
        return solve(nums, target, mid+1, right)
    }
} 

nums = [1, 2, 3, 4, 5]
console.log(solve(nums, 5, 0 , nums.length))