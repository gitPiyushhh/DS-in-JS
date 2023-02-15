const isObject = obj => {
    return Object.prototype.toString.call(obj) === '[object Object]'
}

const solve = (obj, acc) => {
  for (var i in obj) {
    if (isObject(i)) {
      acc += solve(i, acc);
    } else {
      acc += obj[i];
    }
  }
  return acc;
};

var obj = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

console.log(solve(obj, 0));
