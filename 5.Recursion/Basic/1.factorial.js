const solve = (n) => {
    if (n == 1) return 1;
    return n * solve(n-1);
}

console.log(solve(1));