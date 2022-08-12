// Iteration 1: Names and Input
//

let hacker1 = "Lua";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Luis";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
}

// Iteration 3: Loops

let DriverNameSeparate = "";
for (let i = 0; i < hacker1.length; i++) {
  DriverNameSeparate += hacker1[i].toUpperCase() + " ";
}

console.log(DriverNameSeparate.trim());

let NavigatorNameReverse = "";
for (let i = hacker2.length -1; i >= 0; i--) {
    NavigatorNameReverse += hacker2[i];
}

console.log(NavigatorNameReverse); 
