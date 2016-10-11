	function Entity(){
	this.position = new Vec2();
	this.velocity = new Vec2();
	this.friction = 0.9;

	this.image = null;
	kernel.children.push(this);
	return this;
}
//Initiates the variables within Entity
Entity.prototype.init = function() { 
	return this; 
};
//Updates the variables within Entity
Entity.prototype.update = function() { 

	return this; 
};
// places the image relative to the origin.
Entity.prototype.draw = function() { 
	if (this.image === null){
		return false;
	};
	context.drawImage(this.image, this.position.x - this.image.origin.x, this.position.y - this.image.origin.y);
	return this; 
};