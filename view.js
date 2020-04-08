
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.


Rectangle.prototype.paint = function(ctx) {
	//TODO Manager color
    ctx.strokeStyle = this.getColor();
    ctx.lineWidth = this.getTraitSize();
    ctx.rect(this.getInitX(), this.getInitY(), this.getWidth(), this.getHeight());
    ctx.stroke();
};


Line.prototype.paint = function(ctx) {
    //TODO Manager color
  	ctx.strokeStyle = this.getColor();
    ctx.lineWidth = this.getTraitSize();
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();

};


Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function(eltDuTableau) {
        console.log(eltDuTableau);
        eltDuTableau.paint(ctx);
    });
};


updateShapeList = function(item, mode){
    var shapeList = document.getElementById('shapeList');
    var li = document.createElement("li");

    switch(mode){
          case editingMode.rect: {
            li.appendChild(document.createTextNode("Rectangle"));
            break;
          }
          case editingMode.line: {
          li.appendChild(document.createTextNode("Line"));
            break;
          }
        }
    li.insertAdjacentHTML( 'beforeend', '<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-remove-sign"></span></button>' );
    shapeList.appendChild(li);
};
