function preload(){
  miCancion=loadSound("sonido/parte del audio.mp3");
}

var x = 50;
var dirX = 1;
var velX = 10;
var tamX=50;
var x2= 0;
var y2=0;
var x3 = 0;
var y3 = 0;
var x4 = 0;
var y4 = 0;
var y = 50;
var y3 = 0;
var x5 = 0;
var y5 = 0;
var x6 = 0;
var y6 = 0;
var x7 = 0;
var y7 = 0;
var x8 = 0;
var y8 = 8;
var x9 = 0;
var y9 = 0;

var dirY = 1;
var velY = 10;
var tamY=50;

var tamX2 = 0;
var tamX3 = 0;
var tamX4 = 0;
var tamY2 = 0;
var tamY3 = 0;
var tamY4 = 0;
var tamX5 = 0;
var tamY5= 0;
var tamX9 = 0;
var tamY9 = 0;
function setup() { 
  createCanvas(400, 400);
miCancion.play();
  comienzo=millis();
  print(comienzo);
} 

function draw() { 
  background(113,255,182);
if (millis() > 600 && millis() < 750) {
    noStroke();
    fill(122,200,204);
    ellipse(x + 15, 110, 100, 100);
}
if (millis() > 850 && millis() < 950) {
    noStroke();
    fill(122,200,204);
    ellipse(x + 150, 110, 100, 100);
}
if (millis() > 1000 && millis() < 1150) {
    noStroke();
    fill(122,200,204);
    ellipse(x + 284,110, 100, 100);
}
//// de derececha a izquierda
  if (millis() > 1300 && millis() <1450) {
    noStroke();
    fill(122,200,204);
    ellipse(x + 284, 300, 100, 100);
}

 if (millis() > 1550 && millis() <1650) {
    noStroke();
    fill(122,200,204);
    ellipse(x + 150, 300, 100, 100);
}

   if (millis() > 1750 && millis() <1850) {
    noStroke();
    fill(122,200,204);
    ellipse(x + 15, 300, 100, 100);
}
/// circulos de arriba hacia abajo
  
    if (millis() > 1950&&millis()<5000){
    noStroke();
    fill(0,115,153);
    ellipse(132,y,100,100);
}
  
   if (millis() > 2200&&millis()<5000){
    noStroke();
    fill(0,125,153);
    ellipse(132,y+100,100,100);
}
   if (millis() > 2450&&millis()<5000){
    noStroke();
    fill(0,135,153);
    ellipse(132,y+200,100,100);
}
  if (millis() > 2700&&millis()<5000){
    noStroke();
    fill(0,145,153);
    ellipse(132,y+300,100,100);
}
  
/// circulos abaajo hacia arriba
  
  if (millis() > 2800&&millis()<5000){
    noStroke();
    fill(0,155,153);
    ellipse(267,y+300,100,100);
}

  if (millis() > 3000&&millis()<5000){
    noStroke();
    fill(0,165,153);
    ellipse(267,y+200,100,100);  
}
  
  if (millis() > 3200&&millis()<5000){
    noStroke();
    fill(0,175,153);
    ellipse(267,y+100,100,100);  
}  
    if (millis() > 3400&&millis()<5000){
    noStroke();
    fill(0,185,153);
    ellipse(267,y,100,100);  
}  
  
/// circulo que sale de la mitad
    
  if (millis() > 3500&&millis()<15000){
    noStroke();
    fill(0,200,153);
    ellipse(x+150,y+150,tamX+50,tamY+50);  
    tamX=tamX+25;
    tamY=tamY+25;
}  
/// cuadrados dearriba hacia abajo
    
    if(millis () > 3800&&millis()<11000){
      noStroke();
      fill(0,255,255);
      rect(x2+56,y2+400,50,tamY2+50);
      tamY2=tamY2 - 21;
}
  
   if(millis () > 4600&&millis()<11000){
      noStroke();
      fill(0,255,255);
      rect(x3+300,y3+0,tamX3+50,tamY3+50);
      tamY3=tamY3 + 21;
}
  
/// circulos del centro
  
  if (millis() > 5200 && millis() < 8000) {
    noStroke();
    fill(31,255,96);
    ellipse(156, 150, 32, 32);
}
  
  if (millis() > 5300 && millis() < 8000) {
    noStroke();
    fill(31,255,106);
    ellipse(196, 150, 32, 32);
}
  
  if (millis() > 5500 && millis() <8000) {
    noStroke();
    fill(31,255,116);
    ellipse(236, 150, 32, 32);
}
  
   if (millis() > 5700 && millis() <8000) {
    noStroke();
    fill(31,255,126);
    ellipse(236, 200, 32, 32);
}
  
   if (millis() > 5900 && millis() <8000) {
    noStroke();
    fill(31,255,136);
    ellipse(236, 150, 32, 32);
}
   if (millis() > 6100 && millis() <8000) {
    noStroke();
    fill(31,255,146);
    ellipse(196, 200, 32, 32);
}
 
  if (millis() > 6300 && millis() <8000) {
    noStroke();
    fill(31,255,156);
    ellipse(156, 200, 32, 32);
}
  
  if (millis() > 6500 && millis() <8000) {
    noStroke();
    fill(31,255,166);
    ellipse(156, 250, 32, 32);
}
  if (millis() > 6700 && millis() <8000) {
    noStroke();
    fill(31,255,176);
    ellipse(196, 250, 32, 32);
}
  if (millis() > 6900 && millis() <8000) {
    noStroke();
    fill(31,255,186);
    ellipse(236, 250, 32, 32);
}
  
/// rectangulos de izquierda a derecha
  
     if(millis () > 7200&&millis()<11000){
      noStroke();
      fill(0,255,255);
      rect(x4+400,y4+57,tamX4,tamY4+50);
      tamX4=tamX4 - 21;
}
  
   if(millis () > 7800&&millis()<11000){
      noStroke();
      fill(0,255,255);
      rect(x5,y5+300,tamX5+50,tamY5+50);
      tamX5=tamX5 + 21;
}
/// trinagulos
   if (millis() > 9050 && millis() < 10400) {
    noStroke();
    fill(255, 195, 25);
    triangle(x6, y6+59, x6, y6+100, x6+50, y6+80);
    x6= x6 + (11 * dirX);
}
  if (millis() > 9500 && millis() < 10400) {
    noStroke();
    fill(255, 195, 25);
    triangle(x7 + 302, y7, x7 + 315, y7 + 34, x7+328, y7);
    y7= y7 +(11 * dirY);
}
   if (millis() > 10000&& millis() < 12000) {
    noStroke();
    fill(255, 195, 25);
    triangle(x8+400,303, x8+400,329, x8+366, 316);
    x8= x8 -(11 * dirX);
}
    if (millis() > 10500 && millis() < 12000) {
    noStroke();
    fill(255, 195, 25);
    triangle(58, y8+400, 85, y8 + 400, 71, y8+366);
    y8= y8 -(11 * dirY);
}
  
/// cuadrados de la mitad 
  
  if (millis() > 11700 && millis() < 15000) {
    noStroke();
    fill(50,99,215);
    rect(12,15,171,171);
}
 if (millis() > 12000 && millis() < 15000) {
    noStroke();
    fill(50,109,215);
    rect(211,210,171,171);
}
  if (millis() > 12300 && millis() < 15000) {
    noStroke();
    fill(50,119,215);
    rect(121,121,147,147);
}
  
  if (millis() > 12600 && millis() < 15000) {
    noStroke();
    fill(50,129,215);
    rect(211,15,171,171);
}
   if (millis() > 12900 && millis() < 15000) {
    noStroke();
    fill(50,139,215);
    rect(12,210,171,171);
}
 
    if (millis() > 12900 && millis() < 15000) {
    noStroke();
    fill(50,139,215);
    rect(158,158,72,72);
}
/// circulos dentro de cuadrados
  
  
   if (millis() > 13200 && millis() <15000) {
    noStroke();
    fill(108,144,215);
    ellipse(98, 101, 77, 77);
}
  
   if (millis() > 13400 && millis() <15000) {
    noStroke();
    fill(108,144,215);
    ellipse(296,101, 77, 77);
}
   
   if (millis() > 13600 && millis() <15000) {
    noStroke();
    fill(108,144,215);
    ellipse(98,296, 77, 77);
}
  
   
   if (millis() > 13800 && millis() <15000) {
    noStroke();
    fill(108,144,215);
    ellipse(296,296, 25, 25);
}
  
  if (millis() > 14000 && millis() <15000) {
    noStroke();
    fill(108,144,215);
    ellipse(141,140, 25, 25);
}
  if (millis() > 14200 && millis() <15000) {
    noStroke();
    fill(108,144,215);
    ellipse(141,248, 25, 25);
}
  if (millis() > 14400 && millis() <15000) {
    noStroke();
    fill(108,144,215);
    ellipse(248,248, 25, 25);
}
  if (millis() > 14600 && millis() <15000) {
    noStroke();
    fill(108,144,215);
    ellipse(248,140, 25, 25);
}
  
  if (millis() > 14800&&millis()<15000){
    noStroke();
    fill(0,200,153);
    ellipse(x9+194,y9+194,tamX9+50,tamY9+50);  
    tamX9=tamX9+25;
    tamY9=tamY9+25;
}  
  
  
  
  
}
