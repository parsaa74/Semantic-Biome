var words = [];
var pos;
var howbig;
var index=999;

function preload(){
		table = loadTable("WordFreq.csv", "header");
}

function setup() {
		createCanvas(windowWidth, windowHeight);
		background(0);
		noStroke();
}

function draw(){
		background(245);
		fill(255);
		textAlign(CENTER);
		textSize(550);
		text(index+1,width/2,height/1.2);
		fill(0);
		textSize(30);
		text("nouns", width/4, 25);
		text("verbs", 3*width/4, 25);
		text("adjectives", width/4, height/2+25);
		text("other", 3*width/4, height/2+25);
	
		for(var i=0; i<words.length; i++){
			words[i].display();	
			words[i].move();
		}
		if(words.length>400) {
			words.splice(0,1);
		}	
}

function mouseMoved() {
			if(table && index>-1){
		  word = table.getString(index, 3);
			pos = table.getString(index, 4);
			howbig = int(table.getString(index, 1));
			howbig = Math.cbrt(howbig)/3;
			fill(0);
				if(pos=="noun"){
					words.push(new Word(word, mouseX, mouseY, howbig, width/4+random(-100,100), 150+random(-100,100)));
				} else if(pos=="adjective") {
					words.push(new Word(word, mouseX, mouseY, howbig, width/4+random(-100,100), 450+random(-100,100)));
				} else if(pos=="verb") {
					words.push(new Word(word, mouseX, mouseY, howbig, 3*width/4+random(-100,100), 150+random(-100,100)));
				} else {
						words.push(new Word(word, mouseX, mouseY, howbig, 3*width/4+random(-100,100), 450+random(-100,100)));
				}
			index-=1;
			}
}