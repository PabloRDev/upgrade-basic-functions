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
// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.

// Puedes usar este array para probar tu función:
let numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(numbers) {
  let total = 0;
  for (let index = 0; index < numbers.length; index++) {
    total+=numbers[index];
  }

  return total;
}

console.log(sumAll(numbers));
