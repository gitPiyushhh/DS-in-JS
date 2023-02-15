const solve = (s1, s2, ptr1, ptr2) => {
    // 1. Base cases    
    if (ptr1 == s1.length) return false;
    if (ptr2 == s2.length) return true;

    // 2. Rrecursive calls
    if (s1[ptr1] == s2[ptr1]) {
        return solve(s1, s2, ptr1+1, ptr2+1) || solve(s1, s2, ptr1+1, 0);
    }
} 

console.log(solve('hello', 'he', 0, 0))