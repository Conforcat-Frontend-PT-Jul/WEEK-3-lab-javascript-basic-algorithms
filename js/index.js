// Iteration 1: Names and Input
const hacker1 = "Iñigo Montoya";
console.log(`the drivers name is ${hacker1}`);
const hacker2 = "James Holden";
console.log(`the navigator's name is ${hacker2}`);

//
// Iteration 2: Conditionals
/*


3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/

const longerName = (name1, name2) => {
  if (name1.length > name2.length) {
    return `The driver has the longest name, it has ${name1.length} characters.`;
  } else if (name1.length < name2.length) {
    return `The navigator has the longest name, it has ${name2.length} characters.`;
  } else {
    return `Wow, you both have equally long names, ${name1.length} characters!`;
  }
};
console.log(longerName(hacker1, hacker2));

// Iteration 3: Loops
const spacedPrint = hacker1.split("").join(" ").toUpperCase();
const reversePrint = hacker2.split("").reverse().join("");
console.log(spacedPrint);
console.log(reversePrint);

const lexicographicOrder = (name1, name2) => {
  if (name1 < name2) {
    return `The driver's name goes first.`;
  } else if (name1 > name2) {
    return `Yo, the navigator goes first definitely.`;
  } else {
    return `What?! You both have the same name?`;
  }
};
console.log(lexicographicOrder(hacker1, hacker2));

const ipsumlorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis massa et ac nulla efficitur, sit amet euismod elit faucibus. Morbi id ex in ligula cursus dictum a sed leo. Vivamus pellentesque tristique ultricies. Suspendisse quis elit blandit, scelerisque erat ut, porttitor quam. Quisque laoreet tortor sed massa tristique laoreet. Mauris dapibus elit sed velit consectetur, nec egestas quam fringilla. Sed tristique eros eros, eu malesuada arcu condimentum non. Praesent euismod vitae velit ut luctus. Fusce sodales euismod ex, id consectetur arcu bibendum sollicitudin. Cras scelerisque scelerisque justo id vehicula. Suspendisse ultrices nunc eget lacinia sagittis. Donec egestas risus a ex commodo, auctor pharetra diam rutrum. Suspendisse a metus consequat, lobortis velit et, blandit orci. Nunc sagittis tincidunt enim, vitae feugiat lectus sollicitudin eget. Morbi consectetur erat in libero sollicitudin pellentesque. Fusce pellentesque tellus venenatis felis malesuada, in facilisis lectus maximus. Cras fringilla urna at ex tincidunt, vitae tempor massa gravida. Nulla facilisi. Maecenas sed mattis lacus, in laoreet erat. Quisque molestie orci id neque vulputate scelerisque. Curabitur laoreet quis massa in faucibus. Etiam dignissim feugiat porttitor. Donec sagittis augue faucibus nunc sollicitudin congue. Nullam in pellentesque dolor. Vestibulum non feugiat dui. Vestibulum ut arcu luctus, egestas tortor vitae, pellentesque ipsum. Donec mollis purus ut quam bibendum, non pulvinar urna tempus. Sed varius odio sed tellus efficitur tempor. Nulla facilisi. Maecenas malesuada sed mauris vitae tincidunt. Nunc dictum sagittis accumsan. Mauris bibendum maximus orci, in porta leo gravida vitae. Etiam luctus ac lorem at ultrices. Nulla facilisi. Cras lectus eros, varius in commodo vitae, feugiat eu mi. In aliquam euismod elit eget semper. Nam tincidunt ex ex, vehicula interdum nisl semper volutpat. Proin varius tortor nibh, vel sodales enim sodales a. Mauris neque erat, hendre";
const wordsAmount = (string) => {
  const words = string.split(" ");
  console.log(words.length);
};
wordsAmount(ipsumlorem);

const findEt = (string) => {
  const words = string.split(" ");
  let counter = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === "et") {
      counter++;
    }
  }
  console.log(counter);
};
findEt(ipsumlorem);

const phraseToCheck = (string) => {
  const words = string.split("");
  const reverse = words.reverse().join("");
  if (string === reverse) {
    return true;
  } else {
    return false;
  }
};
console.log(phraseToCheck("aromoa"));
