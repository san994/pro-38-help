class Quiz{


constructor(){



}

getState(){

var gameState = database.ref("gameState");
 gameState.on("value",function(data){

  gamest = data.val();

 })


}

updateState(state){

database.ref('/').update({

 gameState : state

})

}

start(){

contestent = new Contestant();
contestent.getCount();
question = new Question();
question.display();

}


}
