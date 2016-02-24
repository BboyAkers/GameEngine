//Creating a place to assign objects(children) & creating a frame debugging method
function Kernel(){
	this.children = [];
	this.ticks = 0;
	return this;
};

//Setting framerate
Kernel.prototype.init = function(){
	// update loop

	anim();

	return this;
};
//frame rate update
function anim () {
	window.requestAnimationFrame(anim);
	kernel.update();
}

//calling update function for all the objects
Kernel.prototype.update = function(){

	this.ticks++;
	//console.log(this.ticks);

	this.children.forEach(function(element, index, array){ 
		element.update();
	});

		context.fillStyle = "#fff";
		context.rect(0,0, canvas.width, canvas.height);
		context.fill(); 
		
		//Depth Sorting Algorithm
		var swap = null;
		for(i = 0; i < kernel.children.length - 1; i++)
		{
			if(kernel.children[i].position.y > kernel.children[i + 1].position.y)
			{
			 	swap = kernel.children[i];
				kernel.children[i] = kernel.children[i + 1];
				kernel.children[i + 1] = swap;
			};
		}

	//place objects onto canvas
	this.children.forEach(function(element, index, array){ 
		element.draw(); 
	});
	return this;
};

//Loading image and setting orgin
function loadImage(src){
	var image = new Image();
	image.src = src;
	image.origin = new Vec2();
	image.onload = function(){
		this.origin.set(this.width/2, this.height);	
	};
	return image;

	//image.onload = function();
};




// Setting button state variables
var mouse = new Vec2();
var mouse_button = [];
var key = [];
var key_pressed = [];
var key_released = [];


//Checking each variable state
for (var i = 0; i<255; i++){
	key[i] = false;
	key_pressed[i] = false;
	key_released[i] = false;
};

//Sets the pressed key(identifier) to true
window.onkeydown = function(event){
	key[event.keyCode] = true;
	//identifies key pressed
	console.log(event.keyCode)
};

//When key is released set the key state to false
window.onkeyup = function(event){
	key[event.keyCode] = false;
};


//Creating Coordinates for mouse
/*window.addEventListener('mousemove', function (evt){
	var m = getMousePos(document.body, evt);
	mouse.set(m.x, m.y);
	// console.log(2);
}, false);

//Querying the DOM, DOM hold mouse position
function getMousePos(elm, evt){
	var gmp = elm.getBoundingClientRect();
	return{
		x: evt.clientX - gmp.left,
		y: evt.clientY - gmp.top
	};
}
*/


(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());




