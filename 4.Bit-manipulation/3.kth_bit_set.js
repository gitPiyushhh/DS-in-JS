// Set: 1, Unset: 0

const solve = (n, k) => {
    return ((n & (1 << k-1)) ? 'Set': 'Unset')
} 

n = 7;
console.log(solve(n, 3))