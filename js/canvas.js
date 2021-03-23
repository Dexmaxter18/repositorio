var espacio = document.getElementById("canvasRamdom");
var contexto = espacio.getContext("2d");
document.addEventListener("keyup", oprimirTeclas);
var x = 250;
var y = 250;

teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

dibujarLinea("white", x - 1, y - 1, x + 2, y + 2, contexto);
function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

function oprimirTeclas(evento) {
  var colorcito = "white";
  var movimiento = 10;
  switch (evento.keyCode) {
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, contexto);
      x = x - movimiento;
      break;
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, contexto);
      y = y - movimiento;
      break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, contexto);
      x = x + movimiento;
      break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, contexto);
      y = y + movimiento;
      break;
  }
  console.log(evento.keyCode);
}