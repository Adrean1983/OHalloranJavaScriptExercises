
// Exericse One:        
/*
Prompt the user for a number. Write a for loop that will add all of the numbers leading
up to that number, and inclusive of that number together and log the result to the console.
(ex: A user enters 5, and the output would be the result of 1 + 2 + 3 + 4 + 5.)
Prompt: ‘Enter A Number!’ > 5
Output: 15 
*/
function exercise1() {
    var userInput = "Enter A Number!"
    var total = 0;

    var num = parseInt(prompt(userInput, 1));

    for(i = 1; i<=num; i++) {
        total += i;
    }
    console.log(total);
}


// Exerce Two:

/*
Write a do..while loop that builds a string with multiple inputs from a user. Start by
prompting the user if they want to play. When the user answers yes, prompt the user to
enter a word. After the user enters a word, prompt the user if they would like to play again.
If no, console log their word. If yes, prompt the user for another word and add that word to
the original string, then prompt if they want to play again. Continue to add words to the
string every time the user answers yes and enters a word until the user indicates that he or
she does not want to play anymore.
Prompt: ‘Do you want to play?’ > 'yes' > Prompt: ‘Enter a word.’ >
'dog' > Prompt: ‘Do you want to play again?’ > 'yes' > Prompt: ‘Enter
a word.' > 'cat' > Prompt: ‘Do you want to play again?’ > 'no'
Output: 'dog cat'
*/

function exercise2 () {
    var question = "Do you want to play?";
    var output = "Output: ";
    var question2 = "Enter a word.";
    var question3 = "Do you want to play again?";

    var response = prompt(question, "Yes or No?").toUpperCase();
    if (response == "YES") {
        do {
            output += prompt(question2);
            output += " "
            var playAgain = prompt(question3).toUpperCase();
        }while(playAgain == "YES");
        alert(output);
        console.log(output);
    }
}


// Exercise Three:

/*
Write a while loop that will prompt the user if they would like to print their name. If the
answer is yes, log their name to the console then prompt them if they would like to print
their name again. If yes, log their name to the console again but this time add an
exclamation point at the end of the string. Continue to add an exclamation point for every
time the user agrees to wanting to print his or her name.

Prompt: ‘Would you like to print your name?’ > 'yes'
Output: 'Hello. My name is Adam'
Prompt: ‘Would you like to print this again?’ > 'yes'
Output: ‘Hello. My name is Adam!'
Prompt: ‘Would you like to print this again?’ > 'yes'
Output: 'Hello. My name is Adam!!'
Prompt: ‘Would you like to print this again?’ > 'no'
*/

function exercise3() {
    var ques1 = "Would you like to print your name?";
    var ans1 = prompt(ques1, "Yes or No?").toUpperCase();
    if(ans1 == "YES") {    
        var name = prompt("Enter your name.");
        var again = "YES";
        var point = "";
        while (again == "YES") {
            console.log('Hello. My name is ' + name + point);
            again = prompt("Would you like to print this again?", "Yes/No").toUpperCase();
            point += "!";
        }
    }
}

























