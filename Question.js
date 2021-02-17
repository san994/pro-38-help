class Question{


constructor(){

this.input = createInput("name");
this.button = createButton("save");
this.title = createElement("h2")
this.greeting = createElement("h3");
this.question = createElement("h3")
this.solution1 = createElement("h3")
this.solution2 = createElement("h3")
this.solution3 = createElement("h3")
this.solution4 = createElement("h3")

}


display(){

this.title.html("Welcom to my Quiz game");
this.title.position(300,50)

this.input.position(150,300);
this.button.position(250,320);

this.question.html("QUSTION:- wht starts and ends with an letter'E'but has one letter");
this.question.position(200,100)

this.solution1.html("Example");
this.solution1.position(250,140);

this.solution2.html("Everyone");
this.solution2.position(250,170);

this.solution3.html("Envelope");
this.solution3.position(250,200);

this.solution4.html("Estimate");
this.solution4.position(250,230);

this.button.mousePressed(()=>{

this.input.hide();
this.button.hide();
      
contestantCount+=1

contestent.name = this.input.value();

contestent.index = contestantCount
contestent.update();

contestent.updateCount(contestantCount);



 })

}

}
