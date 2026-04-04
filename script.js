const rpsUI = document.querySelector('.rps-ui');
const selectionContainer = document.querySelector('.selection-container');
const dashbord = document.querySelector('.dashbord');
const rock = document.querySelector('#rock');


const selectionArr = ['Rock', 'Paper', 'Scissors'];
console.log(selectionArr[1])

// Solution 1:-
let roundCounter = 1;
let scoreCounter = 0;
const roundElem = document.createElement('span');
roundElem.textContent = `Round: ${roundCounter}`;
roundElem.classList.add('roundElem');
selectionContainer.appendChild(roundElem);

function playRound(e) {

    roundElem.textContent = `Round: ${roundCounter}`;
    selectionContainer.appendChild(roundElem);
    const total = document.querySelector('#total');
    const ranChoice =  Math.floor(Math.random() * selectionArr.length);    
    const target = e.target;
    const urScore = document.querySelector('.dashbord #ur-score');
    const compScore = document.querySelector('.dashbord #comp-score');


    if (roundCounter === 5) {       
        rpsUI.innerHTML = '<p id="game-over">Game over!</p>';                        
        
    } else {
        
        urScore.textContent = `Your score; ${scoreCounter}`;
        compScore.textContent = `Computer score; ${scoreCounter}`;
            
        
        if (target.value === 'Rock' && selectionArr[ranChoice] === 'Scissors'
            || target.value === 'Paper' && selectionArr[ranChoice] === 'Rock'
            || target.value === 'Scissors' && selectionArr[ranChoice] === 'Paper'
        )   
            {   scoreCounter++;
                urScore.textContent = `Your score; ${scoreCounter}`;            
                result.innerHTML = `<br>You won! ${target.value} beats ${selectionArr[ranChoice]}`;
                
            } else {
                if (target.value === selectionArr[ranChoice]) {                
                    result.innerHTML = `<br>It's tie!`;
                
                } else {             
                    scoreCounter++;
                    compScore.textContent = `Computer score; ${scoreCounter}`;              
                    result.innerHTML = `<br>You lost! ${selectionArr[ranChoice]} beats ${target.value}`;
                }  
            }             

    }
    roundCounter++;    
    
    // roundElem.textContent = `Round: ${roundCounter}`;
    // selectionContainer.appendChild(roundElem);
    // const ranChoice =  Math.floor(Math.random() * selectionArr.length);    
    // const target = e.target;
    // const urScore = document.querySelector('.dashbord #ur-score');
    // const compScore = document.querySelector('.dashbord #comp-score');

    // urScore.textContent = `Your score; ${scoreCounter}`;
    // compScore.textContent = `Computer score; ${scoreCounter}`;
        
    
    // if (target.value === 'Rock' && selectionArr[ranChoice] === 'Scissors'
    //     || target.value === 'Paper' && selectionArr[ranChoice] === 'Rock'
    //     || target.value === 'Scissors' && selectionArr[ranChoice] === 'Paper'
    // )   
    //     {   scoreCounter++;
    //         urScore.textContent = `Your score; ${scoreCounter}`;            
    //         result.innerHTML = `<br>You won! ${target.value} beats ${selectionArr[ranChoice]}`;
            
    //     } else {
    //         if (target.value === selectionArr[ranChoice]) {                
    //             result.innerHTML = `<br>It's tie!`;
            
    //         } else {             
    //             scoreCounter++;
    //             compScore.textContent = `Computer score; ${scoreCounter}`;              
    //             result.innerHTML = `<br>You lost! ${selectionArr[ranChoice]} beats ${target.value}`;
    //         }  
    //     }                          
               
};

// Solution 2:-
const btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', playRound));


// Solution 2:-





