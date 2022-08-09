// Iteration 1: Names and Input
//
let hacker1 = "Pedrito";
console.log("The driver's name is " + hacker1);
let hacker2 = "Juanito";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters."
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names, " + hacker2.length + " characters!"
  );
}

// Iteration 3: Loops
let driversCapitalName = "";
for (let i = 0; i < hacker1.length; ++i) {
  driversCapitalName += hacker1[i].toUpperCase();
  if (i < hacker1.length - 1) {
    driversCapitalName += " ";
  }
}
console.log(driversCapitalName);

let navigatorReverseName = "";
for (let j = hacker2.length - 1; j >= 0; --j) {
  navigatorReverseName += hacker2[j];
}
console.log(navigatorReverseName);

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1

let loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae pellentesque enim. Vestibulum et justo sapien. Cras blandit nulla ipsum, in luctus libero accumsan a. Aenean lacus mi, placerat a porta ut, fermentum ut diam. Integer elementum blandit justo ut interdum. Aliquam ultricies tellus vitae purus sodales, vitae ullamcorper nisl maximus. Morbi eget vulputate ipsum. Integer hendrerit nisl et elit imperdiet, ut vulputate lacus commodo. Maecenas nec nibh at dolor convallis pellentesque a nec erat.Suspendisse potenti. Nam diam tortor, ullamcorper et convallis sed, iaculis non ante. Aenean cursus vel massa posuere aliquet. Etiam scelerisque nisi vitae metus volutpat, at maximus libero viverra. Suspendisse sapien sapien, egestas vitae aliquet et, tristique id ligula. Pellentesque imperdiet efficitur feugiat. Aliquam ut blandit mauris. Quisque scelerisque dictum lectus eu sagittis.Phasellus mattis tellus non semper euismod. Quisque suscipit enim nec magna posuere, vel aliquam magna tempus. Maecenas aliquet venenatis ornare. In ligula sem, vestibulum ultricies bibendum quis, accumsan ut nibh. Vivamus iaculis fringilla pharetra. Nulla condimentum nisi vitae elit iaculis maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vitae sollicitudin sapien. Donec eu auctor massa, quis hendrerit dui. Praesent sit amet turpis ac nulla sagittis ultrices nec in neque. Curabitur a odio et tortor ornare vehicula sit amet eu tellus.";
let nWords = loremIpsum.trim().split(/\s+/).length;

console.log("Number of words: " + nWords);

let nEt =
  loremIpsum.toUpperCase().split(" ET ").length -
  1 +
  (loremIpsum.toUpperCase().split(" ET,").length - 1) +
  (loremIpsum.toUpperCase().split(" ET.").length - 1);
  
console.log("Number of times word et apears: " + nEt);

// Bonus 2
let phraseToCheck = [
  "A man, a plan, a canal, Panama!",
  "Amor, Roma",
  "step on no pets",
  "this is not, a palindrome!",
];

phraseToCheck.forEach(function (phrase) {
  let phraseAux = phrase.toUpperCase().replace(/[\s+,.!]/g, "");
  let mid = phraseAux.length / 2;
  let phraseReverse = phraseAux.split("").reverse().join("");
  if (phraseAux.length % 2 === 0) {
    mid -= 0.5;
  }
  if (
    phraseAux.split(0, mid).toString() ===
    phraseReverse.split(0, mid).toString()
  ) {
    console.log("the phrase: '" + phrase + "' is a Palindrome.");
  } else {
    console.log("The phrase: '" + phrase + "' is not a Palindrome");
  }
});
