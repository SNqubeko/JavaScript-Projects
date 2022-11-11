
const quizData=
[
    {
    question: "How old is Florin?",
    a:'10', 
    b:'17',
    c:'26',
    d:'110',
    correct:'c'
},
{
    question: "What is the most used programming language?",
    a:'Java', 
    b:'C',
    c:'Python',
    d:'Javascript',
    correct:'d'
},
{
    question: "Who is the president of US?",
    a:'Florin Pop', 
    b:'Donald Trump',
    c:'Ivan Saldano',
    d:'Mihai Andrei',
    correct:'b'
},
{
    question: 'what does HTML stand for?',
    a:'Hypertext Markup Language',
    b:'Cascading Style Sheet',
    c:'Jason Object Notation',
    d:'HTML',
    correct:'a'
},
{
    question: 'what year was Javascript launched?',
    a:'1996',
    b:'1995',
    c:'1994',
    d:'none of the above',
    correct:'d'
}
]

let currentQuestion = 0;
let score = 0;

const questionEl= document.getElementById('question-el');
const answerA=document.getElementById('answer-a');
const answerB=document.getElementById('answer-b');
const answerC=document.getElementById('answer-c');
const answerD=document.getElementById('answer-d');
const submitBtn = document.getElementById('submit-btn');
const quizEl = document.getElementById('quiz-el');

loadQuiz();

function loadQuiz(){

    
    questionEl.innerHTML=quizData[currentQuestion].question;
    answerA.innerHTML=quizData[currentQuestion].a;
    answerB.innerHTML=quizData[currentQuestion].b;
    answerC.innerHTML=quizData[currentQuestion].c;
    answerD.innerHTML=quizData[currentQuestion].d;
}

submitBtn.addEventListener('click', function(){
    //get the id of the checked button.
    console.log(currentQuestion)
    let chosen = document.querySelector('input[name="answer"]:checked').id;

    if (currentQuestion < quizData.length){
        
        if (chosen===quizData[currentQuestion].correct){
            currentQuestion++;
            if (currentQuestion<quizData.length){
                loadQuiz();
            }
            score++;
            
        }else{
            currentQuestion++
            //loadQuiz();
        }
        document.querySelector('input[name="answer"]:checked').checked =false

    }else{
        quizEl.innerHTML=`<h2>You scored ${score} points out of ${quizData.length}</h2>`;
        
    }

    
    
})


//     if (chosen ===quizData[currentQuestion].correct){
        



        
//         if (currentQuestion < quizData.length-1){
//             currentQuestion++
//             loadQuiz()
//             score++
//         }else{
//             currentQuestion=0;
//             loadQuiz();
//             quizEl.innerHTML=`<h2> You scored ${score} of points out of ${quizData.length}</h2>`;
//         }
        
//         document.querySelector('input[name="answer"]:checked').checked =false
//     }else{

//         if (currentQuestion < quizData.length-1){
//             currentQuestion++
//             loadQuiz()
            
//         }else{
//             currentQuestion=0;
//             loadQuiz();
//             quizEl.innerHTML=`<h2> You score ${score} of points out of ${quizData.length}</h2>`;
//         }
//         document.querySelector('input[name="answer"]:checked').checked =false
//     }

//     //if checked, check if its the correct answer
// })



