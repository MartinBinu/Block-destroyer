class BlueBox{

    constructor(x,y){
    
       var options = {

           'friction': 12,
           'density': 1

       }


       this.body = Bodies.rectangle(x,y,55,55,options);
       this.width = 55;
       this.height = 55;
       this.Visiblity = 255;

       World.add(world,this.body);

    }
    
    
    display(){

      if(this.body.speed < 4){
      push();
      fill(31, 25, 212);
      stroke(250, 18, 82);
      strokeWeight(3);
      rect(this.body.position.x,this.body.position.y,52,52);
      pop();
      }
      else{
     World.remove(world, this.body);   
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     //rect(this.body.position.x,this.body.position.y,52,52);
     pop();

    }

    }
    score(){
        if(this.Visiblity < 0 && this.Visiblity < -1005){
            score = score + 1
        }
      }
    }