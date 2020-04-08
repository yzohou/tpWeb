
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.

function DnD(canvas, interactor) {

	// Définir ici les attributs de la 'classe'
	this.xDebut = 0;
	this.yDebut = 0;
	this.xFin = 0;
	this.yFin = 0;
	this.onMove = false;
	
	// Developper les 3 fonctions gérant les événements
	
	//prendre l'objet
	this.take = function(evt) {
	    this.onMove = true;
	    var point = getMousePosition(canvas, evt);
	    this.xDebut = point.x;
	    this.yDebut = point.y;
	    this.xFin = point.x;
	    this.yFin = point.y;
	    interactor.onInteractionStart(this);
	  }.bind(this) ;
	  
	  
	  //commencer A bouger
	  this.drag = function(evt) { 
	  	if(this.onMove === true){
	  		var point = getMousePosition(canvas, evt);
		    this.xFin = point.x;
		    this.yFin = point.y;
		    interactor.onInteractionUpdate(this);
	  	}
	  }.bind(this) ;
	  
	  
	  //Deposer objet
	  this.drop = function(evt) { 
		this.onMove = false;
		var point = getMousePosition(canvas, evt);
		this.xFin = point.x;
		this.yFin = point.y;
	    interactor.onInteractionEnd(this);
	  }.bind(this) ;
	

	// Associer les fonctions précédentes aux évènements du canvas.
	canvas.addEventListener('mousedown', this.take, false);
	canvas.addEventListener('mousemove', this.drag, false);
	canvas.addEventListener('mouseup', this.drop, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



