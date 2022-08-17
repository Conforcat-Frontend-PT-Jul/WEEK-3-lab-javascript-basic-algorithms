// Iteration 1: Names and Input
let hacker1 = "kevin"; 

console.log("The driver's name is "+ hacker1);

let hacker2 = "chrome"; 

console.log("The navigator's name is "+ hacker2);

// Iteration 2: Conditionals
let numCharacterDriver= hacker1.length; 
let numCharacterNavigator= hacker2.length; 

if (numCharacterDriver>numCharacterNavigator) {
    console.log("The driver has the longest name, it has " +  numCharacterDriver + " characters.");
} else if (numCharacterDriver<numCharacterNavigator){
    console.log("It seems that the navigator has the longest name, it has " + numCharacterNavigator + " characters.");
} else {
    console.log("Wow, you both have equally long names, " + numCharacterDriver + " characters!");
}

// Iteration 3: Loops
let driveNameSplit= hacker1.split("");
let newName= ""; 

driveNameSplit.forEach((value) => {
    newName += value.toUpperCase() + " "; 
});

console.log(newName);

let navigatorSplit= hacker2.split("");
let newNavigator= ""; 

navigatorSplit.reverse().forEach(value => {
    newNavigator += value+ "";
       
});
console.log(newNavigator);

if (hacker1<hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1>hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}