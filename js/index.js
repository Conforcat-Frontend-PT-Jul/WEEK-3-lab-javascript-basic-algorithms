console.log("I'm ready!");

// Iteration 1: Names and Input
// 1.1.
const hacker1 = "Charles";
// 1.2.
console.log(`The driver's name is ${hacker1}`);
// 1.3.
const hacker2 = "Ludmila";
// 1.4.
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// 2.1.
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
// 3.1.
console.log(hacker1.toUpperCase().split("").join(" "));

//3.2.
console.log(hacker2.split("").reverse().join(""));

//3.3.
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// BONUS 1
const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare est eget purus gravida dapibus. Donec pulvinar a massa id euismod. Donec est tortor, ornare vitae diam eu, vulputate semper justo. Maecenas consectetur elit eu urna semper, eu ultrices magna placerat. In pulvinar, libero sed aliquet mattis, diam neque tincidunt lacus, viverra malesuada dolor purus quis turpis. Donec vitae sem eu sem consequat mollis. Vivamus velit lorem, aliquet non leo ut, gravida bibendum leo.

Vestibulum mauris libero, vestibulum eu lorem a, tristique interdum arcu. Maecenas a pellentesque mauris. Proin tortor justo, dignissim at neque sed, mattis placerat turpis. Pellentesque quis magna quis purus consectetur auctor. Donec lacinia urna non ligula mattis, at sollicitudin lectus facilisis. Cras in metus risus. Mauris quis elit quis elit ornare posuere ut non augue. Nam id ultricies enim, eget pellentesque odio. Vivamus eget tincidunt turpis. Nullam ut gravida risus. Cras turpis mi, rhoncus ut posuere hendrerit, pulvinar ut massa. Ut vestibulum ultricies massa.

Praesent turpis nisl, interdum quis arcu rutrum, dapibus iaculis risus. Praesent arcu felis, molestie a fringilla non, ornare non nisi. Curabitur turpis ligula, luctus a odio non, finibus varius massa. Donec lobortis est a tellus ornare commodo. Nulla blandit ullamcorper ultrices. Duis commodo enim tellus. Pellentesque venenatis ut mauris nec vestibulum. In facilisis ipsum aliquet nibh commodo sagittis.`;

console.log(loremIpsum.split(" ").length);

let counter = 0;
for (let i = 0; i < loremIpsum.split(" ").length; i++) {
  if (loremIpsum.split(" ")[i] === "et") {
    counter++;
  }
}
console.log(counter);

// BONUS 2.
const phraseToCheck = "A man, a plan, a canal, Panama!";

function isPalindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, "");
  var strLen = str.length;
  for (var i = 0; i < strLen / 2; i++) {
    if (str[i] !== str[strLen - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(phraseToCheck));
