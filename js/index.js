// Iteration 1: Names and Input
const   hacker1 = "Pablo",
        hacker2 = "Cristian";
console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
}
if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
}
if (hacker1.length == hacker2.length) {
    console.log("Wow, you both have equally long names, " + hacker2.length + " characters!");
}

// Iteration 3: Loops
let haker1ToUpperCaseAndSpaced = "";
hacker1.split("").forEach(letter => {
    haker1ToUpperCaseAndSpaced += letter.toUpperCase() + " ";
})
console.log(haker1ToUpperCaseAndSpaced);

const haker1Reverse = hacker1.split("").reverse().join("");
console.log(haker1Reverse);

if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
    console.log("The driver's name goes first");
}
if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
    console.log("Yo, the navigator goes first definitely.");
}
if (hacker1.toLowerCase() === hacker2.toLowerCase()) {
    console.log("What?! You both have the same name?");
}