const solve = (n) => {
    if (n <= 1) {
        return 1;
    }
    if (n === 2) {
        return 1;
    }
    return solve(n-1) + solve(n-2);
}

console.log(solve(5))