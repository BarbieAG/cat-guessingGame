let questionNumber = 0


function startGame(){
    let startButton = document.querySelector("#startButton")
    let meow = document.querySelector('#startMeow')
    console.log("start!")
    startButton.hidden = true;
    meow.play();
    setTimeout(nextQuestion, 2000);
    
}

function gameOver(){
        let gameover = document.querySelector("#gameOverscreen")
        gameover.hidden = false;
        console.log("you die :(")
        
}

function Win(){
    let winscreen = document.querySelector("completedScreen")
    winscreen.hidden = false
}
function restart(){
    startButton.hidden = false;
    gameOverscreen.hidden = true;
    heartNumber.textContent = 3;
    questionNumber = 0;
}
   

function disableButtons(question){
    let buttons = question.querySelectorAll('button');
    for (let button of buttons){
        button.disabled = true;
    }
     
}



function nextQuestion(){
    let questions = document.querySelectorAll('.question');
    questionNumber++;
    questions.forEach(function (question,index){
        console.log(index);
        if (index == questionNumber){
            question.hidden = false;
        }else{
            question.hidden = true;
        }
       
    });



}



function check(button){
    let question = button.closest('.question')
    let right = document.querySelector("#right")
    let wrong = document.querySelector('#wrong')
    
    console.log(button)

    if(button.classList.contains("correct")){
        
        button.style.background = "green";
        button.style.color = "white"
        disableButtons(question);
        right.play();
        setTimeout(nextQuestion, 2000);
        console.log(questionNumber);
        
        
        

    }else if(heartNumber.textContent == 0){
        gameOver();
        question.hidden = true;

    }

    else if (questionNumber == 12){
        Win();
        question.hidden = true;
    }
    else{ 
        wrong.play();
        button.style.background = "red";
        button.style.color = "white"
        heartNumber.textContent--;
       

    }
    

    console.log(questionNumber)


}

