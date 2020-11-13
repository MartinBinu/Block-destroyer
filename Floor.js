class Floor{

    constructor(x,y,width){

        var options = {
            'isStatic': true
        }
  
        this.body = Bodies.rectangle(x - 20,y - 25,width + 10,10,options);
        this.width = width + 10;
        this.height = 10;
  
        World.add(world,this.body);
  
     }
  
     display(){
  
         push();
        fill("brown");
        stroke("brown");
        strokeWeight(7);
        rect(this.body.position.x - 100 + 20,this.body.position.y + 25,this.width - 5,3);
        pop();
  
     }
    
    }