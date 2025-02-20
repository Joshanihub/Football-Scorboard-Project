let scoreId = document.getElementById('score-id');
let scoreIdaway = document.getElementById('score-idaway');
let scoreIdreset = document.getElementById('score-idreset');
let scoreIdresetaway = document.getElementById('score-idresetaway');
let score = 0;
let scoreAway = 0;
let scoreReset = 0; 
function addone(){
 score+=1;
 scoreId.textContent = score;    
}
function addtwo(){
    score+=2;
    scoreId.textContent = score;
}
function addthree(){
    score+=3;
    scoreId.textContent = score;
}
function addoneaway(){
    scoreAway+=1;
    scoreIdaway.textContent = scoreAway;
   }
   function addtwoaway(){
       scoreAway+=2;
       scoreIdaway.textContent = scoreAway;
   }
   function addthreeaway(){
       scoreAway+=3;
       scoreIdaway.textContent = scoreAway;
   }
   function reset(){
       score = 0;
       scoreId.textContent = score;
       scoreAway = 0;
       scoreIdaway.textContent = scoreAway;
   }   


