console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "John Malkovich";
console.log("The driver's name is " + hacker1);

let hacker2 = "Marilyn Monroe";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

function longerName(name1,name2){
  let message = "";
  if (name1.length < name2.length){
    message = "It seems that the navigator has the longest name, it has " +name2.length+ " characters."
  } else if (name1.length > name2.length){
    message = "The driver has the longest name, it has "+name1.length+" characters."
  } else if (name1.length === name2.length){
    message = "Wow, you both have equally long names, "+name1.length+" characters!."
  }
  console.log(message);
}

longerName(hacker1,hacker2);


// Iteration 3: Loops

// Iteration 3.1
function splitCapitals(name){
  let nameUpperCase = "";
  name.toUpperCase();
  for (let i = 0; i < name.length ; i++){
    nameUpperCase += name[i] + " ";
  }
  console.log(nameUpperCase);
}

splitCapitals(hacker1);


// Iteration 3.2
function reverse(name){
  let reversedName = "";
  for (let i = name.length-1; i >= 0; i--){
    reversedName = reversedName + name[i]
  }
  return reversedName;
}

console.log(reverse(hacker2));

// Iteration 3.3
function orderNames(name1,name2){
  let message =""
  if (name1.localeCompare(name2) == 0){
    message = "What?! You both have the same name?"
  } else if (name2.localeCompare(name1) > 0){
    message ="The driver's name goes first."
  } else if (name2.localeCompare(name1) < 0){
    message = "Yo, the navigator goes first definitely."
  }
  console.log(message);
}

orderNames(hacker1,hacker2);


//Bonus 1
const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper, urna sed commodo porta, libero neque vestibulum diam, eget cursus enim libero ac velit. Curabitur est dui, feugiat vel lectus vel, vestibulum pharetra dolor. Etiam viverra turpis ac luctus egestas. Ut turpis metus, ornare a dapibus in, gravida eu quam. Nulla porta metus ac elit pretium efficitur. Sed pretium consectetur bibendum. Sed at orci id nisi molestie eleifend. Nunc ut massa erat. Duis nec neque lorem. Phasellus convallis, diam at porttitor elementum, erat nisi aliquam ligula, non ullamcorper velit ipsum in tortor. Ut hendrerit odio eget odio malesuada tincidunt. Pellentesque pharetra nisi sit amet suscipit pretium. Sed a erat ac odio congue interdum. Cras et congue arcu, auctor laoreet leo. Mauris fringilla venenatis convallis. Donec aliquam nibh laoreet eros vestibulum efficitur. Donec vitae aliquam ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce pellentesque odio sit amet orci tempus semper. Ut molestie tortor pretium ligula placerat, quis porttitor mi ullamcorper. Curabitur eu leo pharetra, pellentesque nisl eget, aliquet nisi. Aliquam erat enim, pretium quis augue a, pulvinar molestie sem. Donec tincidunt nisl quis dui scelerisque, a rutrum quam consequat. Sed varius purus at est tempor, id vehicula augue vulputate. Vestibulum feugiat justo ut tellus fringilla dapibus. Cras eget consectetur justo. Sed ultricies augue quis dui varius, in convallis orci interdum. Cras consequat rutrum leo, quis cursus mi cursus id. Sed sem justo, sollicitudin ut arcu at, sollicitudin tristique neque. Duis eget massa sem. Etiam et vestibulum ligula. Nunc egestas in leo eu pretium. Donec felis purus, fermentum ac nulla vitae, faucibus rhoncus lectus. Quisque interdum mauris quis nibh tempor vestibulum. Etiam aliquam id purus id luctus. Sed egestas quam tincidunt erat lobortis, sed efficitur tortor auctor."

function countText(text) {
  counter = 1;
  counterEt = 0;
  for ( let i = 0; i < text.length; i++)
    if(text[i] == " ") {
      counter++;
    } else if(text[i-1] === " " && text[i]=="e" && text[i+1]=="t" && text[i+2]==" ") {
        counterEt++;
    }
    console.log("The text has " +counter+ " words. The word et appears " +counterEt+ " times");
}

countText(loremIpsum);

//Bonus 2

let phraseToCheck = "step on no pets";

function palindromeChecker(phrase) {
  let message = "It's not a palindrome"
  let reversedPhrase = reverse(phrase);

  if(reversedPhrase == phraseToCheck){
    message = "Hell YEAH! It's a Palindrome"
  }
  console.log(message);
}

palindromeChecker(phraseToCheck);