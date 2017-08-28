// Episode 1
// Expected : will print "My name is Keith" to the console.
// Actual : prints "My name is Keith" to the console.

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

// Episode 2
// Exxpected : print 3 to the console, because the score variable in the function overrides the global variable. 
// Actual : prints 3 to the console.

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// Episode 3
// Expected : the global array will not be used as the array in the function overrides it. The name of each animal will print to the screen, with a colon, and it's position in the array.
// Actual : position first, then animal name.

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// Episode 4
// Expected : The function ovverrides suspect3, so the call to the function will print "Suspects include:" with all 4 suspects, Keith replaced with Harvey. The console log print of suspect 3 will print Keith's name as it sees the global variable, not what's inside the function.
// Actual : as above.

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

// Episode 5
// Expected : A hash is set up with name : Ace Ventura and pet : monkey. A function is written which takes in the detective hash, and returns the name. Another function is written that changes the name of the detective to Poirot, and returns detective name. the detectiveInfo function is called to the console, which should give us "Poirot".
// Actual : as above.

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

// Episode 6
// Expected : the variable murderer is set up with a value "rick". The function "outerFunction" changes the murderer variable to "marc". The "innerFunction" variable within outerFunction changes the murderer variable to "valerie", then the outerFunction calls innerFunction (?!?!). Finally, outerFunction is called, which will end with murderer being set to "valerie", so console log will read "the murderer is valerie".
// Actual : or not... I guess the above would be true if we console logged the call to outerFunction().But we don't, so the console log line is looking at the original variable? Maybe.

var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);