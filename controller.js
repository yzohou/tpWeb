
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	new DnD(canvas, this);

	var spinnerWidth = document.getElementById('spinnerWidth');
	spinnerWidth.addEventListener('change', function(){
			this.currLineWidth = parseInt(spinnerWidth.value);
			console.log(this.currLineWidth);
	}.bind(this), false);

	var colorPicker = document.getElementById('colour');
	colorPicker.addEventListener('change', function(){
			this.currColour = colorPicker.value;
	}.bind(this), false);

	var butRect = document.getElementById('butRect');
	butRect.addEventListener('click', function(){
			this.currEditingMode = editingMode.rect;
	}.bind(this), false);

	var butLine = document.getElementById('butLine');
	butLine.addEventListener('click', function(){
			this.currEditingMode = editingMode.line;
	}.bind(this), false);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function (dnd) {
		switch(this.currEditingMode){
		  case editingMode.rect: {
		  	this.currentShape = new Rectangle(dnd.xDebut, dnd.yDebut, dnd.xFin, dnd.yFin, this.currLineWidth, this.currColour);
		    break;
		  }
		  case editingMode.line: {
		  	this.currentShape = new Line(dnd.xDebut, dnd.yDebut, dnd.xFin, dnd.yFin, this.currLineWidth, this.currColour);
		    break;
		  }
		}
	}.bind(this) ;

	this.onInteractionUpdate = function (dnd) {
		this.currentShape.setFinalX(dnd.xFin);
		this.currentShape.setFinalY(dnd.yFin);
	}.bind(this) ;

	this.onInteractionEnd = function (dnd) {
		this.currentShape.setFinalX(dnd.xFin);
		this.currentShape.setFinalY(dnd.yFin);
		drawing.addForm(this.currentShape);
		this.currentShape.paint(ctx);
		updateShapeList(this.currentShape, this.currEditingMode);
	}.bind(this) ;
};



