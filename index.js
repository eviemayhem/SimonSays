var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0

// This initiates the gamePattern.
$(document).keydown(function() {
    if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
    }
})

// This creates an array from the user's button input.
$(".btn").click(function() {

    var userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);
    
    
    playSound(userChosenColor);
    
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
    
})


// This chooses a random number between 1-4 and then pushes it into the game pattern Array.

function nextSequence() {
    userClickedPattern = [];
   
    
    $("#level-title").text("Level " + ++level);

     var randomNumber = Math.floor(Math.random()* 4);
     var randomChosenColor = buttonColors[randomNumber];
     gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
 playSound(randomChosenColor);
    
}

// This code checks the answer against the gamePattern.

function checkAnswer(currentLevel){
if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log ("Success");

    if (userClickedPattern.length === gamePattern.length){

    
    setTimeout(function() {
        nextSequence();
    }, 1000);
}

    
}
else {
    console.log ("wrong");
    $("body").addClass('game-over');
    $("h1").text("GAME OVER. Press Any Key to Restart.");
    
    setTimeout(function () {
        $('body').removeClass('game-over');
      },200);
      
    startOver();
}
}


// This controls the audio played on button activation and game completion.
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
audio.play();

}
//  Ends Game
function gameOver(name){
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();

}

// starts game over
function startOver(){
            level = 0;
            gamePattern = [];
             started = false;
        
    
}

// This controls button Animation.
function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    },100);
    };
