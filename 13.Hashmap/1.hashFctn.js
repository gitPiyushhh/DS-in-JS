// Here we are trying to create a hash function {maps the strings to an array}
str = "hello";
let prime = 29;

let hash = (str, bound) => {
  let total = 0;
  for (let i = 0; i < Math.min(str.length, 100); i++) {
    let char = str[i];
    // 1. Get the total sumup of all the characters
    let val = char.charCodeAt(0) - 96; // Get character codes of letters

    // 2. Make inbound
    total = (total * prime + val) % bound;
  }
  return total;
};

console.log(hash('hello', 10));
