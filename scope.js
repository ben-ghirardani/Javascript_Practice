

var talk = function() {
  name = "Rick";
  console.log("My name is " + name + ".");
}

talk();
console.log("The global name is", name);

// console.log("trying to access result " + name);

var walk = function() {
  console.log(name + " is walking.");
}

walk();