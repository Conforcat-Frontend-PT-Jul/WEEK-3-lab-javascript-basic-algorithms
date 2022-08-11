// Iteration 1: Names and Input
console.log("I´m ready!")

let hacker1 = "Jack"
console.log("The driver´s name is: ", hacker1)

let hacker2 = "Bob"
console.log("The navigator's name is:", hacker2)
//
// Iteration 2.1: Conditionals

console.log(hacker1.length)
console.log(hacker2.length)

console.log("Looks like", hacker1, "has the longest name with", hacker1.length, "characters. Well done!")

// Iteration 3: Loops

// 3.1 
console.log(hacker1.toUpperCase().split('').join(' '))

// 3.2
console.log(hacker1.split("").reverse().join(""))

// 3.3

let names= [hacker1, hacker2]
console.log(names.sort());

let drivers = ["Jack", "Bob"];
drivers.sort((a, b) => {
  if (a == b) {
    console.log("What?! You both have the same name?")
  }
  if (a < b) {
    console.log("Yo, the navigator goes first definitely.")
  }
  if (a > b) {
  console.log("The driver's name goes first.")
}
});
