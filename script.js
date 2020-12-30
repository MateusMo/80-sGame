'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click',function (){
  const guess =Number(document.querySelector('.guess').value);
  //console.log(typeof guess);
  //when there is no input
  if(!guess){
    document.querySelector('.message').textContent = 'No number!'
  
    //when player wins
  } else if(guess === secretNumber){
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    
    highScore = score + highScore;
    document.querySelector('.highscore').textContent = highScore;
    
  }  
    //when guess is too high  
   else if(guess > secretNumber){
    if(score>0){document.querySelector('.message').textContent = 'Too High';
    score --;
    document.querySelector('.score').textContent = score;
  } else {
      document.querySelector('.message').textContent = 'You lost the game!'
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }

    //when guess is too low
  } else if(guess < secretNumber){
    if(score>0){document.querySelector('.message').textContent = 'Too Low';
    score --;
    document.querySelector('.score').textContent = score;
  } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }    
  }

  //Function to the button again
  document.querySelector('.again').addEventListener('click',function(){
    
    score = 20; 

    secretNumber = Math.trunc(Math.random()*20)+1;

    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = ''; 
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.backgroundColor = '#FFFFFF';
    document.querySelector('.message').textContent = 'Start guessing...';
 
  });

});

