// Iteration 1: Names and Input


  //driver
    let hacker1 = "Maria";
    //navigator
    let hacker2 = "Marcos";
    let newString= "";
    let totalCharacter = 0;
    console.log("The driver's name is "+"" + hacker1);
    console.log("The navigator's name is "+"" + hacker2);

//Iteration 2: Conditionals
    if(hacker1.length > hacker2.length) {      
        console.log("The driver has the longest name, it has" + " " + hacker1.length + " characters.");
    }else if(hacker1.length < hacker2.length){
        console.log("It seems that the navigator has the longest name, it has" + " " + hacker2.length + " characters.");
    }else{
        console.log("Wow, you both have equally long names, XX characters!");
}

// Iteration 3: Loops
/*3.1 Print all the characters of the driver's name, 
separated by a space and in capitals i.e. "J O H N"*/

    let textName = "maria";
    let newTextName = "";
   
    for(let i = 0; i < textName.length; i++) {
        newTextName += textName [i] + (" ");
        console.log(newTextName.toUpperCase());
        
    }
//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"    

    let nameText = "marcos";
    let nameReverse = "";
    let nameLenght = nameText.length -1;

    for(let i = nameLenght; i >= nameLenght; i--) {
        nameReverse += nameText[i];
        console.log(nameReverse.toUpperCase());
    }
    //3.3 Depending on the lexicographic order of the strings, print:
    if(hacker1 > hacker2) {      
        console.log("The driver's name goes first.");
    }else if(hacker1 < hacker2){
        console.log("Yo, the navigator goes first definitely");
    }else{
        console.log("What?! You both have the same name?");
}
