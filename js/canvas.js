var espacio = document.getElementById("canvasRamdom");
var contexto = espacio.getContext("2d");
document.addEventListener("keyup", oprimirTeclas);
var x = 250;
var y = 250;

dibujarLinea("white", x - 1, y - 1, x + 2, y + 2, contexto);
function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

function oprimirTeclas(evento){
  console.log(evento);
}
