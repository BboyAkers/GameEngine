kernel = new Kernel();
canvas = document.getElementById("canvas");

//defining canvas window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Getting Drawing 2d context
context = canvas.getContext("2d");
context.width = window.innerWidth;
context.height = window.innerHeight;	

//add images here
var sp_null = loadImage("img/32x.png");
var sp_tree = loadImage("img/tree.png");
var sp_grass = loadImage("img/grass.png");

//Defining our player Object
var ob_player = new Entity();
ob_player.image = sp_null;
ob_player.position.set (64, 64);

//placing the grass
// var ob_grass = new Entity();
// ob_grass.image = sp_grass;
// ob_grass.position.set(256,256);

ob_player.update = function(){
	
	this.velocity.x = key[68]-key[65];
	this.velocity.y	 = key[83]-key[87];
	if (this.velocity.mag() > 1){
		this.velocity.normalize();
	}

	this.velocity.mulI(this.friction);

	this.position.add(this.velocity);

	//D key
	//if(key[68]){
	//	this.position.x++;
	//}
};

for (var i = 0; i < 32; i++){

	var ob_tree = new Entity();
	ob_tree.image = sp_tree;
	ob_tree.position.set(96 * (i % 8), 96 * ((i/8) | 0));

	}

	var ob_grass = new Entity();
	ob_grass.image = sp_grass;
	ob_grass.position.set(32 * (0 % 32), 32 * ((0/32) | 0));
	ob_grass.draw = function () {
		for (var x = 0; x <= canvas.width; x+=32) {
			for(var y = 0; y <= canvas.height; y+=32){
				context.drawImage(this.image, x, y);
			}
		}
	};


//Game start
kernel.init();