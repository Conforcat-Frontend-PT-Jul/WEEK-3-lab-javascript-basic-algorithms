console.log("I'm ready!");

// Iteration 1: Names and Input

// 1.1.

let hacker1 = 'Alicia';

// 1.2.

console.log(`The driver's name is ${hacker1}`);

// 1.3.

let hacker2 = 'Sergio';

// 1.4.

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

// 2.1.

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`);
}

// Iteration 3: Loops

// 3.1. De la siguiente manera hubiera resuelto el ejercicio con un loop:

let hacker1CapitalLetters = "";

for (i=0; i < hacker1.length; i++) {
  hacker1CapitalLetters += hacker1[i].toUpperCase() + " ";
}

console.log("Resultado con loop:", hacker1CapitalLetters);

// 3.1. Me ha parecido más limpio hacerlo con las funciones split(), pasando el string a un array, y join() volviendo a pasar el array a string con espacio entre cada letra:

let driverCapitalLetters = hacker1.toUpperCase().split("").join(" ");

console.log("Resultado con funciones:", driverCapitalLetters);

// 3.2. De la siguiente manera hubiera resuelto el ejercicio con un loop:

let hacker2Reverse = "";

for (i=0; i < hacker2.length; i++) {
  hacker2Reverse += hacker2[(hacker2.length-1)-i];
}

console.log("Resultado con loop:", hacker2Reverse);

// 3.2. La función reverse() devuelve un array ordenado del reves, posteriormente pasamos el array a string con la función join():

let navigatorReverse = hacker2.split("").reverse().join("");

console.log("Resultado con funciones:", navigatorReverse);

// 3.3.

if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
  } else if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
  } else {
    console.log("Yo, the navigator goes first definitely.");
  }

  // BONUS 1