// Iteration 1: Names and Input
//
const hacker1 = "Kurt";
console.log("the driver's name is " + hacker1)
const hacker2 = "Monika";
console.log("the navigator's name is " + hacker2)


// Iteration 2: Conditionals

function longestName(name1, name2) {
    if (name1.length > name2.length) {
        console.log("the driver has the longest name, it has " + name1.length + " characters")
    } else if (name1.length < name2.length) {
         console.log("It seems that the navigator has the longest name, it has " + name2.length + " characters") 
    }
    else 
    console.log("Wow, you both have equally long names, " + name1.length + " characters")


}
longestName(hacker1, hacker2)


// Iteration 3: Loops
const separateNamesLetters = hacker1.split("").join(" ").toUpperCase();
console.log(separateNamesLetters)
const printReverse = hacker2.split("").reverse().join("");
console.log(printReverse)
function alphabeticOrder(name1, name2) {
    if
}