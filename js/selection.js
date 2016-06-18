
var selectedElement = null;
var mouseX = 0;
var mouseY = 0;
var selectedElementX = 0;
var selectedElementY = 0;

function initSelect(elem){

console.log("got");

	selectedElement = elem;
	selectedElementX = mouseX - selectedElement.offsetLeft;
	selectedElementY = mouseY - selectedElement.offsetTop;

}

function updateSelected(){

	mouseX =  window.event.clientX;
	mouseY =  window.event.clientY;

	if(selectedElement !== null){

		selectedElement.style.left = (mouseX - selectedElementX) + "px";
		selectedElement.style.top = (mouseY - selectedElementX) + "px";

	}

}

function deselect(){

	console.log("deselected");
	selectedElement.style.left = 0;
	selectedElement.style.top = 0;
	selectedElement = null;

}

document.getElementById('selected').onmousedown = function () {

    initSelect(this);
    return false;
};

document.onmousemove = updateSelected;
document.onmouseup = deselect;