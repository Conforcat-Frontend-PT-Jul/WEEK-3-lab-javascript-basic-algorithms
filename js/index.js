console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1="Hudson";
let hacker2="Torres";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);
} else if(hacker2.length > hacker1.length){
    console.log(`Torres, navigator has the longest name, it has ${hacker2.length} characters`);
} else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
hacker1 = hacker1.toUpperCase();
let otherHacker1 = "";
for(let i=0; i<hacker1.length; i++){
    otherHacker1 += hacker1[i] + " ";
}
console.log(otherHacker1);

let otherhacker2= "";
for(let i=hacker2.length - 1; i>=0; i--){
    otherhacker2 += hacker2[i];
}
console.log(otherhacker2);

if(hacker2.localeCompare(hacker1) === 1){
    console.log("The driver's name goes first.");
} else if(hacker1.localeCompare(hacker2) === 1){
    console.log("Yo, the navigator goes first definitely.");
} else{
    console.log("What?! You both have the same name?");
}
