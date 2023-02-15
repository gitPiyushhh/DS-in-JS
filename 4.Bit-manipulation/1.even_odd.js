const solve = (n) => {
    return ((n & 1) ? 'Odd' : 'Even');  // Every odd has 1 extra bit
} 

n = 7;
console.log(solve(n))