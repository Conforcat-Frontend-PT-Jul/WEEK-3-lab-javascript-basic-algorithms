console.log("I'm ready!");

// Iteration 1: Names and Input

const hacker1 = "Marc"

console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Jelizaveta"

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

const driverLength = hacker1.length
const navigatorLength = hacker2.length

if (driverLength > navigatorLength) {
    console.log(`The driver has the longest name, it has ${driverLength} characters.`)
} else if (driverLength < navigatorLength) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${driverLength} characters!`)
}

// Iteration 3: Loops
