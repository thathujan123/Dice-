let score1 = 0;
let score2 = 0;
let score3 = 0;
const winningScore = 20;  

document.getElementById('rollDice').addEventListener('click', function () {
  
    if (score1 >= winningScore || score2 >= winningScore || score3 >= winningScore) {
      return; 
    }  

    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const dice3 = Math.floor(Math.random() * 6) + 1;    

    score1 += dice1;
    score2 += dice2;
    score3 += dice3;  

    document.getElementById('dice1').textContent = dice1;
    document.getElementById('dice2').textContent = dice2;
    document.getElementById('dice3').textContent = dice3;
    document.getElementById('score1').textContent = `Score: ${score1}`;
    document.getElementById('score2').textContent = `Score: ${score2}`;
    document.getElementById('score3').textContent = `Score: ${score3}`;  



    if (score1 >= winningScore) {
       alert('Player 1 Wins!');
    } else if (score2 >= winningScore) {
        alert('Player 2 Wins!');
    } else if (score3 >= winningScore) {
        alert('Player 3 Wins!');
    }
});

document.getElementById('resetGame').addEventListener('click', function () {
    
    score1 = 0;
    score2 = 0;
    score3 = 0;  
    
    
    document.getElementById('dice1').textContent = '0';
    document.getElementById('dice2').textContent = '0';
    document.getElementById('dice3').textContent = '0';
    document.getElementById('score1').textContent = `Score: ${score1}`;
    document.getElementById('score2').textContent = `Score: ${score2}`;
    document.getElementById('score3').textContent = `Score: ${score3}`;
    
});
