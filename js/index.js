// Iteration 1: Names and Input
console.log("");
console.log("## Iteration 1");

const   hacker1 = "Pablo",
        hacker2 = "Cristian";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
console.log("");
console.log("## Iteration 2");

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}


// Iteration 3: Loops
console.log("");
console.log("## Iteration 3");

let haker1ToUpperCaseAndSpaced = "";
hacker1.split("").forEach(letter => {
    haker1ToUpperCaseAndSpaced += letter.toUpperCase() + " ";
})
console.log(haker1ToUpperCaseAndSpaced);

const haker1Reverse = hacker1.split("").reverse().join("");
console.log(haker1Reverse);

if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
    console.log("The driver's name goes first");
}
if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
    console.log("Yo, the navigator goes first definitely.");
}
if (hacker1.toLowerCase() === hacker2.toLowerCase()) {
    console.log("What?! You both have the same name?");
}


// ________________________________
// Bonus Time!

// Bonus 1
console.log("");
console.log("## Bonus 1");

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat, turpis molestie bibendum rutrum, risus erat sodales turpis, non auctor libero enim ac risus. Curabitur dignissim ante eu sem egestas egestas. Phasellus in turpis ultricies, vehicula mauris vel, rhoncus sapien. Maecenas id nisl nec est sollicitudin venenatis. Donec consectetur pharetra est, in condimentum orci posuere ac. Etiam et mauris et enim pellentesque vehicula. Fusce et bibendum lectus, ac egestas sem. Phasellus laoreet nunc quis arcu rhoncus facilisis.
Fusce posuere tellus a ipsum efficitur tempus. Nulla at dapibus sem, vitae eleifend nisl. Sed fermentum sem sit amet urna volutpat, et iaculis tortor efficitur. Nullam congue est pellentesque tempor varius. Suspendisse ultricies erat sed erat molestie, et congue lorem condimentum. Ut semper, neque in faucibus suscipit, eros massa bibendum mauris, at bibendum augue nisl in ligula. Vestibulum suscipit, ipsum non sollicitudin semper, nisi velit hendrerit tortor, viverra convallis ligula libero sit amet diam. Nunc mattis interdum vulputate. Quisque id lacus maximus, maximus felis eu, rutrum lectus. Aliquam vestibulum suscipit purus, vel tristique est rhoncus ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
Proin eu odio sem. Proin faucibus et quam vitae varius. Proin imperdiet quam in ligula scelerisque dapibus. Mauris elementum nisi velit, a pellentesque dolor tempor eu. Sed pharetra lacus sit amet tempor dictum. In eget urna neque. Phasellus diam purus, vulputate et magna eget, luctus consequat urna. Sed cursus at felis eget ultrices. Nulla non justo nisi. Morbi scelerisque orci non iaculis commodo. Sed vel nulla ut dolor pulvinar facilisis at eu sapien. Aliquam suscipit lacus vitae consequat rutrum.`;

const numWordsInParagraph = paragraph.split(" ").length;
console.log(`numWordsInParagraph: ${numWordsInParagraph}`);

const specificWord = "et";

const paragraphToLowerCase = paragraph.toLowerCase();
const specificWordToLowerCase = specificWord.toLowerCase();

const paragraphToSentences = paragraphToLowerCase.split(".");

const specificWordFinal = paragraphToLowerCase.split(" " + specificWordToLowerCase + ".").length - 1;
const specificWordMiddle = paragraphToLowerCase.split(" " + specificWordToLowerCase + " ").length - 1;
const specificWordMiddleWithComma = paragraphToLowerCase.split(" " + specificWordToLowerCase + ",").length - 1;

const totalSpecificWordInParagraph = specificWordFinal + specificWordMiddle + specificWordMiddleWithComma;
console.log(`numSpecificWordInParagraph: ${totalSpecificWordInParagraph}`);


// Bonus 2
console.log("");
console.log("## Bonus 2");

const phraseToCheck =   ["Amor, Roma",
                        "A man, a plan, a canal, Panama!",
                        "Amor, Roma",
                        "race car",
                        "stack cats",
                        "step on no pets",
                        "taco cat",
                        "put it up",
                        "Was it a car or a cat I saw?",
                        "No 'x' in Nixon"];

function checkIfIsPalindrome(text) {
    const phraseToCheckAlpha = text.toLowerCase().replace(/[^a-z]/g, "");
    console.log(`phraseToCheckAlpha: \t\t ${phraseToCheckAlpha}`);
    
    const phraseToCheckAlphaReverse = phraseToCheckAlpha.split("").reverse().join("");
    console.log(`phraseToCheckAlphaReverse: \t ${phraseToCheckAlphaReverse}`);
    
    const isPalindrome = (phraseToCheckAlpha === phraseToCheckAlphaReverse) ? "YES! It's a palindrome :)" : "Ohhh... It isn't a palindrome :(";
    console.log(isPalindrome);
    
    console.log("");
}

phraseToCheck.forEach(text => {
    checkIfIsPalindrome(text);
});