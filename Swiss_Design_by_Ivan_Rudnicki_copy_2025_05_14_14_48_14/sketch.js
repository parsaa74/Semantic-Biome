// For the #WCCChallenge, theme: "Swiss Design"
// This was an interesting challenge!
// I tried to draw inspiration from some colors, angles, and motifs found online
// and ended with this tangled mess of shapes and letters!

let cols = ['cyan', 'magenta', 'yellow', 'red', 'green', 'blue'];
let str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
let started = false;
let matrix = [];
let grid = 12;

function preload(){
  font = loadFont('HelveticaforTarget-Bold.ttf');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  makeMatrix();
}

function mousePressed(){
  grid = 2*floor(random(5, 25));
  if(started == false) fullscreen(true);
   else makeMatrix();
}

function draw(){
  for(let i = 0; i < floor(grid / 3); i++){
	if (matrix.length > 0) fillSquare();
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  started = true;
  makeMatrix();
}

function makeMatrix(){
  blendMode(BLEND);
  background(0)
  matrix = [];
  let i = 0;
  
  for(let row = 1; row < grid - 1; row++){
	for(let col = 2; col < 1.5*(width/height)*grid-2; col++){
		let y = row*height/grid;
		let x = col*height/(grid*1.5);
		let r = false;
		if(floor(random(4)) == 0) r = true;
		  matrix.push({
			x: x,
			y: y,
			chr: str.substring(i, i+1),
			r: r
		  });
		  i = (i+1)%str.length;
		}
	}
}

function fillSquare(){
  textSize(2*height/grid);
  textFont(font);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  blendMode(DIFFERENCE);
  noStroke();
  let i = floor(random(matrix.length));
  push();
  translate(matrix[i].x, matrix[i].y);
  fill(random(cols));
  if(i % 4 == 0) rotate(-QUARTER_PI);
	else if (i % 4 == 1) rotate(QUARTER_PI);
	if(matrix[i].r){
	  push();
	  if(floor(random(2))==0) rotate(HALF_PI);
	  rect(0, 0.25*height/grid, height/grid, 1.5*height/grid);
	  pop();
	}
	fill(random(cols));
	text(matrix[i].chr, 0, 0);
	pop();
	matrix.splice(i, 1);
}