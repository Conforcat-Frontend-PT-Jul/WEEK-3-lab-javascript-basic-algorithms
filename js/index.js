// Iteration 1: Names and Input

var hacker1 = "Vicente";
console.log("The driver's name is " + hacker1);
var hacker2 = "Juan";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

//2.1. Depending on which name is longer, print:

//- The driver has the longest name, it has XX characters. or
//- It seems that the navigator has the longest name, it has XX characters. or
//- Wow, you both have equally long names, XX characters!.

function longestName(hacker1, hacker2) {
  if (hacker1.length > hacker2.length) {
    console.log(
      "The driver has the longest name, it has " +
        hacker1.length +
        " characters."
    );
  } else if (hacker1.length < hacker2.length) {
    console.log(
      "The navigator has the longest name, it has " +
        hacker2.length +
        " characters."
    );
  } else {
    console.log(
      "Wow, you both have equally long names, " +
        hacker1.length +
        " characters!"
    );
  }
}

longestName(hacker1, hacker2);

// Iteration 3: Loops

//3.1 split all the characters of the driver's name, separated by a space and in capitals  letters

function splitName(hacker1) {
  let newDriversName = "";
  for (let i = 0; i < hacker1.length; i++) {
    newDriversName += hacker1[i].toUpperCase() + " ";
  }
  console.log(newDriversName.trim());
  return splitName;
}

splitName(hacker1);

//Other way to do it
console.log(hacker1.toUpperCase().split("").join(" "));

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

function reverseName(hacker2) {
  let newNavigatorsName = "";
  for (let i = hacker2.length - 1; i >= 0; i--) {
    newNavigatorsName += hacker2[i];
  }
  console.log(newNavigatorsName);
  return reverseName;
}

reverseName(hacker2);

//Other way to do it
console.log(hacker2.split("").reverse().join(""));

//3.3 Depending on the lexicographic order of the strings, print:
//- The driver's name goes first.
//- Yo, the navigator goes first definitely.
//- What?! You both have the same name?

function lexicographicOrder(hacker1, hacker2) {
  if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
  } else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
}

lexicographicOrder(hacker1, hacker2);

// Other solution to do it with localeCompare()

function lexicographicOrder2(hacker1, hacker2) {
  if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
  } else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
}

lexicographicOrder2(hacker1, hacker2);

/* Bonus Time!
Bonus 1:
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
 */

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et vestibulum eros, eget fringilla erat. In in felis sed dolor pretium finibus. Praesent tempor sem et ultrices ultrices. Pellentesque vel leo gravida, mattis risus hendrerit, condimentum sem. Sed imperdiet lectus eu nisi vehicula, eu sodales velit volutpat. Sed nulla leo, imperdiet at lorem sed, laoreet hendrerit odio. Nam tortor diam, laoreet vel viverra vel, dapibus vel elit. Duis pharetra, magna vel eleifend tempor, nisl augue porttitor ipsum, ullamcorper suscipit felis metus eu magna.

Proin quis risus maximus, commodo tellus nec, malesuada dui. In mollis tempus ipsum, dapibus rhoncus elit dictum at. Nulla vel pulvinar dui, sit amet mollis arcu. Aenean iaculis velit in nulla dictum, a rutrum augue porta. Maecenas sed bibendum quam, vel vulputate massa. Vivamus aliquam, arcu nec consequat finibus, risus diam varius urna, vel varius velit lacus in arcu. Donec quis mi ut quam venenatis consequat vel et sapien.

Donec sed diam nec urna molestie posuere ac ac massa. Aliquam Aliquam a mi iaculis, mattis sapien non, posuere leo. Nulla convallis eget nisl sit amet euismod. Aenean eros ex, gravida volutpat libero a, maximus pretium orci. Aliquam velit eros, gravida ac libero ac, convallis ultrices velit. Sed ultricies, enim non semper mattis, neque sem blandit turpis, eget venenatis odio velit quis ex. Proin ornare a sapien ut pellentesque. Integer ullamcorper, est eget venenatis luctus, lacus dolor interdum odio, et pellentesque urna mi ultricies ex. Nulla facilisi. Proin hendrerit mollis vulputate. Fusce dapibus leo orci, vitae convallis nibh finibus id. Nam tempus neque a lobortis malesuada. Etiam cursus ornare dolor nec vehicula. Praesent sit amet porta tortor, a vehicula ex.`;

function countWordsAndEt(paragraph) {
  let words = paragraph.split(" ");
  let etCount = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === "et" || words[i] === "et.") {
      etCount++;
    }
  }
  console.log("There are " + words.length + " words in the paragraph.");
  console.log("The word et appears " + etCount + " times in the paragraph.");
}

countWordsAndEt(paragraph);

/*
Bonus 2:
Create a new variable phraseToCheck and have it contain some string value.
Write a code that will check if the value we assigned to this variable is a Palindrome.
*/

function checkPalindrome(phraseToCheck) {
  let reversePhrase = "";
  for (let i = phraseToCheck.length - 1; i >= 0; i--) {
    reversePhrase += phraseToCheck[i];
  }
  if (reversePhrase === phraseToCheck) {
    console.log("The phrase is a palindrome.");
  } else {
    console.log("The phrase is not a palindrome.");
  }
}

let sample = "A man, a plan, a canal, Panama!";
let sample1 = "Amor, Roma";
let sample2 = "race car";
let sample3 = "stack cats";
let sample4 = "step on no pets";
let sample5 = "taco cat";
let sample6 = "put it up";
let sample7 = `Was it a car or a cat I saw?" and "No 'x' in Nixon`;

checkPalindrome(sample);
checkPalindrome(sample1);
checkPalindrome(sample2);
checkPalindrome(sample3);
checkPalindrome(sample4);
checkPalindrome(sample5);
checkPalindrome(sample6);
checkPalindrome(sample7);
