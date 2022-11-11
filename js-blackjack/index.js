
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.querySelector('#sum-el');
let cardEl = document.getElementById('card-el')
let playerEl = document.getElementById('player-el');
let dealerEl =document.getElementById('dealer-el')
const stopBtn = document.getElementById('stop-btn')
let cards = []; //cards array
let dcards = [];
let sum = 0; // sum of the cards values.
let dealerCardsSum =0;

let players = [
    {
      name:"Sphe",
      chips:145
    },
    {
        name:"dealer"
    }
]


playerEl.textContent = players[0].name + ": R" + players[0].chips;

function getRandomCard(){   //create a random number
    let randomNumber = Math.floor(Math.random() * 13)+1;

    if (randomNumber === 1){
        return 11
    } else if (randomNumber >10){
        return 10
    } else{
        return randomNumber
    }
}


function startGame(){

    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    let dealerCard1 = getRandomCard();
    let dealerCard2 = getRandomCard();
    dealerCardsSum = dealerCard1 + dealerCard2;

    cards = [firstCard,secondCard]
    sum = firstCard + secondCard;

    dcards = [dealerCard1,dealerCard2]
    dealerCardsSum = dealerCard1+dealerCard2;
    
    renderGame();
    //dealerCards();
    
}

function renderGame(){
    cardEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i +=1)
    {
        cardEl.textContent += cards[i] + " ";

    }
  
      
    sumEl.textContent = "Sum: "+sum; //print out the sum of the cards
    dealerEl.textContent = "first dealer card: "+ dcards[0];
    
    if (sum <= 20){
        message = "Do you want to draw a new card? "
        
    }else if (sum === 21){
        message= "You got blackjack ";
        hasBlackJack = true;
        players[0].chips +=5; 
        dealerEl.textContent = "You won!"

    }else{
        message ="you are out of the game "
        isAlive =false;
        players[0].chips -=5;
    } 
    messageEl.textContent = message;
    playerEl.textContent = "Chips: "+ players[0].chips
        
}

function newCard(){

    if (isAlive === true && hasBlackJack===false){
        let newCardDraw = getRandomCard();
        sum = sum+newCardDraw;
        cards.push(newCardDraw);
        
        renderGame();
      
    }
     //  cardEl.textContent = "Card: " + firstCard + " " + secondCard + " " + newCardDraw;
}


function stopGame(){

    if (dealerCardsSum>sum && dealerCardsSum<22){
        players[0].chips -= 5;
        messageEl.textContent = "You Lost"

        
    }else if (sum>dealerCardsSum && sum<22){
        players[0].chips += 5
        messageEl.textContent = "You Won!"
    }else if(sum === dealerCardsSum){
        messageEl.textContent = "Draw";
    }

    
    
    dealerEl.textContent =`The cards: ${dcards} the Sum: ${dealerCardsSum}`;
    playerEl.textContent = "Chips: "+ players[0].chips
}

