// Bitmask opprocach
const solve = (n) => {
    return ((n === (n & -n)) ? 'Power of two': 'Not power of two');
} 

n = 8;
console.log(solve(n))