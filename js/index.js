// Iteration 1: Names and Input
//
// Iteration 2: Conditionals


// Iteration 3: Loops
console.log("I'm ready!");
// Iteration 1: Names and Input

const hacker1 = "John";
console.log("The driver's name is " + hacker1);

const hacker2 = "Popeye";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
//str.length
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

//It seems that the navigator has the longest name, it has XX characters.

console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);

//Wow, you both have equally long names, XX characters! 

console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);


// Iteration 3: Loops

//Calcula e imprime el resultado del nombre en mayusculas y con espacios en blanco
var result = '';
for (let i = 0; i < hacker1.length; i++) {
    result = result + hacker1[i].toUpperCase().concat(' ');
}
console.log(result);

//Calcula e imprime el nombre de manera invertida
var resultInv = '';
for (let i = 0; i < hacker1.length; i++) {
    resultInv = hacker1[i] + resultInv;
}
console.log(resultInv);

//Copara alfabeticamente 2 palabras o string
if (hacker1.localeCompare(hacker2)) {
    console.log("The driver's name goes first.");
}
if (hacker2.localeCompare(hacker1)) {
    console.log("Yo, the navigator goes first definitely.");
}
if (hacker2.localeCompare(hacker1)) {
    console.log("What?! You both have the same name?");
}


var contenido = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, tortor quis lobortis ullamcorper, massa lacus facilisis eros, ullamcorper condimentum ligula tortor eu enim. Duis id ligula hendrerit, pellentesque nulla vel, pharetra lectus. Cras eget diam sed tellus accumsan semper. Sed rhoncus mattis volutpat. Proin sollicitudin finibus lacus. Duis hendrerit lorem vitae faucibus luctus. Vivamus id bibendum enim, sed pellentesque lacus. Donec mi augue, venenatis non sem eget, posuere suscipit ligula. Quisque luctus ligula tortor, in volutpat nisi cursus vitae. Donec sodales, tortor convallis venenatis malesuada, tortor ligula pellentesque dui, et aliquam velit lectus nec eros. Phasellus ut vehicula neque. Duis semper diam est. Duis egestas, lectus nec eleifend interdum, purus est hendrerit justo, laoreet laoreet lectus purus nec arcu. Praesent ut quam feugiat, imperdiet diam vitae, tincidunt nisi. Mauris finibus consequat dapibus. Sed dapibus eros sed enim mattis dignissim. Vestibulum auctor pretium diam molestie accumsan. Praesent gravida ipsum eget scelerisque luctus. Nam pharetra est et dolor ultrices, in hendrerit purus consectetur. Pellentesque congue, orci at fringilla elementum, lectus erat cursus eros, condimentum auctor tortor purus quis dolor. Vivamus at lobortis metus, in finibus felis. Sed posuere velit eu magna egestas venenatis et at metus. Etiam elementum arcu in urna porttitor, eget molestie felis rutrum. Duis mattis, neque eu aliquet ultrices, lorem magna semper lectus, vel efficitur diam risus pellentesque nisl. Maecenas dui libero, dapibus nec sapien iaculis, eleifend egestas neque. Pellentesque tempus, lectus sit amet dictum maximus, magna felis venenatis metus, vel tempus libero leo ut metus. Proin nunc elit, tristique a eleifend vel, ullamcorper a lorem. Morbi vel ante accumsan, tempus ante quis, cursus justo. Mauris rutrum dolor libero, et efficitur dolor condimentum quis. In pretium neque sed efficitur aliquet. Sed sed nisi vitae orci semper malesuada. Ut a tellus ut tellus semper lacinia eu sed ex. Quisque dapibus elit eu lacinia lobortis. Duis ut feugiat lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer consequat elit sed velit luctus imperdiet. Pellentesque venenatis nibh vel erat consequat, sit amet hendrerit erat porta. Nulla non massa elit. Suspendisse tellus sapien, lacinia vel mi in, porttitor tempus nisl."

var cantidad = contenido.split(' ').length;

console.log(cantidad);

var contarPalabra = (contenido.match(/ et /g) || []).length;

console.log(contarPalabra);
