const solve = (nums) => {
    let acc = 0;

    for (let i = 0; i <nums.length; i++) {
        acc = acc ^ nums[i];
    }
    return acc;
} 

console.log(solve([23, 17, 8, 17, 23, 54, 8]))