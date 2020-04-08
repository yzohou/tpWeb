
// Implémenter ici les 4 classes du modèle.

function Drawing() {
  this.shapes = new Array();
  
  this.addForm = function(elt){
  	return this.shapes.push(elt);
  }

  this.getForms = function(){
  	return this.shapes;
  }
};


function Shape(color, traitSize) {
  this.color = color;
  this.traitSize = traitSize;
  
  this.getTraitSize = function(){
  	return this.traitSize;
  }

  this.getColor = function(){
  	return this.color;
  }

};


function Rectangle(initX, initY, finalX, finalY, traitSize, color) {
  this.initX = initX;
  this.initY = initY;
  this.finalX = finalX;
  this.finalY = finalY;
  Shape.call(this, color, traitSize);

  this.getInitX = function(){
  	return this.initX;
  }

  this.setInitX = function(value){
  	this.initX = value;
  }

  this.getInitY = function(){
  	return this.initY;
  }

  this.setInitY = function(value){
  	this.initY = value;
  }

  this.getFinalX = function(){
  	return this.finalX;
  }

  this.setFinalX = function(value){
  	this.finalX = value;
  }

  this.getFinalY = function(){
  	return this.finalY;
  }

  this.setFinalY = function(value){
  	this.finalY = value;
  }


  this.getWidth = function(){
    return this.finalX - this.initX;
  }

  this.getHeight = function(){
    return this.finalY - this.initY;
  }

};


function Line(initX, initY, finalX, finalY, traitSize, color) {
  this.initX = initX;
  this.initY = initY;
  this.finalX = finalX;
  this.finalY = finalY;
  Shape.call(this, color, traitSize);

  this.getInitX = function(){
  	return this.initX;
  }

  this.setInitX = function(value){
  	this.initX = value;
  }

  this.getInitY = function(){
  	return this.initY;
  }

  this.setInitY = function(value){
  	this.initY = value;
  }

  this.getFinalX = function(){
  	return this.finalX;
  }

  this.setFinalX = function(value){
  	this.finalX = value;
  }

  this.getFinalY = function(){
  	return this.finalY;
  }

  this.setFinalY = function(value){
  	this.finalY = value;
  }

};

