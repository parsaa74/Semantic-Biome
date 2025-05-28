function Word(word, x, y, mysize, destx, desty){
	this.word = word;
	this.x = x;
	this.y = y;
	this.mysize = mysize;
	this.destx = destx;
	this.desty = desty;
	this.xvel = 0;
	this.yvel= 0;
	
	this.display = function() {				
		textAlign(CENTER);
		fill(0);
		textSize(this.mysize);
		text(word, this.x, this.y);
	}
	
	this.move = function(){
		this.xvel+=(this.destx-this.x)/1000; 
		this.xvel=.99*this.xvel;
		this.yvel+=(this.desty-this.y)/1000; 
		this.yvel=.99*this.yvel;
		this.y=this.y+this.yvel;
		this.x=this.x+this.xvel;
	}
}