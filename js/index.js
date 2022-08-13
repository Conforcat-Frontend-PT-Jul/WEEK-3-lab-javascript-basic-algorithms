// Iteration 1: Names and Input
//
console.log ("I'm ready!");

const hacker1 = "Manolo";
console.log("The driver's name is " + hacker1 + ".");

const hacker2 = "Google Chrome";
console.log("The navigator's name is " + hacker2 + ".");

// Iteration 2: Conditionals

if(hacker1.legth>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length}characters. `);
}
else if(hacker1.length<hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else{
   console.log( `Wow, you both have equally long names, XX characters!`);
}
// Iteration 3: Loops

//3.1

const Upper = hacker1.split('').join(' ').toUpperCase();
console.log(Upper);

//3.2

const reverse = hacker2.split("").reverse().join("");
