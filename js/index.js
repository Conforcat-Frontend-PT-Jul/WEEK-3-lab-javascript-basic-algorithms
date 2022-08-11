console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Holmes";
let hacker2 = "Watson";

console.log("\n --- Iteration 1: Names and Input ---");
console.log("The driver's name is "+ hacker1);
console.log("The navigator's name is "+ hacker2);

let hacker1Length  = hacker1.length;
let hacker2Length  = hacker2.length;


// Iteration 2: Conditionals
console.log("\n\n\n --- Iteration 2: Conditionals ---");
if(hacker1Length > hacker2Length){
	console.log("The driver has the longest name, it has "+ hacker1Length +" characters.");
}
else if (hacker1Length < hacker2Length){
	console.log("It seems that the navigator has the longest name, it has "+ hacker2Length +" characters.");

} else if (hacker1Length == hacker2Length){
	console.log("Wow, you both have equally long names, "+ hacker1Length +" characters!");
}



// Iteration 3: Loops
console.log("\n\n\n --- Iteration 3: Loops ---");
// ---- Print all the characters of the driver's name, separated by a space and in capitals.

console.log("\n * Uppercase and spaced *");
let spaced = "";
for (let i = 0; i < hacker1Length; i++) {
	spaced += hacker1.charAt(i).toUpperCase()+ " ";
}
console.log(spaced);

// --- Print all the characters of the navigator's name, in reverse order. 
console.log("\n * Reverse order *");
console.log(hacker2.split("").reverse().join(""));


// --- Comparing lexicographic order of the strings.
console.log("\n * Lexicographic comparison *");
let lexicalOrder = hacker1.localeCompare(hacker2);

if(lexicalOrder == -1){
	console.log("The driver's name goes first.");
}else if(lexicalOrder == 1){
	console.log("Yo, the navigator goes first definitely.");
}else if(lexicalOrder == 0){
	console.log("What?! You both have the same name?");	
}


// Bonus 1
console.log("\n\n\n --- Bonus 1 ---");

let loremParagraph = "Duis fermentum, sapien ac efficitur ornare, metus nisl faucibus mauris, vel sollicitudin lorem est vitae magna. Sed non tellus eget magna tincidunt vestibulum. Nullam semper nunc dolor, at porta turpis porta ut. Suspendisse nec purus ac urna suscipit rhoncus. Praesent auctor interdum turpis, vel rutrum justo consectetur id. Fusce commodo efficitur enim quis fermentum. Integer hendrerit enim ut erat sollicitudin tempor. Nunc sed tellus faucibus, auctor ipsum nec, dapibus quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dolor sapien, volutpat non mi vel, scelerisque pretium erat. Mauris sed tortor ante. Ut id fermentum libero, non faucibus justo. Vivamus maximus gravida orci vitae ullamcorper. Suspendisse vel fermentum quam. Donec varius hendrerit velit scelerisque lacinia. Aliquam ac suscipit tortor, quis ornare lacus. Nullam orci mi, vestibulum ut dui non, molestie luctus diam. Sed finibus sodales lorem ut egestas. Suspendisse at dolor non ex euismod faucibus. Proin mauris diam, volutpat non vulputate id, imperdiet et augue. Etiam id nunc pellentesque, venenatis orci vel, volutpat quam. Nunc facilisis elit eget nibh molestie eleifend. Integer vitae massa nibh. Praesent commodo elit a dictum commodo. Proin ultrices sagittis felis sit amet porta. Curabitur sapien neque, consequat id quam a, cursus blandit leo. Sed tempor iaculis libero, ac varius orci pharetra a. Nulla efficitur purus quis urna consectetur mattis. Nulla at sodales urna, et elementum leo. Curabitur bibendum dolor ac dui iaculis, id facilisis mauris efficitur.";

console.log("\n * Word count *");
let wordCount = 0;
  for (let i = 0; i < loremParagraph.length; i++){
    if (loremParagraph[i] === " ") { 
      wordCount +=1; 
  }
}
wordCount +=1; // for the last word
console.log("The text has: " + wordCount + " words");

console.log("\n * How many 'et' words *");
wordCount = 0;
  for (let i = 0; i < loremParagraph.length; i++){
    if (loremParagraph[i] === "e") {  // Nested if to avoid making ALWAYS the 4 comparisons
     if(loremParagraph[i-1] === " " && loremParagraph[i+1] === "t" && loremParagraph[i+2] === " "){
     	wordCount += 1;
     }
  }
}
console.log("There are " + wordCount + " 'et' in the text");