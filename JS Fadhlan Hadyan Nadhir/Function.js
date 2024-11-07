function printHeart() {
  console.log("<3");
}

printHeart();
//1. Define Practice

function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 3)); // 6
console.log(multiply(9, 9)); // 81
console.log(multiply(5, 4)); // 20
// Return Value Practice

//1.Scope Practice
let animal = "Giant Pacific Octopus";
function observe() {
  let animal = "Pajama Squid";
  console.log(animal);
}
observe();
//3.A. What is printed to the console when this code runs?
// Output = Pajama Squid

let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
  let deadlyAnimal = "Scorpionfish";
  console.log(deadlyAnimal);
}
handleAnimal();
console.log(deadlyAnimal);
//3.B.What is printed to the console when this code runs?
// Output handleAnimal(); = "Scorpionfish"
// Output console.log(deadlyAnimal); = "Blue-Ringed Octopus"

const sayHello = (name) => {
  return `Halo ${name}!`;
};

console.log(sayHello("Hagrid"));
console.log(sayHello("Luna"));
//4.Arrow Function Exercise
