const solve = (nums) => {
    res = []
    for (var i of nums) {
        if (Array.isArray(i)) {
            res = res.concat(solve(i));
        }
        else {
            res.push(i);
        }
    }
    return res;
} 

console.log(solve([1, 2, [3, 4]]))