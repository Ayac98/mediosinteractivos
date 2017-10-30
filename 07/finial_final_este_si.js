var miimag1;
var miimag2;
var miimag3;
var miimag4;
var miimag5;
var miimag6;
var miimag7;
var miimag8;
var miimag9;
var miimag10;

var  miimag11;
var  miimag12;
var  miimag13;
var  miimag14;
var  miimag15;
var  miimag16;
var  miimag17;
var  miimag18;
var  miimag19;
var  miimag20;

var  miimag21;
var  miimag22;
var  miimag23;
var  miimag24;
var  miimag25;
var  miimag26;
var  miimag27;
var  miimag28;
var  miimag29;
var  miimag30;

var  miimag31;
var  miimag32;
var  miimag33;
var  miimag34;
var  miimag35;
var  miimag36;
var  miimag37;
var  miimag38;
var  miimag39;
var  miimag40;

var  miimag41;
var  miimag42;
var  miimag43;
var  miimag44;
var  miimag45;
var  miimag46;
var  miimag47;
var  miimag48;
var  miimag49;
var  miimag50;

var  miimag51;
var  miimag52;
var  miimag53;
var  miimag54;
var  miimag55;
var  miimag56;
var  miimag57;
var  miimag58;
var  miimag59;
var  miimag60;

var  miimag61;
var  miimag62;
var  miimag63;
var  miimag64;
var  miimag65;
var  miimag66;
var  miimag67;
var  miimag68;
var  miimag69;
var  miimag70;

var tamX = 10;
var tamY = 10;

var name = "flipbook";

var x = [];
var y = [];

var cant = 450;

function preload() {
  miimag1 = loadImage("data/imagen1.png");
  miimag2 = loadImage("data/imagen2.jpg");
  miimag3 = loadImage("data/imagen3.jpg");
  miimag4 = loadImage("data/imagen4.jpg");
  miimag5 = loadImage("data/imagen5.jpg");
  miimag6 = loadImage("data/imagen6.jpg");
  miimag7 = loadImage("data/imagen7.jpg");
  miimag8 = loadImage("data/imagen8.jpg");
  miimag9 = loadImage("data/imagen9.jpg");
  miimag10 = loadImage("data/imagen10.jpg");
  miimag11 = loadImage("data/imagen11.jpg");
  miimag12 = loadImage("data/imagen12.jpg");
  miimag13 = loadImage("data/imagen13.jpg");
  miimag14 = loadImage("data/imagen14.jpg");
  miimag15 = loadImage("data/imagen15.jpg");
  miimag16 = loadImage("data/imagen16.jpg");
  miimag17 = loadImage("data/imagen17.jpg");
  miimag18 = loadImage("data/imagen18.jpg");
  miimag19 = loadImage("data/imagen19.jpg");
  miimag20 = loadImage("data/imagen20.jpg");
  miimag21 = loadImage("data/imagen21.jpg");
  miimag22 = loadImage("data/imagen22.jpg");
  miimag23 = loadImage("data/imagen23.jpg");
  miimag24 = loadImage("data/imagen24.jpg");
  miimag25 = loadImage("data/imagen25.jpg");
  miimag26 = loadImage("data/imagen26.jpg");
  miimag27 = loadImage("data/imagen27.jpg");
  miimag28 = loadImage("data/imagen28.jpg");
  miimag29 = loadImage("data/imagen29.jpg");
  miimag30 = loadImage("data/imagen30.jpg");
  miimag31 = loadImage("data/imagen31.jpg");
 miimag32 = loadImage("data/imagen32.jpg");
 miimag33 = loadImage("data/imagen33.jpg");
 miimag34 = loadImage("data/imagen34.jpg");
 miimag35 = loadImage("data/imagen35.jpg");
 miimag36 = loadImage("data/imagen36.jpg");
 miimag37 = loadImage("data/imagen37.jpg");
 miimag38 = loadImage("data/imagen38.jpg");
 miimag39 = loadImage("data/imagen39.jpg");
 miimag40 = loadImage("data/imagen40.jpg");
 miimag41 = loadImage("data/imagen41.jpg");
 miimag42 = loadImage("data/imagen42.jpg");
 miimag43 = loadImage("data/imagen43.jpg");
 miimag44 = loadImage("data/imagen44.jpg");
 miimag45 = loadImage("data/imagen45.jpg");
 miimag46 = loadImage("data/imagen46.jpg");
 miimag47 = loadImage("data/imagen47.jpg");
 miimag48 = loadImage("data/imagen48.jpg");
 miimag49 = loadImage("data/imagen49.jpg");
 miimag50 = loadImage("data/imagen50.jpg");
 miimag51 = loadImage("data/imagen51.jpg");
 miimag52 = loadImage("data/imagen52.jpg");
 miimag53 = loadImage("data/imagen53.jpg");
 miimag54 = loadImage("data/imagen54.jpg");
 miimag55 = loadImage("data/imagen55.jpg");
 miimag56 = loadImage("data/imagen56.jpg");
 miimag57 = loadImage("data/imagen57.jpg");
 miimag58 = loadImage("data/imagen58.jpg");
 miimag59 = loadImage("data/imagen59.jpg");
 miimag60 = loadImage("data/imagen60.jpg");
miimag61 = loadImage("data/imagen61.jpg");
 miimag62 = loadImage("data/imagen62.jpg");
 miimag63 = loadImage("data/imagen62.jpg");
 miimag64 = loadImage("data/imagen63.jpg");
 miimag65 = loadImage("data/imagen64.jpg");
 miimag66 = loadImage("data/imagen65.jpg");
 miimag67 = loadImage("data/imagen66.jpg");
 miimag68 = loadImage("data/imagen67.jpg");
 miimag69 = loadImage("data/imagen68.jpg");
 miimag70 = loadImage("data/imagen69.jpg");
}

function setup() {
 createCanvas(241, 156);
 frameRate(8);
//background(220);



}
  

function draw() {
 // background(220);
  
 
  image(miimag1, 0, 0);
  //}
  if (millis() > 100 && millis() < 20000) {
     fill(1,156,1);
    rect(0,0,550,300);  
    image(miimag2, 0, 0);
  }
  if (millis() > 200 && millis() < 300) {
    image(miimag3, 0, 0);
  }
  if (millis() > 300 && millis() < 400) {
    image(miimag4, 0, 0);
  }
  if (millis() > 400 && millis() < 500) {
    image(miimag5, 0, 0);
  }
  if (millis() > 500 && millis() < 600) {
    image(miimag6, 0, 0);
  }
  if (millis() > 600 && millis() < 800) {
    image(miimag7, 0, 0);
  }
  if (millis() > 800 && millis() < 900) {
    image(miimag8, 0, 0);
  }
  if (millis() > 900 && millis() < 1000) {
    image(miimag9, 0, 0);
  }
  if (millis() > 1000 && millis() < 1100) {
    image(miimag10, 0, 0);
  }
 if (millis() > 1100 && millis() < 1200) {
    image(miimag11, 0, 0);
  }
 if (millis() > 1200 && millis() < 1300) {
    image(miimag12, 0, 0);
  }
 if (millis() > 1300 && millis() < 1400) {
    image(miimag13, 0, 0);
  }
 if (millis() > 1400 && millis() < 1500) {
    image(miimag14, 0, 0);
  }
 if (millis() > 1500 && millis() < 1600) {
    image(miimag15, 0, 0);
  }
 if (millis() > 1600 && millis() < 1700) {
    image(miimag16, 0, 0);
  }
 if (millis() > 1700 && millis() < 1800) {
    image(miimag17, 0, 0);
  }
if (millis() > 1800 && millis() < 1900) {
    image(miimag18, 0, 0);
  }
 if (millis() > 1900 && millis() < 2000) {
    image(miimag19, 0, 0);
  }
if (millis() > 2000 && millis() < 2100) {
    image(miimag20, 0, 0);
  }
if (millis() > 2100 && millis() < 2200) {
    image(miimag21, 0, 0);
  }
if (millis() > 2200 && millis() < 2300) {
    image(miimag22, 0, 0);
  }
if (millis() > 2300 && millis() < 2400) {
    image(miimag23, 0, 0);
  }
if (millis() > 2400 && millis() < 2500) {
    image(miimag24, 0, 0);
  }
if (millis() > 2500 && millis() < 2600) {
    image(miimag25, 0, 0);
  }
if (millis() > 2600 && millis() < 2700) {
    image(miimag26, 0, 0);
  }
if (millis() > 2700 && millis() < 2800) {
    image(miimag27, 0, 0);
  }
if (millis() > 2800 && millis() < 2900) {
    image(miimag28, 0, 0);
  }
if (millis() > 2900 && millis() < 3000) {
    image(miimag29, 0, 0);
  }
if (millis() > 3000 && millis() < 3100) {
    image(miimag30, 0, 0);
  }
if (millis() > 3100 && millis() < 3200) {
    image(miimag31, 0, 0);
  }
if (millis() > 3200 && millis() < 3300) {
    image(miimag32, 0, 0);
  }
if (millis() > 3300 && millis() < 3400) {
    image(miimag33, 0, 0);
  }
if (millis() > 3400 && millis() < 3500) {
    image(miimag34, 0, 0);
  }
if (millis() > 3500 && millis() < 3600) {
    image(miimag35, 0, 0);
  }
if (millis() > 3600 && millis() < 3700) {
    image(miimag36, 0, 0);
  }
if (millis() > 3700 && millis() <3800) {
    image(miimag37, 0, 0);
  }
if (millis() > 3800 && millis() < 3900) {
    image(miimag38, 0, 0);
  }
if (millis() > 3900 && millis() < 4000) {
    image(miimag39, 0, 0);
  }
if (millis() > 4000 && millis() < 4100) {
    image(miimag40, 0, 0);
  }
if (millis() > 4100 && millis() < 4200) {
    image(miimag41, 0, 0);
  }
if (millis() > 4200 && millis() < 4300) {
    image(miimag42, 0, 0);
  }
if (millis() > 4300 && millis() < 4400) {
    image(miimag43, 0, 0);
  }
if (millis() > 4400 && millis() < 4500) {
    image(miimag44, 0, 0);
  }
if (millis() > 4500 && millis() < 4600) {
    image(miimag45, 0, 0);
  }
if (millis() > 4600 && millis() < 4700) {
    image(miimag46, 0, 0);
  }
if (millis() > 4700 && millis() < 4800) {
    image(miimag47, 0, 0);
  }
if (millis() > 4800 && millis() < 4900) {
    image(miimag48, 0, 0);
  }
if (millis() > 4900 && millis() < 5000) {
    image(miimag49, 0, 0);
  }
if (millis() > 5000 && millis() < 5100) {
    image(miimag50, 0, 0);
  }
if (millis() > 5100 && millis() < 5200) {
    image(miimag51, 0, 0);
  }
if (millis() > 5200 && millis() < 5300) {
    image(miimag52, 0, 0);
  }
if (millis() >5300 && millis() < 5400) {
    image(miimag53, 0, 0);
  }
if (millis() > 5400 && millis() < 5500) {
    image(miimag54, 0, 0);
  }
if (millis() > 5500 && millis() < 5600) {
    image(miimag55, 0, 0);
  }
if (millis() > 5600 && millis() < 5700) {
    image(miimag56, 0, 0);
  }
if (millis() > 5700 && millis() < 5800) {
    image(miimag57, 0, 0);
  }
if (millis() > 5800 && millis() < 5900) {
    image(miimag58, 0, 0);
  }
if (millis() > 5900 && millis() < 6000) {
    image(miimag59, 0, 0);
  }
if (millis() > 6000 && millis() < 6100) {
    image(miimag60, 0, 0);
  }
if (millis() > 6100 && millis() < 6200) {
    image(miimag61, 0, 0);
  }
if (millis() > 6200 && millis() < 6300) {
    image(miimag62, 0, 0);
  }
if (millis() > 6300 && millis() < 6400) {
    image(miimag63, 0, 0);
  }
if (millis() > 6400 && millis() < 6500) {
    image(miimag64, 0, 0);
  }
if (millis() > 6500 && millis() < 6600) {
    image(miimag65, 0, 0);
  }
if (millis() > 6600 && millis() < 6700) {
    image(miimag66, 0, 0);
  }
if (millis() > 6700 && millis() < 6800) {
    image(miimag67, 0, 0);
  }
if (millis() > 6800 && millis() < 6900) {
    image(miimag68, 0, 0);
  }
if (millis() > 6900 && millis() < 7000) {
    image(miimag69, 0, 0);
  }
if (millis() > 7000 && millis() < 7100) {
  image(miimag70, 0, 0);
  }
/// Animacion digital

if (millis() > 100 && millis() < 5100) {
  noStroke(),
  fill(93,93,93,50);
  ellipse(0,0,tamX,tamY);
  tamX = tamX + 20;
  tamY = tamY + 20;
}

if (millis () > 5100 && millis() < 7000) {
  noStroke();
  fill(93,93,93,30);
  ellipse(209,76,tamX,tamY);
  tamX = tamX + 20;
  tamY = tamY + 20;
}


 if (frameCount < 70) {
    //saveCanvas(name+frameCount, 'jpg');
  }

}