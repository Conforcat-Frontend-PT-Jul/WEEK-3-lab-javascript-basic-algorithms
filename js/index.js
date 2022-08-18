// Iteration 1: Names and Input
//
// Iteration 2: Conditionals


// Iteration 3: Loops

//Iteration 1:----------------------------//

let hacker1 = 'Juan Carlos';
console.log('the driver is', hacker1);

let hacker2 = 'Nadie'
console.log('The navigator is', hacker2);

////Iteration 2:----------------------------//

let driverNameLength = hacker1.length
let navigatorNameLength = hacker2.length

if (driverNameLength > navigatorNameLength) { 
    console.log('the driver has the longest name, it has,', driverNameLength, 'characters')
} else if (driverNameLength < navigatorNameLength) {
    console.log('it seems that the navigator has the longest name, it has', navigatorNameLength, 'characters!')
} else {
    console.log ('Wow, you both have equally long names,', driverNameLength, 'characters')
}


////Iteration 3:----------------------------//


let upperHacker1 = hacker1.toUpperCase();

let i=0
while (i < driverNameLength){
    console.log(upperHacker1[i], " ")
    i++;
}

let space = ''
    space = hacker1.toUpperCase().split('').join(' ');
    console.log(space);
    
let reverseName = ''

    reverseName = hacker1.split('').reverse().join('')
    console.log(reverseName);

if (hacker1 < hacker2){
    console.log("The driver's name goes first." )
} else if (hacker1 > hacker2){
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}


 

