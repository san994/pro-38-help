var canvas;

var database;

var contestantCount = 0;

var gameState;

var allPlayers,question,quiz,contestent;

function setup(){
 
  canvas = createCanvas(850,400);
  database = firebase.database();

 quiz = new Quiz();
 quiz.getState();
 quiz.start();
  
}

function draw(){
  background("pink");

  

}
