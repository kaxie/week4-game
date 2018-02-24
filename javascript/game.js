var in_game = false;
var score = $("#score");
var currentScore = 0;
var startingScore = $("#score");
var goalToReach = 0;
var wcount = $("#winCount");
var lcount = $("#lossCount");
var winN = 0;
var lossN = 0;
$("#start").click (function(){
    in_game = true;
    goalToReach= Math.floor(Math.random() * 101)+20;
    var goalDiv = $("#reach");
    goalDiv.text(goalToReach);
    currentScore = 0;
    startingScore.text(currentScore);
    var diaVal1= Math.floor(Math.random() * 13);
    var diaVal2= Math.floor(Math.random() * 13);
    var diaVal3= Math.floor(Math.random() * 13);
    var diaVal4= Math.floor(Math.random() * 13);
    $("#dia1").data("val",diaVal1);
    $("#dia2").data("val",diaVal2);
    $("#dia3").data("val",diaVal3);
    $("#dia4").data("val",diaVal4);    
});

$("#dia1").click(function(){

    if (!in_game){  
        alert("press start button");
        return;
    }
    
    currentScore = currentScore+ $(this).data("val");
    startingScore.text(currentScore);
    if(currentScore==goalToReach){
        winN++;
        wcount.text(winN);
        alert("you won!");
        currentScore = 0;
        startingScore.text(currentScore);
    }
    if (currentScore>goalToReach){
        lossN++;
        lcount.text(lossN);
        in_game = false;
        currentScore = 0;
        startingScore.text(currentScore);
        return;
    }
});
$("#dia2").click(function(){
    if (!in_game){
        alert("press start button");
        return;
    }
    currentScore = currentScore+ $(this).data("val");
    startingScore.text(currentScore);
    if(currentScore==goalToReach){
        winN++;
        wcount.text(winN);
        alert("you won!");
        currentScore = 0;
        startingScore.text(currentScore);
    }
    if (currentScore>goalToReach){
        lossN++;
        lcount.text(lossN);
        in_game = false;
        currentScore = 0;
        startingScore.text(currentScore);
        return;
    }
});
$("#dia3").click(function(){
    if (!in_game){
        alert("press start button");
        return;
    }
    currentScore = currentScore+ $(this).data("val");
    startingScore.text(currentScore);
    if(currentScore==goalToReach){
        alert("you won!");
        winN++;
        wcount.text(winN);
        currentScore = 0;
        startingScore.text(currentScore);
    }
    if (currentScore>goalToReach){
        lossN++;
        lcount.text(lossN);
        in_game = false;
        currentScore = 0;
        startingScore.text(currentScore);
        return;
    }
});
$("#dia4").click(function(){
    if (!in_game){
        alert("press start button");
        return;
    }
    currentScore = currentScore+ $(this).data("val");
    startingScore.text(currentScore);
    if(currentScore==goalToReach){
        alert("you won!");
        winN++;
        wcount.text(winN);
        currentScore = 0;
        startingScore.text(currentScore);
    }
    if (currentScore>goalToReach){
        lossN++;
        lcount.text(lossN);
        in_game = false;
        currentScore = 0;
        startingScore.text(currentScore);
        return;
    }
});