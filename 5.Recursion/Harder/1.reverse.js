// 2 ptr concept --> O(n)

const solve = (s) => {
    const helper = (chars, l, r) => {
        if (l > r) return chars.join('');
        [chars[l], chars[r]] = [chars[r], chars[l]];
        return helper(chars, l+1, r-1);
    }
    let chars = s.split('');
    return helper(chars, 0, s.length-1);
}

console.log(solve('hello'))