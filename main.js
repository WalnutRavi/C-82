var Canva=document.getElementById("myCanvas");
var ctx=Canva.getContext("2d");
var mouseEvent="empty";
var lastPositionX,lastPositionY;

var color="black";
var widthLine=3;


Canva.addEventListener("mousedown",myMouseDown);
function myMouseDown(e){
    mouseEvent="mouseDown"
}

Canva.addEventListener("mouseup",myMouseUp);
function myMouseUp(e){
    mouseEvent="mouseUp"
}

Canva.addEventListener("mouseleave",myMouseLeave);
function myMouseLeave(e){
    mouseEvent="mouseLeave"
}

Canva.addEventListener("mousemove",myMouseMove);
function myMouseMove(e){
    positionMouseX=e.clientX-Canva.offsetLeft;
    positionMouseY=e.clientY-Canva.offsetTop;

    if (mouseEvent=="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthLine;
        ctx.moveTo(lastPositionX,lastPositionY);
        ctx.lineTo(positionMouseX,positionMouseY);
        ctx.stroke();
    }
    lastPositionX=positionMouseX;
    lastPositionY=positionMouseY;
}