init();

var width;

function init(){
	posicionCentral();
}

function posicionCentral(){
	width = getWidth();
	var posicion = (width/2) - 512;
	document.getElementById('bloqueCentral').style.left=posicion;
	
}

function getWidth() {
	return Math.max(
	document.body.scrollWidth,
	document.documentElement.scrollWidth,
	document.body.offsetWidth,
	document.documentElement.offsetWidth,
	document.documentElement.clientWidth
	);
}