var boton1x = 5;
var boton1y = 363;
var boton1tam = 30;

var boton2x = 45;
var boton2y = 363;
var boton2tam = 30;

var boton3x = 85;
var boton3y = 363;
var boton3tam = 30;

var boton4x = 127;
var boton4y = 363;
var boton4tam = 30;

var boton5x = 167;
var boton5y = 363;
var boton5tam = 30;

var boton6x = 205;
var boton6y = 363;
var boton6tam = 30;

var boton7x = 244;
var boton7y = 363;
var boton7tam = 30;

var boton8x = 284;
var boton8y = 363;
var boton8tam = 30;

var boton9x = 326;
var boton9y = 363;
var boton9tam = 30;

var boton10x = 367;
var boton10y = 363;
var boton10tam = 30;

var boton11x = 2;
var boton11y = 77;
var boton11tam = 26;

var boton12x = 2;
var boton12y = 113;
var boton12tam = 26;

var boton13x = 2;
var boton13y = 151;
var boton13tam =26;

var boton14x = 2;
var boton14y = 187;
var boton14tam = 26;

var boton15x = 2;
var boton15y = 223;
var boton15tam = 26;

var boton16x = 370;
var boton16y = 77;
var boton16tam = 26;

var boton17x = 370;
var boton17y = 113;
var boton17tam = 26;

var boton18x = 370;
var boton18y = 151;
var boton18tam = 26;

var boton19x = 370;
var boton19y = 187;
var boton19tam = 26;

var boton20x = 370;
var boton20y = 223;
var boton20tam = 26;

var boton21x = 370;
var boton21y = 17;
var boton21tam = 26;

var herramienta = 0;

var colorselect = 0;

var tam = 0;

var botonDiam = 1;

var SColor = 1;

function setup() { 
  createCanvas(400,400);
  background(237,230,255);
} 

function draw() { 
 
	
/// BOTONES DE COLORES  
  
/// cuadrado de abajo ///
  noStroke();
  fill(255,255,255);
  rect(0,356,400,44);
/// cuadrado izq /// 
  noStroke();
  fill(255,255,242);
  rect(0,72,33,183);
/// cuadrado der /// 
  noStroke();
  fill(255,255,242);
  rect(367,72,33,183);
	
  
  fill(253,83,8);
	rect(boton1x, boton1y, boton1tam, boton1tam);
  
	fill(251,153,2);
	rect(boton2x, boton2y, boton2tam, boton2tam);
	
  fill(254,254,51);
	rect(boton3x, boton3y, boton3tam, boton3tam);

  fill(105,172,50);
	rect(boton4x, boton4y, boton4tam, boton4tam);
	
	fill(3,145,206);
	rect(boton5x, boton5y, boton5tam, boton5tam);

  fill(2,71,254);
	rect(boton6x, boton6y, boton6tam, boton6tam);

  fill(61,1,164);
	rect(boton7x, boton7y, boton7tam, boton7tam);
 
	fill(134,1,175);
	rect(boton8x, boton8y, boton8tam, boton8tam);
 
	fill(167,25,75);
	rect(boton9x, boton9y, boton9tam, boton9tam);

	fill(254,39,18);
	rect(boton10x, boton10y, boton10tam, boton10tam);

/// FIGURAS (DERECHAAAA)///

	fill(254,254,254);
	rect(boton11x, boton11y, boton11tam, boton11tam);
	
	fill(254,254,254);
	rect(boton12x, boton12y, boton12tam, boton12tam);
	
	fill(254,254,254);
	rect(boton13x, boton13y, boton13tam, boton13tam);
	
	fill(254,254,254);
	rect(boton14x, boton14y, boton14tam, boton14tam);
	
  fill(254,254,254);
	rect(boton15x, boton15y, boton15tam, boton15tam);
  
/// FIGURAS (IZQUIERDAAA) ///
  
  fill(254,254,254);
	rect(boton16x, boton16y, boton16tam, boton16tam);
 
  fill(254,254,254);
	rect(boton17x, boton17y, boton17tam, boton17tam);
	
  fill(254,254,254);
	rect(boton18x, boton18y, boton18tam, boton18tam);
	
  fill(254,254,254);
	rect(boton19x, boton19y, boton19tam, boton19tam);
  
	fill(254,254,254);
	rect(boton20x, boton20y, boton20tam, boton20tam);
  
/// BOTON BORRAR ///
  
  fill(254,254,254);
	rect(boton21x, boton21y, boton21tam, boton21tam);
  
	
/// CODIGOS FIGURASS ///
	
	
	if (mouseIsPressed) {
    if (mouseX > boton1x  && mouseX < boton1x  + boton1tam &&
      mouseY > boton1y && mouseY < boton1y + boton1tam) {
      colorselect = 0;

    }

    if (mouseX > boton2x && mouseX < boton2x + boton2tam &&
      mouseY > boton2y && mouseY < boton2y + boton2tam) {
      colorselect = 1;

    }
  if (mouseX > boton3x && mouseX < boton3x + boton3tam &&
      mouseY > boton3y && mouseY < boton3y + boton3tam) {
      colorselect = 2;

    }
	
	if (mouseX > boton4x && mouseX < boton4x + boton4tam &&
      mouseY > boton4y && mouseY < boton4y + boton4tam) {
      colorselect = 3;

    }
	
	if (mouseX > boton5x && mouseX < boton5x + boton5tam &&
      mouseY > boton5y && mouseY < boton5y + boton5tam) {
      colorselect = 4;

    }
	
	if (mouseX > boton6x && mouseX < boton6x + boton6tam &&
      mouseY > boton6y && mouseY < boton6y + boton6tam) {
      colorselect = 5;

    }
	if (mouseX > boton7x && mouseX < boton7x + boton7tam &&
      mouseY > boton7y && mouseY < boton7y + boton7tam) {
      colorselect = 6;

    }
	
	if (mouseX > boton8x && mouseX < boton8x + boton8tam &&
      mouseY > boton8y && mouseY < boton8y + boton8tam) {
      colorselect = 7;

    }
	if (mouseX > boton9x && mouseX < boton9x + boton9tam &&
      mouseY > boton9y && mouseY < boton9y + boton9tam) {
      colorselect = 8;

    }
	if (mouseX > boton10x && mouseX < boton10x + boton10tam &&
      mouseY > boton10y && mouseY < boton10y + boton10tam) {
      colorselect = 9;
      Scolor = 9;
      
    }
	
	//// HERRAMIENTAS ///
    
    if (mouseX > boton11x && mouseX < boton11x + boton11tam &&
      mouseY > boton11y && mouseY < boton11y + boton11tam) {
      herramienta = 0;
    }
      if (mouseX > boton12x && mouseX < boton12x + boton12tam &&
      mouseY > boton12y && mouseY < boton12y + boton12tam) {
      herramienta = 1;
    }
    if (mouseX > boton13x && mouseX < boton13x + boton13tam &&
      mouseY > boton13y && mouseY < boton13y + boton13tam) {
      herramienta = 2;
    }
      if (mouseX > boton14x && mouseX < boton14x + boton14tam &&
      mouseY > boton14y && mouseY < boton14y + boton14tam) {
      herramienta = 3;
    }
    if (mouseX > boton15x && mouseX < boton15x + boton15tam &&
      mouseY > boton15y && mouseY < boton15y + boton15tam) {
      herramienta = 4;
    }
      if (mouseX > boton19x && mouseX < boton19x + boton19tam &&
      mouseY > boton19y && mouseY < boton19y + boton19tam) {
      herramienta = 5;
    }
     if (mouseX > boton20x && mouseX < boton20x + boton20tam &&
      mouseY > boton20y && mouseY < boton20y + boton20tam) {
      herramienta = 6;
    }
     if (mouseX > boton16x && mouseX < boton16x + boton16tam &&
      mouseY > boton16y && mouseY < boton16y + boton16tam) {
      tam = 1;
    }
     if (mouseX > boton17x && mouseX < boton17x + boton17tam &&
      mouseY > boton17y && mouseY < boton17y + boton17tam) {
      tam = 2;
    }
    if (mouseX > boton18x && mouseX < boton18x + boton18tam &&
      mouseY > boton18y && mouseY < boton18y + boton18tam) {
      tam = 3;
    }
    if (mouseX > boton21x && mouseX < boton21x + boton21tam &&
      mouseY > boton21y && mouseY < boton21y + boton21tam) {
      background(237,230,255);
    }
    if (colorselect == 0) {
      fill(253,83,8);
      stroke(253,83,8);
   }
   if (colorselect == 1) {
      fill(251,153,2);
      stroke(251,153,2);
   }
	  if (colorselect == 2) {
      fill(254,254,51);
      stroke(254,254,51);
   }
	  if (colorselect == 3) {
      fill(102,172,50);
      stroke(102,172,50);
   }
	 if (colorselect == 4) {
      fill(3,145,206);
     stroke(3,145,206);
   }
	 if (colorselect == 5) {
      fill(2,71,254);
      stroke(2,71,254);
   }
	 if (colorselect == 6) {
      fill(61,1,164);
      stroke(61,1,164);
   }
	 if (colorselect == 7) {
      fill(134,1,175);
      stroke(134,1,175);
   }
	 if (colorselect == 8) {
      fill(167,25,75);
      stroke(167,25,75);
  
   }
	 if (colorselect == 9) {
      fill(254,39,18);
      stroke(254,39,18);
      
   }
  
/// TRIANGULO ///
	 if (herramienta == 1) {
     strokeWeight(botonDiam);
     triangle(mouseX - 10, mouseY - 30,mouseX +30, mouseY +40,mouseX +120, mouseY +60);
     }
/// LINEA NORMAL ///
  if (herramienta == 0) {
     strokeWeight(botonDiam);
     line(mouseX, mouseY,pmouseX,pmouseY);
     }
///  MARIPOSAS ///
   if (herramienta == 2) {
     strokeWeight(botonDiam);
     beginShape();
     vertex(mouseX+20,mouseY+23);
     vertex(mouseX+26,mouseY+50);
     vertex(mouseX+50,mouseY+30);
     vertex(mouseX+50,mouseY+55);
     endShape();
     }
/// FLECHAS ///
  if (herramienta == 3) {
     strokeWeight(botonDiam);
     beginShape();
     vertex(mouseX+9,mouseY+11);
     vertex(mouseX+1,mouseY-14);
     vertex(mouseX+2,mouseY+4);
     vertex(mouseX-16,mouseY-3);
     endShape();
     }
     
/// CIRCULOS ///
    if (herramienta == 4) {
     strokeWeight(botonDiam);
      ellipse(mouseX, mouseY, botonDiam + 5, botonDiam + 5);
      ellipse(mouseX + 10, mouseY + 10, botonDiam + 5, botonDiam + 5);
      ellipse(mouseX-10, mouseY - 10, botonDiam + 5, botonDiam + 5);
      ellipse(mouseX - 10, mouseY + 10, botonDiam + 5, botonDiam + 5);
      ellipse(mouseX + 10, mouseY - 10, botonDiam + 5, botonDiam + 5);
    }
 /// FLECHAS ///
  if (herramienta == 5) {
     strokeWeight(botonDiam);
     beginShape();
     vertex(mouseX,mouseY+15);
     vertex(mouseX+1,mouseY);
     vertex(mouseX+10,mouseY+4);
     vertex(mouseX+5,mouseY-3);
     vertex(mouseX+9,mouseY-12);
     vertex(mouseX,mouseY-10);
     vertex(mouseX-10,mouseY-15);
     vertex(mouseX-7,mouseY-8);
     vertex(mouseX-16,mouseY+6);
     vertex(mouseX-5,mouseY+6);
     endShape();
     }
    
/// rayoo ///
    
    if (herramienta == 6) {
     strokeWeight(botonDiam);
    beginShape();
    vertex(mouseX+20, mouseY+20);
    vertex(mouseX+40, mouseY+20);
    vertex(mouseX+40, mouseY+40);
    vertex(mouseX+60, mouseY+40);
    vertex(mouseX+60, mouseY+60);
    vertex(mouseX+20, mouseY+60);
    endShape(CLOSE);
     }
/// TAMAÑO /// 
    if (tam == 1) {
      botonDiam = 10
    }
    if (tam == 2) {
      botonDiam = 5
    }
    if (tam == 3) {
      botonDiam = 1
    }
  }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
/// SIMBOLO TRINAGULO ///
	stroke(1);
	strokeWeight(1);
  fill(255,255,255);
  triangle(26,133,7,118,10,132);
/// SIMBOLO MARIPOSA ///
  stroke(1);
	strokeWeight(1);
  fill(255,255,255);
  triangle(15,164,6,156,6,172);
  triangle(16,164,25,156,25,172);
/// SIMBOLO FLECHA ///
  stroke(1);
	strokeWeight(1);
  fill(255,255,255);
  beginShape();
  vertex(19,190);
  vertex(27,209);
  vertex(4,199);
  vertex(23,205);
  vertex(19,190);
  endShape();
/// CIRCULOS EN X ///
  stroke(1);
	strokeWeight(1);
  fill(255,255,255);
	ellipse(16,236,5,5);
  ellipse(9,229,5,5);
  ellipse(22,229,5,5);
  ellipse(9,243,5,5);
  ellipse(22,243,5,5);
/// LINEA ///
   stroke(1);
	strokeWeight(1);
  line(5,100,25,80);
//// circulos de tamaño ///
  stroke(1);
	strokeWeight(1);
  fill(255,255,255);
  ellipse(383,90,18,18);
  
  stroke(1);
	strokeWeight(1);
  fill(255,255,255);
  ellipse(383,127,9,9);
  
  stroke(1);
	strokeWeight(1);
  fill(255,255,255);
  ellipse(383,164,5,5);
  
/// ESTRELLA /// 
  
  stroke(1);
	strokeWeight(1);
  fill(255,255,255);
  beginShape();
  vertex(377,191);
  vertex(383,193);
  vertex(389,190);
  vertex(389,196);
  vertex(392,201);
  vertex(387,199);
  vertex(387,211);
  vertex(383,203);
  vertex(375,203);
  vertex(380,197);
  vertex(377,191);
  endShape();
  
  stroke(1);
	strokeWeight(1);
  fill(255,255,255);
  rect(0,0,15,15);
  
  stroke(1);
	strokeWeight(1);
  fill(255,255,255);
  beginShape();
  vertex(374,228);
  vertex(385,228);
  vertex(385,236);
  vertex(392,236);
  vertex(392,246);
  vertex(374,246);
  vertex(374,228);
  endShape();
  
  
}