// Iteracion #1
let array = [10, 15];
function sum(array) {
  let longestNum = array[0];
  for (let index = 1; index < array.length; index++) {
    if (array[index] > longestNum) {
      longestNum = array[index];
    }
  }
  return longestNum;
}

console.log(sum(array));


