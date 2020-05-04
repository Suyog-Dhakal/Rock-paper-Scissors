let userScore=0;
let computerScore=0;
const userScore_span = document.getElementById("user-score"); 
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r','p','s'];
    //math is builtin object and random() is method that exists in math
    const randomNumber = Math.floor(Math.random()*3); //we multiplied by 3 to get random number between 0 to 3
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "r")return "Rock";
    if(letter === "p")return "Paper";
    return "Scissors";
}

function win(userChoice , computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!";

    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 300)
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = convertToWord(computerChoice) + " beats " + convertToWord(userChoice) + ". You lost!";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 300)
}

function draw(userChoice , computerChoice) {
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = convertToWord(userChoice) + " equals " + convertToWord(computerChoice) + ".It's a Draw!";
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('grey-glow'), 300)

}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
                
    }
}


function main() {
    rock_div.addEventListener('click',function() { game("r"); } )

    paper_div.addEventListener('click',function() { game("p"); } )

    scissors_div.addEventListener('click',function() { game("s"); } )

}
main();
