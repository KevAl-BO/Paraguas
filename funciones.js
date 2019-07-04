	var ArregloParaguas;
function CrearParaguas() {
		var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.clearRect(0, 0, myCanvas.width, myCanvas.height);
	ArregloParaguas = new Array (
						new Paraguas(80, 200, 120, 170, "red", 400),
						new Paraguas(280, 200, 100, 150, "blue", 500),
						new Paraguas(480, 200, 130, 190, "green", 800),
						new Paraguas(120, 400, 110, 180, "brown", 256),
						new Paraguas(360, 400, 80, 140, "grey", 623)
						);
	for (var i = ArregloParaguas.length - 1; i >= 0; i--) {
		ArregloParaguas[i].Dibujar(context); }
}
function Altu(){
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.clearRect(0, 0, myCanvas.width, myCanvas.height);
	var j = ArregloParaguas.length;
	var ax;
	var x1, x2, y1, y2;
	for (var i=2; i<=j; i++)
	{
		for (var k=0; k<=j-i; k++)
		{
			if (ArregloParaguas[k].Largo > ArregloParaguas[k+1].Largo) 
			{
			ax = ArregloParaguas[k];
			x1 = ArregloParaguas[k].PuntoX;
			y1 = ArregloParaguas[k].PuntoY;
			x2 = ArregloParaguas[k+1].PuntoX;
			y2 = ArregloParaguas[k+1].PuntoY;
			
			ArregloParaguas[k] = ArregloParaguas[k+1];
			ArregloParaguas[k+1] = ax;
			
			ArregloParaguas[k].PuntoX = x1;
			ArregloParaguas[k].PuntoY = y1;
			ArregloParaguas[k+1].PuntoX = x2;
			ArregloParaguas[k+1].PuntoY = y2;
			}
		}
	}
	for (var i = ArregloParaguas.length - 1; i >= 0; i--) {
		ArregloParaguas[i].Dibujar(context); }	
}
function Anch(){
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.clearRect(0, 0, myCanvas.width, myCanvas.height);
	var j = ArregloParaguas.length;
	var ax;
	var x1, x2, y1, y2;
	for (var i=2; i<=j; i++)
	{
		for (var k=0; k<=j-i; k++)
		{
			if (ArregloParaguas[k].Ancho > ArregloParaguas[k+1].Ancho) 
			{
			ax = ArregloParaguas[k];
			x1 = ArregloParaguas[k].PuntoX;
			y1 = ArregloParaguas[k].PuntoY;
			x2 = ArregloParaguas[k+1].PuntoX;
			y2 = ArregloParaguas[k+1].PuntoY;
			
			ArregloParaguas[k] = ArregloParaguas[k+1];
			ArregloParaguas[k+1] = ax;
			
			ArregloParaguas[k].PuntoX = x1;
			ArregloParaguas[k].PuntoY = y1;
			ArregloParaguas[k+1].PuntoX = x2;
			ArregloParaguas[k+1].PuntoY = y2;
			}
		}
	}
	for (var i = ArregloParaguas.length - 1; i >= 0; i--) {
		ArregloParaguas[i].Dibujar(context); }	
}

function Pre(){
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.clearRect(0, 0, myCanvas.width, myCanvas.height);
	var j = ArregloParaguas.length;
	var ax;
	var x1, x2, y1, y2;
	for (var i=2; i<=j; i++)
	{
		for (var k=0; k<=j-i; k++)
		{
			if (ArregloParaguas[k].Precio > ArregloParaguas[k+1].Precio) 
			{
			ax = ArregloParaguas[k];
			x1 = ArregloParaguas[k].PuntoX;
			y1 = ArregloParaguas[k].PuntoY;
			x2 = ArregloParaguas[k+1].PuntoX;
			y2 = ArregloParaguas[k+1].PuntoY;
			
			ArregloParaguas[k] = ArregloParaguas[k+1];
			ArregloParaguas[k+1] = ax;
			
			ArregloParaguas[k].PuntoX = x1;
			ArregloParaguas[k].PuntoY = y1;
			ArregloParaguas[k+1].PuntoX = x2;
			ArregloParaguas[k+1].PuntoY = y2;
			}
		}
	}
	for (var i = ArregloParaguas.length - 1; i >= 0; i--) {
		ArregloParaguas[i].Dibujar(context); }	
}