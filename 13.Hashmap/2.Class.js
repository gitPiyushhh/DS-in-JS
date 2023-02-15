class Hashmap {
  constructor(bound) {
    this.map = [];
    this.bound = bound;
  }

  hash(key) {
    let total = 0;
    let prime = 29;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let val = char.charCodeAt(0) - 96;
      total = (total * prime + val) % this.bound;
    }
    return total;
  }

  set(key, value) {
    let index = this.hash(key);

    if (!this.map[index]) {
      this.map[index] = [];
    }
    this.map[index].push([key, value]); // Everytime either present or not present
  }

  get(key) {
    let index = this.hash(key);

    if (this.map[index]) {
      for (let i = 0; i < this.map[index].length; i++) {
        if (this.map[index][i][0] === key) {
          return this.map[index][i][1];
        }
      }
    }
    return undefined;
  }
}

let map1 = new Hashmap(10);
map1.set("hello", 0);
map1.set("world", 1);
console.log(map1.get("world"));