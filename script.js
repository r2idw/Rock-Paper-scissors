// Solution 1:-
function getComputerChoice() {
    listWords; 
    const computerRandom = Math.floor(Math.random() * listWords.length);
    return listWords[computerRandom];
};

// Score Varibales:-
let humanScore = 0;
let computerScore = 0;

// list Words
let listWords = ['Rock', 'Paper', 'Scissors'];

// Solution 2:-
function getHumanChocie() {
    const humanInput = prompt('Type: Rock, Paper, Scissors');   
    let humanInWord = humanInput.charAt(0).toUpperCase() + humanInput.slice(1);  
    return humanInWord;
};

// Solution 3:-
function playRound(humanChoice, computerChoice) {  
    if (humanChoice === 'Scissors' && computerChoice === "Paper"
    || humanChoice === 'Paper' && computerChoice === 'Rock' ||
    humanChoice === 'Rock' && computerChoice === 'Scissors'
   ) {    
    humanScore++;    
    console.log(`You win!\n${humanChoice} beats ${computerChoice}`);    
    console.log(`Your socre: ${humanScore}`);

   } else {
    if (humanChoice === computerChoice) {
        console.log('It\'s draw!');

    } else if (!listWords.includes(humanChoice)) {
        console.log(`${humanChoice} wrong choose!`);

    } else {     
        computerScore++;    
        console.log(`You lose!\n${computerChoice} beats ${humanChoice}`);
        console.log(`Computer socre: ${computerScore}`);
    }  
   }     
};

// Solution 4:-
function gamePlay() {
    humanScore;   
    computerScore; 
    let roundCounter = 0;
    
    while (roundCounter < 5) {
        roundCounter++;        
        alert(`Round: ${roundCounter}`);
        playRound(getHumanChocie(), getComputerChoice());
        if (roundCounter === 5) {
            console.log(`Total score:\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
        }             
    }      
};

gamePlay();



