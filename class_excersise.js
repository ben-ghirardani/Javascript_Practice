var doNames = function(firstName, lastName) {
  return "Hello, I am " + firstName + " " + lastName;
}

console.log(doNames("Pickle", "Rick"));


var multiplyFunction = function(a, b) {
  return a * b;
}

console.log(multiplyFunction(5, 5));


var firstFromArray = function(array) {
  return array.shift();
}

console.log(firstFromArray([1,2,3]));


var listOfNames = function(array) {
  for (var item of array) {
    console.log(item);
  }
}

listOfNames(["bloke", "joke", "poke"]);