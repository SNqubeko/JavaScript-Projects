const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
const btns = document.querySelectorAll('.btn')
const ulEl = document.getElementById('ul-el')
const today = new Date();
let myInterval;
let sec = 0;
let min =0;
let isPaused = false;
let timeLapse=0;

//buttom check and event listener
btns.forEach((btn)=>{
    btn.addEventListener('click', (event)=>{
        const whichBtn = event.currentTarget.classList;
       
        if (whichBtn.contains('start-btn')){
            if (!isPaused){
                myInterval = setInterval(countUp, 1000);
            }
            
        }else if (whichBtn.contains('stop-btn')){
            //save current value time
            let secSave = sec;
            let minSave = min;

            isPaused =true;
            clearInterval(myInterval);

            secondsEl.innerHTML = format(secSave);
            minutesEl.innerHTML = format(minSave);

            isPaused=false

        }else if (whichBtn.contains('reset-btn')){
            
            clearInterval(myInterval);
            sec=0;
            min=0;
        
            display();
            timeLapse=0;    
            ulEl.innerHTML = '';   
            isPaused =false;  
        }else{
            timeLapse+=1;
            renderTimeLapse();
            isPaused =false;   
        } 
    })
})

//get time function
function countUp(){
    sec +=1;
    
    if (sec===60){
        sec=0;
        min +=1
    }
    display()
}

//dispaly function
function display(){
    secondsEl.innerHTML = format(sec);
    minutesEl.innerHTML = format(min);
}

//format time to 00
function format(time){
    if (time<10){
        return (`0${time}`);
    }
    else return time
}

//count up function
function getTime(){
    
}

//renderTimeLapse function

function renderTimeLapse(){
    ulEl.innerHTML += `<li>Lap ${timeLapse}: ${min}:${sec} </li>`
}