// Iteracion #1
function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    LongestNum = numberOne;
  } else {
    LongestNum = numberTwo;
  }

  return LongestNum;
}

console.log(sum(1, 3));

// Iteracion #2
let avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(param) {
  let longestavenger = "";
  for (let index = 0; index < avengers.length; index++) {
    if (avengers[index].length > longestavenger.length) {
      longestavenger = avengers[index];
    }
  }
  return longestavenger;
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
    total += numbers[index];
  }

  return total;
}

console.log(sumAll(numbers));

//Iteracion #4
// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
let numberss = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  let total = 0;
  for (let index = 0; index < numbers.length; index++) {
    total += numberss[index];
  }
  mean = total / numberss.length;
  return mean;
}

console.log(average(numberss));

// Iteracion #5
// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
let mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function averageWord(param) {
  let total = 0;
  for (let index = 0; index < mixedElements.length; index++) {
    if (typeof mixedElements[index] == "number") {
      total += mixedElements[index];
    } else {
      total += mixedElements[index].length;
    }
  }
  return total;
}
console.log(averageWord(mixedElements));


