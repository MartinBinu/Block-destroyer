class Slingshot{

constructor(bodyA,pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length: 20
    }

    this.slingshot = Constraint.create(options);
    this.pointB = pointB;

    World.add(world,this.slingshot);

}

fly(){

   this.slingshot.bodyA = null;

    }
 

    display(){

        if(this.slingshot.bodyA){
  
         var pointA = this.slingshot.bodyA.position;
         var pointB = this.pointB;
  
         stroke(11,225,237);
         strokeWeight(4);
  
         if(pointA.x < 190) {
            strokeWeight(7);
            line(pointA.x + 15, pointA.y + 10, pointB.x - 10, pointB.y);
            line(pointA.x + 15, pointA.y + 10, pointB.x - 30, pointB.y);
        }
        else{
            strokeWeight(3);
            line(pointA.x + 15, pointA.y + 10, pointB.x - 10, pointB.y);
            line(pointA.x + 15, pointA.y + 10, pointB.x - 30, pointB.y);
        };
  
        }
  
      }
  
      attach(){
         this.slingshot.bodyA = polygon.body;
      }
   
   };