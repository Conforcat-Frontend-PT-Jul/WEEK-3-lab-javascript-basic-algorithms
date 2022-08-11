// IM READY TO START!

console.log("I'm ready!");

// ITERARION 1

const hacker1 = "Gerard";

console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Marcos";

console.log(`The navigator's name is ${hacker2}`);

// ITERATION 2

if( hacker1.length > hacker2.length ){
  console.log(`The diver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else if (hacker1.length === hacker2.length){
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}

// ITERATION 3

const driver = "Thor";
const navigator = "Thanos";

// const splittedDriver = driver.split('');
// console.log(splittedDriver.join(' ').toUpperCase());

// const splittedNavigator = navigator.split('');
// console.log(splittedNavigator.reverse().join(''));

// 3.1

let printDriver = "";
for(let i= 0; i<driver.length; i++){
 printDriver += driver[i].toUpperCase() + " ";
}
console.log(printDriver);

// 3.2

let printNavigator = "";
for(let j = driver.length -1; j>=0; j--){
 printNavigator += driver[j];
}
console.log(printNavigator);


// 3.3

if (driver > navigator){
  console.log("Yo, the navigator goes first definitely");
} else if (driver < navigator){
  console.log("The driver's name goes first.");
} else if(driver === navigator){
  console.log("What?! You both have the same name?")
}

