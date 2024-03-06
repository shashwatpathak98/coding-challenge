// Given a list of numbers and a number k, return whether
// any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return
// true since 10 + 7 is 17.

const findTarget = (arr, target) => {
  const compArr = [];
  for (let elem of arr) {
    if (compArr.includes(target - elem)) {
      return true;
    }
    compArr.push(elem);
  }
};

const arr = [10, 15, 3, 7];
let target = 17;
console.log(findTarget(arr, target));
