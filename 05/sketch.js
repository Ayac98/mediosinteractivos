
 function setup() {
   createCanvas(400, 400);
   angleMode(DEGREES);
 }

 function draw() {
   background(136,249,212);
   translate(200, 200);
   rotate(-90);
/// Variables
   /// variable Horas
   var hr = hour();
   /// variable Minutos
   var mn = minute();
   /// variable segundos
   var sc = second();
   /// variable Dias
   var d = day();


/// Rotacion de la figura 
 rotate(radians(frameCount));

///  Linea azul claro (Dias)
   strokeWeight(8);
   stroke(26, 125, 215);
   noFill();  
/// Map Dias  
   var dayAngle = map(d, 0, 31, 0, 180);
   arc(0, 0, 260, 180, 0, dayAngle);
   
/// Arco negro exterior 
   push();
   noFill();
   strokeWeight(1);
   stroke(1,1,1);
   ellipse(0,0,268,187);
   pop();
/// Arco negro interior  
   push();
   noFill();
   strokeWeight(1);
   stroke(1,1,1);
   ellipse(0,0,255,172);
   pop();
   
/// Lineas amarilla (segundos)
   strokeWeight(8);
   stroke(242, 184, 9);
   noFill();
/// Map segundos 
   push();
   var secondAngle = map(sc, 0, 60, 0, 360);
   arc(0, 0, 51, 300, 0, secondAngle);
   pop();
/// Arco interior  
   push();
   noFill();
   strokeWeight(1);
   stroke(1,1,1);
   ellipse(0,0,44,288);
   pop();
///Arco exterior
    push();
   noFill();
   strokeWeight(1);
   stroke(1,1,1);
   ellipse(0,0,60,306);
   pop();

/// Lineas naranja clara ( minutos)
   strokeWeight(8);
   stroke(243, 116, 2);
   noFill();
   
///  Map minutos
   var minuteAngle = map(mn, 0, 60, 0, 360);
   arc(0, 0, 260,260, 0, minuteAngle);

///  Arco naranja claro interior
   push();
   noFill();
   strokeWeight(1);
   stroke(1,1,1);
   ellipse(0,0,251,251);
   pop();
/// Arco naranja claro exterior
   push();
   noFill();
   strokeWeight(1);
   stroke(1,1,1);
   ellipse(0,0,266,266);
   pop();

   
 ///  Linea naranja oscura (Horas)
   strokeWeight(8);
   stroke(243, 70, 5);
   noFill();
/// Map Horas 
   var hourAngle = map(hr, 0, 12, 0, 180);
   arc(0, 0, 260, 50, 0, hourAngle);
   
   
/// Arco naranja oscuro interior
   push();
   noFill();
   strokeWeight(1);
   stroke(1,1,1);
   ellipse(0,0,253,41);
   pop();
/// Arco naranja oscuro Exterior 
   push();
   noFill();
   strokeWeight(1);
   stroke(1,1,1);
   ellipse(0,0,268,58);
   pop();
   

   
    
 }