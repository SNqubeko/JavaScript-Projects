const newYears = '1 Jan 2023';
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    let diff = newYearsDate-currentDate;
   
    const days = (newYearsDate-currentDate)/(86400000)

    let hoursDiff = days-Math.floor(days);

    const hours = hoursDiff*24;

    let minutesDiff = hours-Math.floor(hours);
    const minutes = minutesDiff *60;

    let secondsDiff = minutes-Math.floor(minutes);
    const seconds = secondsDiff*60
    console.log(days, hours, minutes, seconds)
    
    daysEl.innerHTML = Math.floor(days);
    hoursEl.innerHTML = formatTime(Math.floor(hours));
    minutesEl.innerHTML = formartTime(Math.floor(minutes));
    secondsEl.innerHTML = formatTime(Math.floor(seconds));
}

function formatTime(time){
    if (time<10){
        return (`0${time}`);
    }else{
        return time
    }
}

countdown();

setInterval(countdown,1000); //calls the countdown function every 1 second or 1000 miliseconds.

