function Cell(i, j){
	this.i = i;
	this.j = j;
  this.walls = [true, true, true, true] //up right bot left
  this.visited = false;
  this.isPosition = false;

  this.removeWall = function(dir){

    this.walls[dir] = false;
    console.log(this.walls);
  }

	this.show = function(){
    var x = this.i*w;
    var y = this.j*w;

    stroke(255);
    if(this.walls[0]){
      line(x,y,x+w,y)
    }
    if(this.walls[1]){
      line(x+w,y,x+w,y+w)
    }
    if(this.walls[2]){
      line(x+w,y+w,x,y+w)
    }
    if(this.walls[3]){
      line(x,y+w,x,y)
    }

    if(this.visited){
      noStroke();
      fill(83, 128, 95);
      rect(x,y,w,w);
    }
    if(this.isPosition){
      noStroke();
      fill(131, 156, 84);
      rect(x,y,w,w);
    }
	}


  this.checkAround = function(){
    var Around = []; //array with evry neibourg unvisited

    var top = grid[index(i, j - 1)];
    
    var right = grid[index(i + 1, j)];
    
    var bot = grid[index(i, j + 1)];
    
    var left = grid[index(i - 1, j)];
   

    if(top && !top.visited){ //one up
      Around.push(top);
    }
    if(right && !right.visited){ //one right
      Around.push(right);
    }
    if(bot && !bot.visited){ //one bot
      Around.push(bot);
    }
    if(left && !left.visited){ // one left
      Around.push(left);
    }


    if(Around.length > 0){
      var r = floor(random(0, Around.length));
      return Around[r];
    }
    else 
      return undefined;
  }



}