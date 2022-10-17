const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")

canvas.width=800;
canvas.height=800; 
let isPainting = false;





function onMove(event){
  if (isPainting){
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function onDown (){
  isPainting = true;

}

function onUp(){
  isPainting = false;
}

canvas.addEventListener("mousemove",onMove)
canvas.addEventListener("mousedown",onDown)
canvas.addEventListener("mouseup", onUp)