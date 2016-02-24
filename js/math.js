//vector operations
function Vec2(){
	this.x = 0;
	this.y = 0;

	return this;
}
//setting two vectors
Vec2.prototype.set = function(x, y){
	this.x += x;
	this.y += y;

	return this;
};
//adding two vectors
Vec2.prototype.add = function(vec2){
	this.x += vec2.x;
	this.y += vec2.y;

	return this;
};
//subtracting two vectors
Vec2.prototype.sub = function(vec2){
	this.x += vec2.x;
	this.y += vec2.y;

	return this;
};
//copying two vectors
Vec2.prototype.copy = function(vec2){
	this.x += vec2.x;
	this.y += vec2.y;

	return this;
};
//cloning two vectors
Vec2.prototype.clone = function(){
	var vec2 = new Vec2();
	vec2.x = this.x;
	vec2.y = this.y;
	return vec2;
};

//Setting up for Integer Multiplication
Vec2.prototype.mulI = function(i){
	this.x *= i;
	this.y *= i;
	return this;
}

//Setting up the vector between two angles
Vec2.prototype.getPointTo = function(){
	var offset = (new Vec2()).copy(vec2).sub(this);
	return offset;
};

//Know the length of the vector
Vec2.prototype.mag = function(){
	return Math.sqrt(this.x * this.x + this.y * this.y);
};

Vec2.prototype.normalize = function(){
	var mag = this.mag();
	this.x /= mag;
	this.y /= mag;
	return this;
};