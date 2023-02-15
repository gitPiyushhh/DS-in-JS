// O(n2)

const solve = (nums) => {
    // If array almost sorted
    var noSwaps;
    for(var i = nums.length; i >= 0; i--) {
        noSwaps = true;
        for (var j = 0; j < i-1; j++) {
            if (nums[j] > nums[j+1]) {
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
                noSwaps = false;
            }
        }
        if (noSwaps) {break;}
    }

    return nums
} 

console.log(solve([10, 50, 30, 40, 20]))