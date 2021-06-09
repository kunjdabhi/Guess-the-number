'use strict';

const checkBtn = document.querySelector('#check');
const userValue = document.querySelector('#guess');
let randomNumber = Math.trunc(Math.random()*30)+1;
const currNumber = document.querySelector('.number')
const msg = document.querySelector('.msg');
const body = document.querySelector('body');
let score = document.querySelector('#score');
let numScore = Number(score.textContent);
const again = document.querySelector('.again-btn');
const highscore = document.querySelector('#highscore');


checkBtn.addEventListener('click' , ()=>{
    if(userValue.value == randomNumber){
        msg.textContent = "Congrats You Won :)"
        currNumber.textContent = `${randomNumber}`;
        body.style.backgroundColor = 'yellowgreen';
        let numhighscore = Number(highscore.textContent)
        if(numScore>numhighscore){
        highscore.textContent = numScore;
        }
        else{
            highscore.textContent = numhighscore;
        }
    }
        
    else if(userValue.value!==randomNumber){
        if(numScore>1){
            msg.textContent = userValue.value > randomNumber ? 'Too High:(' : 'Too low:('  ;
            numScore--;
            score.textContent = numScore;
            
            }else{
                msg.textContent = "You Lost :'("
                score.textContent = 0;
            }     
    }
    else if(!userValue.value){
        msg.textContent = 'Enter the Number';
    }
   
});

again.addEventListener('click' , ()=>{
    randomNumber = Math.trunc(Math.random()*30)+1;
    body.style.backgroundColor = 'rgba(0, 0, 0, 0.712)'
    msg.textContent = "Start Guessing......"
    userValue.value = '';
    numScore = 20;
    score.textContent = numScore;
    currNumber.textContent = '?';
    console.log(randomNumber);
})







