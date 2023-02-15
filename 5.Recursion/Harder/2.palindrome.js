const solve = (s) => {
    const helper = (l, r) => {
        if (l > r) return true;
        return s[l] === s[r] && helper(l+1, r-1);
    } 
    return helper(0, s.length-1);
} 

console.log(solve('aabaa'));