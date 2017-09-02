
function setup(){ 
  createCanvas(400, 400);
  background(214,262,24);
///  rectangulo
  noStroke();
  fill(226,191,179);
  rect(0,294,400,35);

  
/// triangulos amarillos izquierda
  for( var posX=17;posX<=170;posX=posX+30){
    noStroke();
    fill(253,165,0);
    triangle(posX,294,posX,328,posX+33,328);
}
  /// Rectangulo debajo de triamgulos boca abajo
    noStroke();
    fill(234,202,181);
    rect(0,329,400,32);
  
/// triangulos invertidos amarillos 
  for( var posX2=50;posX2<=204;posX2=posX2+30){
    noStroke();
    fill(226,186,41);
    triangle(posX2-33,328,posX2,328,posX2,362);
}
   
/// triangulos amarillos derecha
  for( var posX3=232;posX3<=395;posX3=posX3+30){
    noStroke();
    fill(253,165,0);
    triangle(posX3-32,328,posX3,294,posX3,328);
}

/// triangulos amarillos derecha invertidos
  for( var posX4=200;posX4<=363;posX4=posX4+30){
    noStroke();
    fill(226,186,41);
    triangle(posX4,328,posX4+32,328,posX4,362);
}
 /// cuadrado azul debajo debajo de triangulos verdes
     
     noStroke();
     fill(117,137,168);
     rect(0,361,400,22);
//// triangulos azules 
  
  for( var posX5=50;posX5<=200;posX5=posX5+30){
    noStroke();
    fill(14,117,67);
    triangle(posX5-33,361,posX5,361,posX5,384);
}
/// triangulos azules derecha
    
 for( var posX6=200;posX6<=362;posX6=posX6+30){
    noStroke();
   fill(14,117,67);
   triangle(posX6+31,361,posX6,361,posX6,384);
}
/// rectangulo de fondo (cuadrados naranjas)
  
   noStroke();
   fill(237,216,195);
   rect(0,383,400,17);
/// cuadrados de abajo (naranjas)
  
   for (var posX7=23;posX7<=168;posX7=posX7+67){
     noStroke();
     fill(195,137,87);
     rect(posX7,383,12,17);
}
  
/// cuadrados de abajo (de izquierda a derecha) 
   
  for (var posX29=231;posX29<=379;posX29=posX29+66){
       noStroke();
       fill(195,137,87);
       rect(posX29,383,12,17);
}
  
  
/// rectangulo balnco con ciruclos rojos y triangulos
  
   noStroke();
   fill(217,202,202);
   rect(0,243,400,51);
  
/// circulos rojos izquierda
  
   for( var posX8=52;posX8<=193;posX8=posX8+68){
     noStroke();
     fill(255,0,0);
     ellipse(posX8+5,280,8,10);
}
/// circulos rojos derecha
  
   for( var posX10=205;posX10<=346;posX10=posX10+68){
     noStroke();
     fill(255,0,0);
     ellipse(posX10+5,280,8,10);
}
  
  
  //// triangulos rosados
  
  for( var posX9=-35;posX9<=427;posX9=posX9+66){
     noStroke();
     fill(239,184,145);
     triangle(posX9+64,243,posX9+36,263,posX9,243);
}
  
/// cuadrado azul, triangulos rojos
   
    noStroke();
    fill(148,144,174);
    rect(0,215,400,28);
  
/// triangulos rojos 
  
   for( var posX11=-42;posX11<=462;posX11=posX11+64){
     noStroke();
     fill(202,9,20);
     triangle(posX11+46,215,posX11+90,243,posX11,243);
}
  
/// triangulos amarillos
    
   for( var posX12=-36;posX12<=400;posX12=posX12+65){
     noStroke();
     fill(244,159,55);
     triangle(posX12+36,233,posX12+72,243,posX12,243);
}
/// rectangulos cafe y rodado, rombos

/// rectangulo cafe
  
    noStroke();
    fill(242,193,118);
    rect(0,194,400,21);
/// lineas naranja de fondo
  
   for( var posY=198;posY<=212;posY=posY+4){
     strokeWeight(1);
     stroke(208,155,86);
     line(0,posY,400,posY);
}
//// mitad de abajo del rombo
   
   for( var posX13=-30;posX13<=430;posX13=posX13+65){
     noStroke();
     fill(210,98,21);
     triangle(posX13+64,195,posX13+31,214,posX13,195);
}
/// rectangulo cafe de fondo
  
     noStroke();
     fill(170,110,73);
     rect(0,161,400,35);
/// mitad de arriba del rombo
    
     for( var posX14=-30;posX14<=430;posX14=posX14+65){
       noStroke();
       fill(210,98,21);
       triangle(posX14+31,178,posX14+64,196,posX14,196);
}
/// medios circulos amarillos
  
    for( var posX15=5;posX15<=396;posX15=posX15+33){
      noStroke();
      fill(238,190,83);
      ellipse(posX15+15,163,30,23);
}
  
/// rectangulo que cubre circulos amarillos
   
     noStroke();
     fill(231,159,48);
     rect(0,139,400,22);
/// medios circulos rosados
    
     for( var posX16=5;posX16<=394;posX16=posX16+33){
       noStroke();
       fill(239,200,167);
       ellipse(posX16+15,143,30,35);
}
/// rectangulo morado, debajo de circulos piel
  
      noStroke();
      fill(63,25,43);
      rect(0,117,400,22);
/// medios circulos piel
      for( var posX17=5;posX17<=394;posX17=posX17+33){
       noStroke();
       fill(171,123,92);
       ellipse(posX17+15,121,30,35);
}
/// rectangulo rosado, debajo de cuadrados
  
      noStroke();
      fill(255,204,172);
      rect(0,103,400,14);
/// cuadrados rojos de abajo (izquierda)
  
      for( var posX18=5;posX18<=188;posX18=posX18+33){
        noStroke();
        fill(187,0,0);
        rect(posX18+11,104,10,13);
/// cuadrados piel (izquierda)
        
      for( var posX19=26;posX19<=200;posX19=posX19+33){
        noStroke();
        fill(240,182,140);
        rect(posX19,104,12,13);
}
/// cuadrados rojos de abajo (derecha)
     
      for( var posX20=210;posX20<=384;posX20=posX20+33){
        noStroke();
        fill(187,0,0);
        rect(posX20+5,104,10,13);
}
/// cuadrados piel abajo (derecha)
        
      for( var posX21=200;posX21<=395;posX21=posX21+33){
        noStroke();
        fill(240,182,140);
        rect(posX21+5,104,12,13);
}


/// rectangulo blanco de arriba 
        
        noStroke();
        fill(223,202,176);
        rect(0,70,400,19);
/// rectangulo naranja del medio
        
        noStroke();
        fill(216,133,100);
        rect(0,53,400,17);
/// recatangulo rosado del medio
        
        noStroke();
        fill(209,205,198);
        rect(0,30,400,23);
        
/// rectangulo cafe de arriba 
        
        noStroke();
        fill(168,132,103);
        rect(0,13,400,17);
/// lineas de izquierda a derecha 
 
      for( var posX26=-24;posX26<=394;posX26=posX26+11){
        strokeWeight(1);
        stroke(1,1,1);
        line(posX26,89,posX26+42,13);
}
/// lineas de deracha a izquierda
        
      for( var posX27=17;posX27<=425;posX27=posX27+11){
        strokeWeight(1);
        stroke(1,1,1);
        line(posX27,87,posX27-42,14);
}        
 ///  rectangulo piel (arriba)
        
      noStroke();
      fill(255,204,172);
      rect(0,89,400,14);
      
/// cuadrados carmesi izquierda (arriba)
        
      for( var posX22=5;posX22<=177;posX22=posX22+33){
        noStroke();
        fill(133,10,0);
        rect(posX22+5,90,10,14);   
}

/// cuadrados carmesi derecha (arriba)
        
      for (var posX23=220;posX23<=394;posX23=posX23+33){
        noStroke();
        fill(133,10,0);
        rect(posX23+5,90,11,14);
}
        
/// cuadrados piel izquierda (arriba)
        
      for ( var posX24=27;posX24<=167;posX24=posX24+33){
        noStroke();
        fill(229,158,89);
        rect(posX24+6,90,10,14);
}
        
/// cuadrados piel derecha (derecha)
        
      for( var posX25=231;posX25<=372;posX25=posX25+33){
        noStroke();
        fill(229,158,89);
        rect(posX25+5,90,10,14);
}
        
/// rectangulo rosado de arriba 
        
      noStroke();
      fill(225,199,162);
      rect(0,0,400,13);
/// cuadrados de arriba
      
      for( var posX28=17;posX28<=386;posX28=posX28+32){
        noStroke();
        fill(132,137,154);
        rect(posX28,0,10,13);
}
        
/// rectangulos nr¿egros de los lados
 
    for( var posX30=0;posX30<=400;posX30=posX30+390){
      noStroke();
      fill(1,1,1);
      rect(posX30,243,9,156);
}
        
        
        
        
}
}
  

 

