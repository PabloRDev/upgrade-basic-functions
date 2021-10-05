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

// Iteracion #2
let avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(avengers) {
  let longestWord = "";
  for (let index = 0; index < avengers.length; index++) {
    if (avengers[index].length > longestWord.length) {
      longestWord = avengers[index];
    }
  }

  return longestWord;
}

console.log(findLongestWord(avengers));

//Iteracion #3

