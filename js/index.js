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

// 3.1. Me ha parecido más limpio hacerlo con los métodos split(), pasando el string a un array, y join() volviendo a pasar el array a string con espacio entre cada letra:

let driverCapitalLetters = hacker1.toUpperCase().split("").join(" ");

console.log("Resultado con métodos:", driverCapitalLetters);

// 3.2. De la siguiente manera hubiera resuelto el ejercicio con un loop:

let hacker2Reverse = "";

for (i=0; i < hacker2.length; i++) {
  hacker2Reverse += hacker2[(hacker2.length-1)-i];
}

console.log("Resultado con loop:", hacker2Reverse);

// 3.2. El método reverse() devuelve un array ordenado del reves, posteriormente pasamos el array a string con el método join():

let navigatorReverse = hacker2.split("").reverse().join("");

console.log("Resultado con métodos:", navigatorReverse);

// 3.3. Resolviendolo con el método .localCompare()

let resultGoesFirst = hacker1.localeCompare(hacker2);
// .localCompare(), de acuerdo con el lexicographic order, devuelve 1 si hacker1 va después de hacker 2, devuelve -1 si hacher1 va antes de hacker2 y devuelve 0 si son iguales.

switch (resultGoesFirst) {
    case 0:
        console.log("What?! You both have the same name?");
        break;
        case -1:
        console.log("The driver's name goes first.");
        break;
    case 1:
        console.log("Yo, the navigator goes first definitely.");
        break;
}

// 3.3. Resolviendolo sin métodos:
if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
  } else if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
  } else {
    console.log("Yo, the navigator goes first definitely.");
  }

// BONUS 1

let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mi nunc, ullamcorper rutrum aliquam quis, euismod a elit. Praesent dignissim, nunc a finibus condimentum, odio orci aliquam orci, sed maximus massa tellus in neque. Proin scelerisque elementum ullamcorper. Sed eu porta turpis. In vulputate metus et velit egestas, eget elementum leo tristique. Nullam eget metus turpis. Aliquam a sem non elit ultrices varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec aliquet ante ut molestie lacinia. Vivamus nec dui nec lorem malesuada vehicula scelerisque eu justo. Curabitur varius convallis lacus vitae hendrerit. Sed sit amet nunc auctor, commodo lectus a, porttitor nulla. Pellentesque eu libero vitae ante semper mattis eget eu lectus. Aliquam ex mauris, fringilla nec fermentum quis, ullamcorper sed quam. Pellentesque ut lacinia est, et cursus lectus. Curabitur massa tellus, facilisis sollicitudin bibendum ac, scelerisque ac elit. Sed scelerisque leo a sapien tincidunt, sed ultricies lectus aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus orci sed dui tristique, nec sagittis nisi laoreet. Sed sit amet sagittis sem. Vestibulum sit amet imperdiet felis. Sed mi augue, pretium eu condimentum at, feugiat ut sapien. Praesent porta diam orci, placerat lacinia augue sodales in. Aliquam vel erat sit amet felis ultricies tempus quis at dolor. Maecenas vel eros vitae nibh congue tempor sit amet in lectus. Suspendisse potenti. Cras ornare sed ante in lacinia. Morbi elementum risus vitae lacus hendrerit, eget ullamcorper erat tempor. Duis libero orci, sagittis eu justo interdum, semper blandit orci. Morbi urna purus, porta vitae aliquam nec, iaculis tristique magna. In non ipsum ipsum. Duis aliquet metus dictum quam pharetra ultricies. Ut elementum faucibus maximus. Integer rhoncus ac lorem ac laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed id scelerisque magna. Suspendisse vitae finibus erat. Etiam eu ante in massa facilisis accumsan. Phasellus sodales, risus ut pretium malesuada, ex sem rhoncus felis, eu maximus risus massa ut odio. Donec porta tincidunt dui eu placerat.";

console.log(`Number of words of Lorem Ipsum: ${loremIpsum.split(" ").length}`);

let count = 0;
let loremIpsumList = loremIpsum.split(" ");

for (i=0; i < loremIpsumList.length; i++) {
    if (loremIpsumList[i] === "et") {
        count += 1;
    }
}

console.log(`Number of times word "et" appear: ${count}`);