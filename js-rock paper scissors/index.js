const cpEl = document.getElementById("cp-el");
const userEL = document.getElementById("user-el");
const resultEl = document.getElementById("result-el");

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissor-btn");

const choices = ["rock", "paper", "scissor"];
let cpChoice = "";
let userChoice = "";

function startGame(){
    let randomChoice = Math.floor(Math.random()*3);
    cpChoice = choices[randomChoice];
    cpEl.textContent = cpChoice;
    
}

rockBtn.addEventListener('click', function(){
    startGame()   
    userEL.textContent = "rock"
    userChoice = "rock";
    getChoice("paper")
    
})

paperBtn.addEventListener('click', function(){
    startGame()   
    userEL.textContent = "paper"
    userChoice = "paper";
    getChoice("scissor")
})

scissorBtn.addEventListener('click', function(){
    startGame()   
    userEL.textContent = "scissor"
    userChoice = "scissor";
    getChoice("rock")
})

function getChoice(choice1){
    if (userChoice === cpChoice){
        resultEl.textContent = "Draw"

    }else if (cpChoice ===choice1){
        resultEl.textContent = "You Lost"
    }else{
        resultEl.textContent = "You won"
    }
}
