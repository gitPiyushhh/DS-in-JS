const solve = (n, p) => {
    if (p === 0) return 1;
    return n * solve(n, p-1);
}

console.log(solve(5, 2));