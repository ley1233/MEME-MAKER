const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")
const Linewidth = document.getElementById("line-width");
const color = document.getElementById("color")
const colorOptions = Array.from(document.getElementsByClassName("color-option"))
const modeBtn = document.getElementById("mode-btn") 
const destroyBtn = document.getElementById("destroy-btn")
const eraseBtn = document.getElementById("eraser-btn")

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;


canvas.width=800;
canvas.height=800; 
ctx.lineWidth = Linewidth.value;
let isPainting = false;
let isFilling =  false;





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
  ctx.beginPath ();
}

function onLineWidthChange(event){
  ctx.lineWidth = event.target.value; 
}

function onColorChange(event){ 
  ctx.strokeStyle= event.target.value;
  ctx.fillStyle = event.target.value; 
}

function onColorClick(event){
  ctx.strokeStyle= event.target.dataset.color;
  ctx.fillStyle = event.target.dataset.color; 
  color.value = event.target.dataset.color;
}


function onModeClick(){
  if (isFilling){
    isFilling = false
    modeBtn.innerText = "Fill"
  } else{
    isFilling = true;
    modeBtn.innerText= "Draw"
  }
}

function onCanvasClick(){
  if(isFilling){
    ctx.fillRect(0,0, CANVAS_WIDTH,CANVAS_HEIGHT)
  }
}

function onDestroyClick(){
  ctx.fillStyle = "white"
  ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)  
}
 
function onEraseClick(){
  ctx.strokeStyle = "white"
  isFilling = false
  modeBtn.innerText = "Fill"
  
}

canvas.addEventListener("mousemove",onMove)
canvas.addEventListener("mousedown",onDown)
canvas.addEventListener("mouseup", onUp)
Linewidth.addEventListener("change",onLineWidthChange)
color.addEventListener("change",onColorChange)

colorOptions.forEach(color =>color.addEventListener("click", 
onColorClick))

modeBtn.addEventListener("click", onModeClick)

canvas.addEventListener("click", onCanvasClick)

destroyBtn.addEventListener("click",onDestroyClick)
eraseBtn.addEventListener("click",onEraseClick)