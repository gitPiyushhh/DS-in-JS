const solve = (nums) => {
    var res = [];
    for (var i of nums) {
        res.push(i.split('')[0].toLocaleUpperCase() + i.slice(1)); // Make the first leeter capital then concaat
    }
    return res;
} 

console.log(solve(['car','taco','banana']))