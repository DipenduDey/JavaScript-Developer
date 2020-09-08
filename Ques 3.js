var find = (arr) => {
  var dup = [];
  var comp = [];
  for (let num of arr) {
    if (!comp.includes(num)) {
      comp.push(num);
    } else {
      dup.push(num);
    }
  }
  return dup;
};
var arr = [4, 4, 8, 9, 11, 11, 22, 33, 33];
console.log(find(arr));
