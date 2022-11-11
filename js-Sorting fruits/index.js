let fruit = ["🍎", "🍊","🍎","🍎","🍊"];

let appleshelf = document.getElementById('apple-el');
let orangeshelf = document.getElementById('orange-el');

function fruitSort(){

    for (let i =0; i<fruit.length ; i++){

        if (fruit[i]==="🍎" ){

            appleshelf.textContent += "🍎"
        } else{
            orangeshelf.textContent +="🍊"
        }
    }
}

fruitSort()
