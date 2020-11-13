class Polygon{

   constructor(x,y){

      var options = {

          'friction': 2,
          'density': 12
          
      }
   
      this.body = Bodies.circle(x,y,25,options);
      this.radius = 25;
      this.image = loadImage("hexagon.png");     

      World.add(world,this.body);

   }

   display(){
       
       push();
       translate(this.body.position.x, this.body.position.y);
       rotate(this.body.angle);
       image(this.image,0,0,70,55);
       pop();

   }

}