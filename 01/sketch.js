function setup() { 
  createCanvas(400, 400);
  background(231,216,176);
  
 
  /// circulos a la mitad rojo y negro
 
  strokeWeight(3);
  stroke(171,101,73);
  ellipse(38.8,261.4,33.5,37);
  
  strokeWeight(1);
  stroke(1,1,1);
  fill(231,216,176);
  ellipse(37.9,260.6,30,32.4);
  
  strokeWeight(2);
  stroke(171,101,73);
  ellipse(8.3,278.1,34.2,27.5);
  
  strokeWeight(1);
  stroke(1,1,1);
  fill(231,216,173);
  ellipse(8.4,279.6,34.2,27.5);
  
  strokeWeight();
  fill(231,216,173);
  beginShape();
  vertex(55.1,244.6);
  vertex(78.3,256.5);
  vertex(0,314.2);
  vertex(0,279.4);
  vertex(20.6,279.4);
  endShape(CLOSE);
    
 /// CUADRO BLANCO
  
  strokeWeight();
  fill(244,400);
  beginShape();
  vertex(78.3,310);
  vertex(114.9,283.7);
  vertex(158,366.2);
  vertex(125.7,389.6);
  endShape(CLOSE);
  
  /// lineas
 
  strokeWeight(2);
  beginShape();
  fill(244,400);
  vertex(83.1,184.8)
  vertex(103.7,173.5);
  vertex(235,400);
  vertex(200,400);
  endShape(CLOSE);
  
   strokeWeight(2);
  beginShape();
  fill(244,400);
  vertex(400,11); 
  vertex(400,41.6);
  vertex(76.6,218.3);
  vertex(64.2,195.9);
  endShape(CLOSE);
 

  strokeWeight(2);
  beginShape();
  fill(244,400);
  vertex(400,41.6); 
  vertex(400,67.6);
  vertex(89.1,239);
  vertex(76.6,218.3);
  endShape(CLOSE);
  
  
  strokeWeight(2);
  beginShape();
  fill(244,400);
  vertex(64.2,195.9);
  vertex(182.3,400);
  vertex(200,400);
  vertex(83.1,184.8);
  endShape(CLOSE);
  
  strokeWeight(2);
  beginShape();
  fill(244,400);
  vertex(277.1,135.4);
  vertex(289,156.69);
  vertex(100,259.3);
  vertex(89.1,239);
  endShape(CLOSE);
 
  strokeWeight(2);
  beginShape();
  fill(244,400);
  vertex(122.5,163.1);
  vertex(103.7,173.5);
  vertex(175.7,298.4);
  vertex(187.6,290.1);
  endShape(CLOSE);
  
  strokeWeight(2);
  beginShape();
  fill(244,400);
  vertex(283.3,160.5);
  vertex(292.6,180.4);
  vertex(166.6,249);
  vertex(156.4,229.2);
  endShape(CLOSE);
  
  strokeWeight();
  fill(181,190,166);
  beginShape();
  vertex(158.7,173.5);
  vertex(172.3,193.1);
  vertex(145.5,207.9);
  vertex(134.6,186.6);
  endShape(CLOSE);
  
  
  
  
  /// circulo detras de las lineas
  strokeWeight(1);
  fill(231,216,176);
  ellipse(39.6,27.1,46.6,46.6);
  
  /// cuadrado que tapa a circulo puqueño
   strokeWeight();
  fill(231,216,176);
  beginShape();
   vertex(45.6,4.17);
   vertex(65.6,4.1); 
   vertex(65.6,50.3);
   vertex(45.6,50.3);
  endShape(CLOSE);
  
  /// cuadrado rojo
  strokeWeight();
  beginShape();
  fill(186,71,46,100);
  vertex(32.7,174);
  vertex(116.5,174);
  vertex(116.5,239);
  vertex(32.7,239.5);
  endShape(CLOSE);
  
 /// cuadrado negro
  strokeWeight();
  beginShape();
  fill(1,1,1);
  vertex(283.3,160.6);
  vertex(314.2,143.2);
  vertex(324.4,163.1);
  vertex(292.6,180.4);
  endShape(CLOSE);
    
 // Circulo amarillo
  strokeWeight();
  fill(218,194,122,200); 
  ellipse(311,130,72.4,72.4);
  
  //// circulo azul 
  strokeWeight();
  fill(119,168,185,200);
  ellipse(311,130,55.9,55.9);
  
 /// lineas
  
  strokeWeight(1);
  stroke(1,1,1);
  line(0,256.7,49.5,213.1);
  
  strokeWeight(1);
  stroke(1,1,1);
  line(0,277,63,217.5);
  
  strokeWeight(2);
  stroke(1,1,1);
  line(375,297,372,400);
  
  strokeWeight(2);
  stroke(1,1,1);
  line(309.2,380.5,372.4,382.7);
  
  strokeWeight(2);
  stroke(1,1,1);
  line(318,345.5,373.2,347.2);
  
  strokeWeight(3);
  stroke(1,1,1);
  line(50,277.7,0,317);
    
  /// trapecios
  strokeWeight(2);
  beginShape();
  fill(188,190,162);
  vertex(172.3,193.1);
  vertex(206.8,174.1);
  vertex(224.3,191.8);
  vertex(187.5,211.8);
  endShape(CLOSE);
  
  strokeWeight(1);
  beginShape();
  fill(1,1,1);
  vertex(347.4,157.49);
  vertex(364.1,146.1);
  vertex(375,166.8);
  vertex(357.5,176.2);
  endShape(CLOSE);

  ///// Cuadrados
  
  strokeWeight(2);
   beginShape();
  fill(171,168,145);
   vertex(252.8,91.5);
   vertex(279.4,76.9); 
   vertex(294.3,99.3);
   vertex(266.7,114.4);
   endShape(CLOSE);
   
  strokeWeight(2);
  fill(138,150,135);
   beginShape(171,168,145);
   vertex(373.9,24.9);
   vertex(400,11); 
   vertex(400,41.6);
   vertex(386.6,48.9);
  endShape(CLOSE);
  
  strokeWeight(2);
  fill(179,52,28);
  beginShape();
   vertex(64.2,195.0);
   vertex(83.1,184.8); 
   vertex(95.6,207.9);
   vertex(76.7,218.3);
  endShape(CLOSE);
  
   strokeWeight(2);
  fill(173,172,151);
  beginShape();
   vertex(76.6,218.3);
   vertex(95.6,207.9); 
   vertex(107.1,228.1);
   vertex(89.1,239);
  endShape(CLOSE);
  
    strokeWeight(2);
  fill(1,1,1);
  beginShape();
   vertex(100,259.3);
   vertex(118.2,248.4); 
   vertex(130.7,272.5);
   vertex(114.9,283.7);
  endShape(CLOSE);
      
   strokeWeight(2);
  fill(179,52,28);
  beginShape();
   vertex(114.9,283.7);
   vertex(130.7,272.5); 
   vertex(142.5,294.2);
   vertex(127.3,305.2);
  endShape(CLOSE);
  
   
    strokeWeight(2);
  fill(197,200,180);
  beginShape();
   vertex(138,323.7);
   vertex(153,313.5); 
   vertex(163.9,333.5);
   vertex(149,342.8);
  endShape(CLOSE);
  
  
    strokeWeight(2);
  fill(1,1,1);
  beginShape();
   vertex(319.5,266);
   vertex(334,292.4); 
   vertex(302,313.3);
   vertex(288,287.6);
  endShape(CLOSE);
  
  
    strokeWeight(2);
  fill(197,200,180);
  beginShape();
   vertex(372.4,382.7);
   vertex(400,384); 
   vertex(400,400);
   vertex(372,400);
  endShape(CLOSE);
  
    strokeWeight(2);
  fill(223,230,219);
  beginShape();
   vertex(373.2,347.7);
   vertex(400,348.5); 
   vertex(400,384);
   vertex(372.4,382.7);
  endShape(CLOSE);
  
    strokeWeight();
  fill(235,215,159);
  beginShape();
   vertex(207,0);
   vertex(253.6,0); 
   vertex(254,36.9);
   vertex(207.6,36.9);
  endShape(CLOSE);
  
    strokeWeight();
  fill(223,230,219);
  beginShape();
   vertex(212.6,2);
   vertex(245,2); 
   vertex(245,32.6);
   vertex(212,32.6);
  endShape(CLOSE);
  
  
  strokeWeight();
  fill(1,1,1);
  beginShape();
   vertex(100.8,347.5); 
   vertex(120.8,334.7);
   vertex(132.9,354.9);
   vertex(114,369.2);
  endShape(CLOSE);
  
   strokeWeight();
   fill(1,1,1);
   beginShape();
   vertex(380,176);
   vertex(391.5,198.7);
   vertex(372.7,210.2);
   vertex(360.5,187.2);
   endShape(CLOSE);
  
   strokeWeight(2);
   fill(99,123,109);
   beginShape();
   vertex(167.9,138.2);
   vertex(187.6,157.6);
   vertex(159,173.3);
   vertex(143.8,151.4);
   endShape(CLOSE);
  
   strokeWeight();
   fill(1,1,1);
   beginShape();
   vertex(371.7,83.2);
   vertex(348.5,96);
   vertex(362,119.3);
   vertex(385.3,106.9);
   endShape(CLOSE);
  
  
  strokeWeight(2);
  stroke(1,1,1);
  line(159,173.3,172.3,193.1);
  
  strokeWeight(2);
  stroke(1,1,1);
  line(187.6,157.6,205.5,174.7);
  
  strokeWeight(2);
  stroke(1,1,1);
  line(134.6,186.6,117,196.4);
  
  strokeWeight(2);
  stroke(1,1,1);
  line(145.5,207.9,128.5,217.2);
  
  strokeWeight(2);
  stroke(1,1,1);
  line(156.2,228.8,140.5,237.3);
  
  strokeWeight(2);
  stroke(1,1,1);
  fill(1,1,1);
  beginShape();
  vertex(107.1,229.1);
  vertex(128.5,216.6);
  vertex(140.3,236.6);
  vertex(118.2,249.4);
  endShape(CLOSE);
  
  strokeWeight(2);
  stroke(1,1,1);
  line(166.6,249,130.7,272.5);
  
  strokeWeight(2);
  stroke(1,1,1);
  line(164.9,279.6,178.1,271.5);
       

  
  
  
     
     /// cuadrado negro largo
   strokeWeight();
   fill(1,1,1);
   beginShape();
   vertex(230,372.7); 
   vertex(394.8,244.4);
   vertex(400,252.8);
   vertex(235.4,383.3);
   endShape(CLOSE);
  
  
  
  
  // cuadros de abajo
    strokeWeight();
  fill(55,59,49);
  beginShape();
   vertex(217.8,4.1);
   vertex(242.3,4.1); 
   vertex(242.3,27.1);
   vertex(217.8,27.1);
  endShape(CLOSE);
  //cuadros de abajo
  
    strokeWeight();
  fill(55,59,49);
  beginShape();
   vertex(109,316);
   vertex(127,307.2); 
   vertex(138,327);
   vertex(121,339);
  endShape(CLOSE);
  
  ///cuadros de abajo/// lineas encima
    strokeWeight();
  fill(126,151,132);
  beginShape();
   vertex(77.3,309);
   vertex(98.1,295); 
   vertex(109.9,316.2);
   vertex(89.6,329.1);
  endShape(CLOSE);
  
 strokeWeight(1);
  stroke(1,1,1);
  line(93.7,298.3,106.5,318.8);
  
  strokeWeight(1);
  stroke(1,1,1);
  line(88.6,301.6,100.9,322.2);
  
    strokeWeight(1);
  stroke(1,1,1);
  line(86,303.5,98.4,323.9);
  
    strokeWeight(1);
  stroke(1,1,1);
  line(91.1,300,103.7,320.6);
  
    strokeWeight(1);
  stroke(1,1,1);
  line(83,305.5,96.1,325.4);
  
    strokeWeight(1);
  stroke(1,1,1);
  line(80.5,307.2,92.8,327.5);
  
  ////Triangulos
  
  strokeWeight(2);
  fill(200,146,84);
  beginShape();
   vertex(166.6,249);
   vertex(400,122); 
   vertex(178.1,271.5);
  endShape(CLOSE);
  
  ////poligono naranja
  
  strokeWeight(2);
  fill(200,146,84);
  beginShape();
   vertex(174.8,297);
   vertex(187.7,290.3); 
   vertex(244,400);
   vertex(234.2,400);
  endShape(CLOSE);
  
  strokeWeight();
  fill(1,1,1);
  beginShape();
  vertex(230.4,373.4);
  vertex(235,382.2);
  vertex(206.6,400);
  vertex(197.6,400);
  endShape(CLOSE);
  /// Lineas independientes
  
  strokeWeight(2);
  stroke(1,1,1);
  line(98.1,295.8,159,400);
  
  strokeWeight(2);
  stroke(1,1,1);
  line(125.3,389,186.5,346);
  
  strokeWeight(2);
  stroke(1,1,1);
  line(175.5,400,114.9,283.7);
 
  //// circulo azul grande
  
  strokeWeight();
  fill(78,148,184,170); 
  ellipse(186.2,390.2,97.6,97.6);
  
  /// circulo pequeño naranja
  strokeWeight();
  fill(173,101,53,100);
  ellipse(156.1,162.3,86.2,86.2)
  
  ///circulo amarillo grande
  strokeWeight(3);
  fill(255,162,0,100);
  ellipse(136.6,163.1,101.4,101.4)
  
  ///rectangulo blanco
  strokeWeight();
  fill(244,220);
  beginShape();
  vertex(178.1,271.5);
  vertex(286.9,198.2);
  vertex(294,218.5);
  vertex(187.6,290.1);
  endShape(CLOSE);
  
  ///cuadrado negro
  strokeWeight();
  fill(1,1,1);
  beginShape();
  vertex(294,218.5);
  vertex(259.7,241.6);
  vertex(280.5,276.6);
  vertex(313,255);
  endShape(CLOSE);
  
  ///linea
  strokeWeight(2);
  stroke(1,1,1);
  line(294,218.5,187.6,290.1);
  
  /// circulo rojo
  strokeWeight();
  fill(255,19,0,100);
  ellipse(313.9,219.9,69.4,69.4);
  
  /// circulo morado
  strokeWeight();
  fill(181,162,162,120);
  ellipse(313.6,217.6,65.9,65.9);

  
  
  /// circulo verde
  strokeWeight();
  fill(75,190,190,80,120);
  ellipse(150.9,162.4,73,86.5);

  /// circulo a la mitad (derecha)
   
  strokeWeight(2);
  fill(230,221,212);
  ellipse(418,158.9,57.8,57.8);
  
  /// circulos naranja y amarillo izquierda inferior
 
  strokeWeight(4);
  stroke(182,105,72);
  fill(231,216,176);
  ellipse(66.7,419,92,84.5);
  
  strokeWeight(4);
  stroke(227,176,76);
  fill(231,216,176);
  ellipse(65.3,425.7,62.6,62.6);
  
/// circulo medio izquierda, superior
  strokeWeight(1);
  stroke(1,1,1);
  fill(187,187,164);
  ellipse(-10.5,93.5,37.5,45.2);
  
  //// lineas independientes
  
  strokeWeight(2);
  stroke(1,1,1);
  line(114.9,283.7,78.3,310);
  
  strokeWeight(2);
  stroke(1,1,1);
  line(78.3,310,131.6,400);
  
  strokeWeight(2);
  stroke(1,1,1);
  line(90.1,329.7,127.3,305.2);
  
  strokeWeight(2);
  stroke(1,1,1);
  line(101.5,348.9,153.4,314.2);
  
  strokeWeight(2);
  stroke(1,1,1);
  line(113.4,369.1,150.1,342.1);
  
  strokeWeight(4);
  stroke(207,193,50);
  line(53,281.2,1.5,320);
  
  strokeWeight(1);
  stroke(1,1,1);
  line(32.3,0,32.3,135.4);
  
  strokeWeight(1);
  stroke(1,1,1);
  line(26.6,0,27.5,135.4);
  
  strokeWeight(1);
  stroke(1,1,1);
  line(9.7,117,52,115.5);
  
  strokeWeight(1);
  stroke(1,1,1);
  line(9.7,120,52,118.6);
  
  strokeWeight(1);
  stroke(1,1,1);
  line(9.7,123.2,52,122.7);
  
/// trinagulo de verde, esquina izquierda
    
  strokeWeight();
  fill(95,124,111);
  beginShape();
  vertex(19.3,353.6);
  vertex(0,367.3);
  vertex(0,400);
  vertex(47.3,400);
  endShape(CLOSE);
  
/// esquina izquierda inferior
  
  strokeWeight(1);
  stroke(1,1,1);
  fill(193,122,62);
  beginShape();
  vertex(0,359.1);
  vertex(8.6,394.1);
  vertex(0,394.1);
  endShape(CLOSE);
  
/// circulo pequeo izquierda
  strokeWeight(1);
  stroke(1,1,1);
  ellipse(2.1,405.4,30.3,30.3);
  
/// linea negra izquierda
  
  strokeWeight();
  fill(1,1,1);
  beginShape();
  vertex(0,318);
  vertex(0,323.5);
  vertex(101.5,381);
  endShape(CLOSE);
  
/// linea verde izquierda
  
  strokeWeight();
  fill(172,181,130);
  beginShape();
  vertex(0,323.5);
  vertex(110.2,387.2);
  vertex(105,387.2);
  vertex(0,328.2);
  endShape(CLOSE);

  strokeWeight();
  fill(1,1,1,150);
  beginShape();
  vertex(146.7,344.6);
  vertex(158,366.2);
  vertex(144.8,375.7);
  vertex(132.7,354.9);
  endShape(CLOSE);
  
/// trapecio naranja izquierda
  
  strokeWeight();
  fill(195,77,24);
  beginShape();
  vertex(44.65,362.7);
  vertex(51,369.2);
  vertex(32.5,388.7);
  vertex(26.7,384.1);
  endShape(CLOSE);
  
  strokeWeight();
  fill(240,240,228);
  beginShape();
  vertex(26.7,384.1);
  vertex(32.5,388.7);
  vertex(19.8,400);
  vertex(16.6,396.8);
  endShape(CLOSE);

  
  ///  trapecio
  strokeWeight(0);
  fill(1,1,1);
  beginShape();
  vertex(76.2,322);
  vertex(83,333.2);
  vertex(55.5,362.7);
  vertex(49.5,356.7);
  endShape(CLOSE);
  
  

  
   
  
  
  
  
  
  
  
  
  
  
  
  
  

} 

