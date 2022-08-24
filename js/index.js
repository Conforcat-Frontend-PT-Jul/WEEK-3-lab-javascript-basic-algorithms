// Iteration 1: Names and Input
console.log("I´m ready!")


//1.1
const hacker1 = "Jack"

//1.2
console.log(`The driver´s name is: ${hacker1}`)
//1.3

const hacker2 = "Bob"

//1.4
console.log(`The navigator´s name is: ${hacker2}`)

// Iteration 2: Conditionals
// Iteration 2.1: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has: ${hacker1.length} characters.`);
}
  else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has: ${hacker2.length} characters.`);
}
 else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names with ${hacker2.length} characters!.`);
}

// Iteration 3: Loops

//3.1

const goUp = hacker1;
for (const value of goUp) {
  let result = value.toUpperCase();
  console.log(result);
}

// 3.2
console.log(hacker1.split("").reverse().join(""))

// 3.3

 if (hacker1 == hacker2) {
    console.log("What?! You both have the same name?")
  }
  else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first definitely.")
  }
  else if (hacker2 > hacker1) {
  console.log("The driver's name goes first.")
}


//Bonus 1:

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla libero pharetra efficitur porta. Ut tellus lacus, iaculis ut varius a, accumsan id sapien. Fusce auctor at tellus eget imperdiet. Vivamus molestie lobortis ligula, vel fringilla nibh ultrices viverra. Maecenas at ligula ut arcu euismod semper. Praesent accumsan quam vel tortor viverra fermentum. Maecenas pretium vel mauris vel fringilla. Nam et augue vel nisi venenatis viverra interdum vel leo. Ut tempor commodo ipsum sed auctor.Nam aliquam porta tortor, ut commodo nunc. Nunc id rhoncus orci. Ut eu mi ipsum. Fusce sit amet ex eu risus pretium auctor. Quisque porttitor leo nisi, non convallis nibh bibendum ut. Phasellus ut metus ac arcu viverra fermentum. Quisque et tempor sapien, et scelerisque mi.Praesent porttitor luctus imperdiet. Fusce et venenatis erat. Aliquam vel porttitor magna, cursus tincidunt velit. Aenean sit amet arcu quis risus pretium fringilla. Vestibulum elementum ipsum id ligula consectetur, ut blandit neque malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam ac sapien tincidunt, imperdiet purus sed, iaculis dui.";

//console.log(lorem.split(" "));

//let countWords = lorem.split(' ').length;
//console.log("El numero total de palabras es: " + countWords );

//Bonus 1.2

function countWords(lorem) {
let count = 0;
for (let i= 0; i <= lorem.length; i++) {
   if (lorem.charAt(i) == " ") {
        count ++;
    }
}
return count + 1;
}
console.log("The number of words in the string are: " + countWords(lorem));

//Bonus 1.3


