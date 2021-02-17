class Contestant{

constructor(){

  this.name = null;
  this.answer = null;
  this.index = null;

}

 getCount(){

 var ContestentCount = database.ref("ContestantCount");
 ContestentCount.on("value",function(data){

  contestantCount = data.val();

 })

 }

 updateCount(count){

 database.ref('/').set({

  ContestantCount : count 

 })

 }

 update(){

 var contestentIndex = "contestants/player"+ this.index;

 database.ref(contestentIndex).set({

  name:this.name,
  answer:this.answer

 })


 }

}