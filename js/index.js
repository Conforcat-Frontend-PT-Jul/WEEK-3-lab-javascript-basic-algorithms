let sm = "I'm ready!";

console.log(sm);

// Iteration 1: Names and Input

let drivers = "Daniel";

let navigators = "marisa";

console.log("The driver´s name is "+ drivers);

console.log("The navigator´s name is "+ navigators); 

//
// Iteration 2: Conditionals

//let str1 = drivers;
//console.log(`${str1} ${str1.length}`);

//let str2 = navigators;
//console.log(`${str2} ${str2.length}`);

if (drivers.length > navigators.length) {
  console.log("The driver has the longest name, it has"+ drivers.length + " characters");

} else if (drivers.length < navigators.length) {
    console.log("It seems that the navigator has the longest name, it has "+ navigators.length + " characters");
  } else {
    console.log("Wow, you both have equally long names, "+ navigators.length + " characters!");
     }


// Iteration 3: Loops

// Iteration 3.1: PRINT DRIVERS NAME 
let result = drivers.toUpperCase().split("").join(" ")
console.log(result);

// Iteration 3.2: PRINT REVERDED NAVIGATORS NAME 
let result2 = navigators;

result2 = [...result2].reverse().join("");

console.log(result2);

// Iteration 3.3: LEXICOGRAPHIC


if (drivers < navigators) {

  console.log("The driver's name goes first");

} else if (drivers > navigators) {
    console.log("Yo, the navigator goes first definitely");
    
  } else {
    console.log("What?! You both have the same name?");
     }
