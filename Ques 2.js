var num = [1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1];
var mCount = 0;
var count = 0;
for (var i = 0; i < num.length; i++) {
  count = num[i] === 1 ? count + 1 : 0;
  if (count > mCount) {
    mCount = count;
  }
}
console.log(mCount);
