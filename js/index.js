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
console.log(reverse);

//3.3
let lista = [hacker1,hacker2];

lista.sort();

if(lista[0]===hacker1){

    console.log(`The driver's name goes first`);

}

else if(lista[0]===hacker2){

    console.log(`Yo, the navigator goes first definitely`);

}

else{

    console.log(`What?! You both have the same name? `);

}

