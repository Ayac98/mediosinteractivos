/// Variaable y botones
var boton1x = 8;
var boton1y = 10;
var boton1tam = 50;

var boton2x = 8;
var boton2y = 60;
var boton2tam = 50;

var boton3x = 8;
var boton3y = 110;
var boton3tam = 50;

var boton4x = 8;
var boton4y = 237;
var boton4tam = 30;
var miPulpo;

var filtro = 0;

/// Función para cargar la imagen
function preload(){
 miMar = loadImage("assets/Arrecife.jpg");
 miCaballo = loadImage("assets/Caballo.png");
 miPulpo = loadImage("assets/Pulpo.png");
}

function setup() { 
  createCanvas(840, 490);
  


}

function draw() {
  background(255);
  
  image(miMar,0,0);
/// Boton de filtro azul
 fill(253,83,8);
	rect(boton1x, boton1y, boton1tam, boton1tam);
 /// boton mascara de recorte  
	fill(251,153,2);
	rect(boton2x, boton2y, boton2tam, boton2tam);
/// boton de filtro sobreexpuestp	
  fill(254,254,51);
	rect(boton3x, boton3y, boton3tam,boton3tam);
 /// boton de borrador
  fill(105,172,50);
	rect(boton4x, boton4y, boton4tam, boton4tam);
/// Botón filtro 1 ( tinta azul) 
if (mouseIsPressed) {
    if (mouseX > boton1x  && mouseX < boton1x  + boton1tam &&
      mouseY > boton1y && mouseY < boton1y + boton1tam) {
      tint(25,84,154);

    }
 /// Botón filtro caballito de mar
 if (mouseX > boton2x && mouseX < boton2x + boton2tam &&
      mouseY > boton2y && mouseY < boton2y + boton2tam) {
      ///tint(210,98,7);
         miMar.mask(miCaballo);
    }
/// Botón filtro sobre expuesto
  if (mouseX > boton3x && mouseX < boton3x + boton3tam &&
      mouseY > boton3y && mouseY < boton3y + boton3tam) {
         //miMar.mask(miPulpo);
          image(miMar,0,0);
      filter(POSTERIZE,3);

    }
/// Botón borrador	
if (mouseX > boton4x && mouseX < boton4x + boton4tam &&
      mouseY > boton4y && mouseY < boton4y + boton4tam) {
      miMar = loadImage("assets/Arrecife.jpg");
    tint(255,255,255);

    }

}




}
  
