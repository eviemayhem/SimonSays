var buttonColors = ["red", "blue", "green", "yellow"];
randomChosenColor = buttonColors[nextSequence()];
var gamePattern = [];

gamePattern.push(randomChosenColor);


function nextSequence(){
    var randomNumber = Math.floor(Math.random()* 3) + 1;
    return (randomNumber);
    
}

