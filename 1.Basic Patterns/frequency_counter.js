const solve = (arr1, arr2) => {
    // 1. Create hashmap
    hashmap = new Map();

    for (var i = 0; i < arr1.length; i++) {
        hashmap[arr1[i]] = arr1[i] ** 2;
    }

    // 2. Chck frequnecy
    console.log(hashmap.values());
    return hashmap.values() == arr2.sort(function(a, b) {return b-a});
}

const arr1 = [1, 2, 3]
const arr2 = [1, 4, 9]

console.log(solve(arr1, arr2));