function Kernel() {
    this.children = [];
    this.ticks = 0;
    this.swap=null;
    return this;
}

Kernel.prototype.init = function () {
    // update loop
    
    anim();
    
    return this;
};

function anim () {
    window.requestAnimationFrame(anim);
    kernel.update();
}

Kernel.prototype.update = function () {

    this.ticks++;
    //console.log(this.ticks);

    this.children.forEach(function (element, index, array) {
        element.update();
    });
    
    

    context.fillStyle = "#fff";
    context.beginPath();
    context.rect(0, 0, canvas.width, canvas.height);
    context.fill();
    for (var i =0; i<this.children.length-1; i++){
        if (this.children[i].position.y>this.children[i+1].position.y){
            this.swap = this.children[i];
            this.children[i] = this.children[i+1];
            this.children[i+1] = this.swap;
        }
    }

    this.children.forEach(function (element, index, array) {
        element.draw();
    });
    

  //  return this;
};


function loadImage(src) {
    var image = new Image();
    image.src = src;
    image.origin = new Vec2();
    image.onload = function () {
        this.origin.set(this.width / 2, this.height);
    };
    return image;
}




var mouse = new Vec2();
var mouse_button = [];
var key = [];
var key_pressed = [];
var key_released = [];

for (var i = 0; i < 255; i++) {
    key[i] = false;
    key_pressed[i] = false;
    key_released[i] = false;
}

window.onkeydown = function(event){
    key[event.keyCode] = true;
    //console.log(event.keyCode);
};


window.onkeyup = function(event){
    key[event.keyCode] = false;
};



/*
window.addEventListener('mousemove', function (evt) {
    var m = getMousePos(document.body, evt);
    mouse.set(m.x, m.y);

}, false);

function getMousePos(elem, evt) {
    var gmp = elem.getBoundingClientRect();
    return {
        x: evt.clientX - gmp.left,
        y: evt.clientY - gmp.top
    };
}*/



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
