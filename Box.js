class Box{
  constructor(x,y,width,height){
    var options={
			isStatic:false,
			restitution:0,
			friction:1.0,
			density:1

  }
  this.body=Bodies.rectangle(x,y,width,height, options)
    this.width=width;
    this.height=height;
		World.add(world, this.body);
		console.log(this.body);
  }
  display()
	{
			
					

			push();
			rectMode(CENTER);
			strokeWeight(3);
			fill(254,0,255)
			//imageMode(CENTER);
			//image(this.image, 0,0,25,25)
			rect(this.body.position.x,this.body.position.y,this.width,this.height);
			pop()
			
	}

};
