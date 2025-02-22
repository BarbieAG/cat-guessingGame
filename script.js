let questionNumber = 0

function nextQuestion(){
    let questions = document.querySelectorAll(".question");
    
    questions.forEach(function (question,index){
        console.log(index);
        if (index == questionNumber){
            question.hidden = false;
        }

        else if (questionNumber > 12){
            completedScreen.hidden = false;
            question.hidden = true;
            win.play();
        }
        
        else{
            question.hidden = true;
        }
       
    });



}

function reference(){
    start.hidden = true;
    referencespage.hidden = false;
    
}

function goBack(){
    referencespage.hidden = true;

    start.hidden = false;
    
}


function startGame(){
    let meow = document.querySelector("#startMeow")

    let Start = document.querySelector("#start")
    console.log("start!")
    Start.hidden = true;
    meow.play();
    setTimeout(nextQuestion, 2000);
    
}

function gameOver(){
        let gameoverSound = document.querySelector("#gameOverSound")
        let gameover = document.querySelector("#gameOverscreen")
        gameover.hidden = false;
        gameoverSound.play();
        console.log("you die :(")
        
}


function disableButtons(question){
    let buttons = question.querySelectorAll('button');
    for (let button of buttons){
        button.disabled = true;
    }
     
}



function check(button){
    let question = button.closest('.question')
    let right = document.querySelector("#right")
    let wrong = document.querySelector('#wrong')
    
    console.log(button)

    if(button.classList.contains("correct")){
        questionNumber++;
        button.style.background = "green";
        button.style.color = "white"
        disableButtons(question);
        right.play();
        setTimeout(nextQuestion, 2000);
        console.log(questionNumber);
        question.hidden
        
        
        

    }else if(heartNumber.textContent == 0){
        gameOver();
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

