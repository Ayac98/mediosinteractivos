
var estado = 0;

var leftWall = 1024;
var rightWall = 768;

var INTRO = 1;
var Nivel1 = 2;
var Nivel2 = 3;
var Nivel3 = 4;
var GANAR = 5;
var PERDER = 6;

var puntaje = 0;

var colorselect = 0;

var boton1x = 786;
var boton1y = 456;
var boton1tam = 90;

var boton2x = 786;
var boton2y = 638;
var boton2tam = 90;

var boton3x = 695;
var boton3y = 548;
var boton3tam = 90;

var boton4x = 876;
var boton4y = 546;
var boton4tam = 90;

var boton5x = 200;
var boton5y = 200;
var boton5tam = 90;
/// Var de las vacas
var LasVacas = [];
var numVacas = 10;
/// Var de los Meteoritos
var LosMeteoritos = [];
var numMeteoritos = 5;
/// Var de los Marcianitos
var LosMarcianos = [];
var numMarcianitos = 3;
// var navecita
var ovni;

var invasion = [];

var numOvnis = 1;
// var rayo
var rayo = [];

//var puntaje = 0;

var value = 0;

function preload() {
  miFondo = loadImage("assets/juego1.png");
  miGranja = loadImage("assets/vacas.jpg");
  miEspacio = loadImage("assets/Espacial.jpg");
}

function setup() {
  estado = INTRO;
  createCanvas(1024, 768);

  ovni = new Ovni();

  for (var v = 0; v < numVacas; v = v + 1) {
    LasVacas[v] = new Vaquita();
  }

  for (var s = 0; s < numMeteoritos; s = s + 1) {
    LosMeteoritos[s] = new Meteoritos();
  }

  for (var m = 0; m < numMarcianitos; m = m + 1) {
    LosMarcianos[m] = new Marcianito();
  }
}

function draw() {

  if (estado == INTRO) {
    // background(miFondo);
     image(miFondo,0,0);
    
  } else if (estado == Nivel1) {

    background(0);
    image(miGranja,0,0);
    fill(255)
    textAlign(CENTER);
    textSize(60);
    text("NIVEL1", width / 2, height / 2);

    textAlign(LEFT);
    textSize(20);
    text("P " + puntaje, 10, 30);


    fill(181,255,229); // Boton derecho
    rect(boton1x, boton1y, boton1tam, boton1tam);

    fill(181,255,229);
    rect(boton2x, boton2y, boton2tam, boton2tam);

    fill(181,255,229);
    rect(boton3x, boton3y, boton3tam, boton3tam);

    fill(181,255,229);
    rect(boton4x, boton4y, boton4tam, boton4tam);
    // for (var m = 0; m < numMarcianitos; m = m + 1) {
    //   LosMarcianos[m].dibujarse();
    //   LosMarcianos[m].moverse();
    // }

    ovni.dibujarse();
    ovni.moverse();
    for (var r = 0; r < numMeteoritos; r = r + 1) {
      var discentro = dist(LosMeteoritos[r].x, LosMeteoritos[r].y, ovni.x, ovni.y);
      if (discentro < LosMeteoritos[r].tamano / 2) {
        // ovni.morir();
      }
    }

    for (var v = 0; v < numVacas; v = v + 1) {
      LasVacas[v].dibujarse();
      LasVacas[v].moverse();
      for (var j = 0; j < numOvnis; j = j + 1) {
        var distCentro1 = dist(ovni.x, ovni.y, LasVacas[v].x, LasVacas[v].y);
       if (estado == Nivel1) {
          if (distCentro1 < ovni.tamano / 2) {
           if (LasVacas[v].viva == true);
            
            LasVacas[v].morir();
            
          }
        }

      }

      if (ovni.viva == false) {
        estado = PERDER;
      }

      // if (LasVacas.viva == false) {
      //   puntaje = puntaje + 1;
      // }

      if (mouseIsPressed) {
        if (mouseX > boton1x && mouseX < boton1x + boton1tam &&
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
      }

      if (colorselect == 3) {
        console.log(Ovni.velx);
        ovni.velx = 5;
        ovni.vely = 0;
      }
      if (colorselect == 1) {
        ovni.velx = 0;
        ovni.vely = 5;
      }
      if (colorselect == 2) {
        ovni.velx = -5;
        ovni.vely = 0;
      }
      if (colorselect == 0) {
        ovni.velx = 0;
        ovni.vely = -5;
      }

      if (puntaje > 20) {
        estado = Nivel2;
        puntaje = 0;
      }
    }

  } else if (estado == Nivel2) {


  //  background(0);
     image(miEspacio,0,0);
    fill(255)
    textAlign(CENTER);
    textSize(60);
    text("NIVEL2", width / 2, height / 2);

    textAlign(LEFT);
    textSize(20);
    text("P " + puntaje, 10, 30);


    fill(181,255,229); // Boton derecho
    rect(boton1x, boton1y, boton1tam, boton1tam);

    fill(181,255,229);
    rect(boton2x, boton2y, boton2tam, boton2tam);

    fill(181,255,229);
    rect(boton3x, boton3y, boton3tam, boton3tam);

    fill(181,255,229);
    rect(boton4x, boton4y, boton4tam, boton4tam);

    for (var m = 0; m < numMarcianitos; m = m + 1) {
      LosMarcianos[m].dibujarse();
      LosMarcianos[m].moverse();
    for (var j = 0; j < numOvnis; j = j + 1) {
        var distCentro1 = dist(ovni.x, ovni.y, LosMarcianos[m].x, LosMarcianos[m].y);
        if (estado == Nivel2) {
          if (distCentro1 < ovni.tamano / 2) {
            LosMarcianos[m].morir();
            puntaje = puntaje + 1;
          }
        }
    
    }
    }

    ovni.dibujarse();
    ovni.moverse();
    for (var r = 0; r < numMeteoritos; r = r + 1) {
      var discentro = dist(LosMeteoritos[r].x, LosMeteoritos[r].y, ovni.x, ovni.y);
      if (discentro < LosMeteoritos[r].tamano / 2) {
        ovni.morir();
      }
    }

    for (var v = 0; v < numVacas; v = v + 2) {
      LasVacas[v].dibujarse();
      LasVacas[v].moverse();
      for (var j = 0; j < numOvnis; j = j + 1) {
        var distCentro1 = dist(ovni.x, ovni.y, LasVacas[v].x, LasVacas[v].y);
        if (estado == Nivel3) {
          if (distCentro1 < ovni.tamano / 2) {
            LasVacas[v].morir();
            puntaje = puntaje + 1;
          }
        }

      }

      for (var s = 0; s < numMeteoritos; s = s + 1) {
        LosMeteoritos[s].dibujarse();
        LosMeteoritos[s].moverse();
      }

      if (puntaje > 20) {
        estado = Nivel3;
        puntaje = 0;
      }


      if (ovni.viva == false) {
        estado = PERDER;
      }

//       if (LasVacas.viva == false) {
//         puntaje = puntaje + 1;
//       }

      if (mouseIsPressed) {
        if (mouseX > boton1x && mouseX < boton1x + boton1tam &&
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
      }

      if (colorselect == 3) {
        console.log(Ovni.velx);
        ovni.velx = 5;
        ovni.vely = 0;
      }
      if (colorselect == 1) {
        ovni.velx = 0;
        ovni.vely = 5;
      }
      if (colorselect == 2) {
        ovni.velx = -5;
        ovni.vely = 0;
      }
      if (colorselect == 0) {
        ovni.velx = 0;
        ovni.vely = -5;
      }

    }
 
   } else if (estado == Nivel3) {
  
// var LosMeteoritos = [];
// var numMeteoritos = 15;
     
     
     
    background(0);
    fill(255)
    textAlign(CENTER);
    textSize(60);
    text("NIVEL3", width / 2, height / 2);

    textAlign(LEFT);
    textSize(20);
    text("P " + puntaje, 10, 30);


     fill(181,255,229); // Boton derecho
    rect(boton1x, boton1y, boton1tam, boton1tam);

    fill(181,255,229);
    rect(boton2x, boton2y, boton2tam, boton2tam);

    fill(181,255,229);
    rect(boton3x, boton3y, boton3tam, boton3tam);

    fill(181,255,229);
    rect(boton4x, boton4y, boton4tam, boton4tam);
     
     
    for (var m = 0; m < numMarcianitos; m = m + 1) {
      LosMarcianos[m].dibujarse();
      LosMarcianos[m].moverse();
    
    
    }

    ovni.dibujarse();
    ovni.moverse();
    for (var r = 0; r < numMeteoritos; r = r + 1) {
      var discentro = dist(LosMeteoritos[r].x, LosMeteoritos[r].y, ovni.x, ovni.y);
      if (discentro < LosMeteoritos[r].tamano / 2) {
        ovni.morir();
      }
    }

    for (var v = 0; v < numVacas; v = v + 1) {
      LasVacas[v].dibujarse();
      LasVacas[v].moverse();
      for (var j = 0; j < numOvnis; j = j + 1) {
        var distCentro1 = dist(ovni.x, ovni.y, LasVacas[v].x, LasVacas[v].y);
        if (estado == Nivel3) {
          if (distCentro1 < ovni.tamano / 2) {
            LasVacas[v].morir();
            puntaje = puntaje + 1;
          }
        }

      }

      if (ovni.viva == false) {
        estado = PERDER;
      }

      // if (LasVacas.viva == false) {
      //   puntaje = puntaje + 1;
      // }

      if (mouseIsPressed) {
        if (mouseX > boton1x && mouseX < boton1x + boton1tam &&
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
      }

      if (colorselect == 3) {
        console.log(Ovni.velx);
        ovni.velx = 5;
        ovni.vely = 0;
      }
      if (colorselect == 1) {
        ovni.velx = 0;
        ovni.vely = 5;
      }
      if (colorselect == 2) {
        ovni.velx = -5;
        ovni.vely = 0;
      }
      if (colorselect == 0) {
        ovni.velx = 0;
        ovni.vely = -5;
      }

      if (puntaje > 20) {
        estado = GANAR;
        puntaje = 0;
      }
    }
     
     
  } else if (estado == GANAR) {
    background(200);
    fill(255);
    textAlign(CENTER);
    textSize(60);
    text("GANASTE", width / 2, height / 2);
  } else {
    background(200);
    fill(255)
    textAlign(CENTER);
    textSize(60);
    text("PERDISTE", width / 2, height / 2);
   
    fill(181,255,229);
    rect(boton5x, boton5y, boton5tam, boton5tam);
    
    if (mouseIsPressed) {
        if (mouseX > boton5x && mouseX < boton5x + boton5tam &&
          mouseY > boton5y && mouseY < boton5y + boton5tam) {
          colorselect = 5;

        if (colorselect == 5) {
        
        estado = INTRO;
      }

        
        
        }
    }
  }
}



function deviceShaken() {
  LasVacas[v] = new Vaquita();
for (var v = 0; v < numVacas; v = v + 1) {
      LasVacas[v].dibujarse();
      LasVacas[v].moverse();
}
}  


function mousePressed() {
  if (estado == INTRO) {
    estado = Nivel1;
 if (estado == PERDER) {
  if (mouseX > boton5x && mouseX < boton5x + boton5tam &&
          mouseY > boton5y && mouseY < boton5y + boton5tam) {
          colorselect = 5;

        if (colorselect == 5) {
    }
   } 
  }
  }
}
/// Familia Marcianito
function Marcianito() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.dirX = 1.5;
  this.dirY = 1.3;
  this.tamano = 15;
  this.viva = true;

  this.dibujarse = function() {
    if (this.viva == true) {
      noStroke();
      fill(56, 151, 66);
      /// Cabeza Alien
      ellipse(this.x, this.y - 15, this.tamano + 10, this.tamano + 15);
      /// cuerpo alien
      rect(this.x - 5, this.y - 8, this.tamano - 6, this.tamano + 15);
      /// pieran izquierda 
      rect(this.x - 4, this.y + 22, this.tamano - 12, this.tamano - 3);
      /// pierna derecha
      rect(this.x, this.y + 22, this.tamano - 12, this.tamano - 3);
      /// brazo izquierdo
      rect(this.x - 9, this.y + 2, this.tamano - 12, this.tamano - 3);
      /// brazo derecho
      rect(this.x + 5, this.y + 2, this.tamano - 12, this.tamano - 3);
      /// ojos
      fill(172, 177, 172);
      ellipse(this.x - 5, this.y - 15, this.tamano - 6, this.tamano - 6);
      ellipse(this.x + 5, this.y - 15, this.tamano - 6, this.tamano - 6);
      /// boca
      fill(1, 1, 1);
      rect(this.x - 4, this.y - 8, this.tamano - 8, this.tamano - 13);

    }
  }

  this.moverse = function() {
    //this.x = this.x + random(-1, 1);
    //this.y = this.y + random(-1, 1);
    if (this.x >= width || this.x <= 0) {
      this.dirX = -this.dirX;
      this.x = this.x + (this.dirX * 4);
    }
    if (this.y >= width || this.y <= 0) {
      this.dirY = -this.dirY;
      this.y = this.y + (this.dirY * 4);
    }

    this.x = this.x + (this.dirX * random(0, 4));
    this.y = this.y + (this.dirY * random(0, 4));
  }


  this.crecer = function() {
    this.tamano = this.tamano + random(0.3, 0.6);
  }

  this.morir = function() {
    this.viva = false;
  }
}

/// Familia Vaquitas
function Vaquita() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.tamano = 40;
  this.viva = true;
  this.dirX = 1;
  this.dirY = 1;
  
  this.dibujarse = function() {
    if (this.viva == true) {
      fill(107, 67, 34);
      /// Cuerpo de la vaca
      rect(this.x - 24, this.y - 19, this.tamano, this.tamano - 15);
      /// cabeza
      rect(this.x - 40, this.y - 33, this.tamano - 17, this.tamano - 17);
      /// pata delantera
      rect(this.x - 21, this.y + 6, this.tamano - 28, this.tamano - 17);
      /// pata trasera
      rect(this.x + 2, this.y + 6, this.tamano - 28, this.tamano - 17);
      /// cuerno
      fill(145, 143, 144);
      rect(this.x - 26, this.y - 40, this.tamano - 35, this.tamano - 29);
      /// ojo
      rect(this.x - 36, this.y - 27, this.tamano - 34, this.tamano - 34);
    }
  }

  this.moverse = function() {
    //this.x = this.x + random(-1, 1);
    //this.y = this.y + random(-1, 1);
 //  this.moverse = function() {
    if (this.x >= width || this.x <= 0) {
      this.dirX = -this.dirX;
      this.x = this.x + (this.dirX * 2);
    }
    if (this.y >= width || this.y <= 0) {
      this.dirY = -this.dirY;
      this.y = this.y + (this.dirY * 2);
    }

    this.x = this.x + (this.dirX * random(0, 4));
    this.y = this.y + (this.dirY * random(0, 4));
  
  
  
  }

  this.crecer = function() {
    this.tamano = this.tamano + random(0.3, 0.6);
  }

  this.morir = function() {
    this.viva = false;
    puntaje = puntaje + 1;
  }
}
// familia Ovni
function Ovni() {
  this.x = width / 2; //random(0, width);
  this.y = height / 2; //random(0, height);
  this.dirX = 0;
  this.velx = 0;
  this.vely = 0;
  this.dirY = 0;
  this.tamano = 43;
  this.viva = true;

  this.dibujarse = function() {
    if (this.viva == true) {
      fill(65, 154, 82);
      ellipse(this.x, this.y, this.tamano + 20, this.tamano);
      fill(145, 143, 144);
      ellipse(this.x, this.y + 11, this.tamano + 96, this.tamano - 22);
    }


    this.direccion = function() {
      this.velx = 0;
    }

    this.moverse = function() {
      if (this.x >= width || this.x <= 0) {
        this.dirX = -this.dirX;
        this.x = this.x + (this.dirX * 2);
      }
      if (this.y >= width || this.y <= 0) {
        this.dirY = -this.dirY;
        this.y = this.y + (this.dirY * 2);
      }
    
//       if (this.x > width || this.x < 0) {
//       this.velx *= -1;
//     }
//     if (this.y > height || this.y < 0) {
//       this.vely *= -1;
//     }
      
      this.x = this.x + this.velx;
      this.y = this.y + this.vely;

//       this.x = this.x + (this.dirX * random(0, 4));
//       this.y = this.y + (this.dirY * random(0, 4));

      this.x = constrain(this.x, 0, 1024);
      this.y = constrain(this.y, 0, 768);


    }




    this.morir = function() {
      this.viva = false;
    }
  }
}
// Familia Meteoritos
function Meteoritos() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.dirX = 1;
  this.dirY = 1;
  this.tamano = 27;

  this.dibujarse = function() {
    push();
    noStroke();
    fill(239, 131, 21);
    rect(this.x + 1, this.y - 16, this.tamano + 58, this.tamano);
    fill(122, 41, 85);
    ellipse(this.x + 1, this.y - 1, this.tamano, this.tamano);
    rect(this.x - 6, this.y - 17, this.tamano - 18, this.tamano - 18);
    rect(this.x - 12, this.y - 14, this.tamano - 18, this.tamano - 18);
    rect(this.x - 15, this.y - 7, this.tamano - 18, this.tamano - 18);
    rect(this.x - 11, this.y, this.tamano - 18, this.tamano - 18);
    rect(this.x - 4, this.y + 6, this.tamano - 18, this.tamano - 18);
    rect(this.x + 4, this.y + 1, this.tamano - 18, this.tamano - 18);
    rect(this.x + 8, this.y - 8, this.tamano - 18, this.tamano - 18);
    rect(this.x + 3, this.y - 15, this.tamano - 18, this.tamano - 18);
    fill(196, 107, 0);
    ellipse(this.x + 6, this.y + 3, this.tamano - 15, this.tamano - 15);
    ellipse(this.x - 3, this.y - 6, this.tamano - 19, this.tamano - 19);
    pop();

  }

  this.moverse = function() {
    if (this.x >= width || this.x <= 0) {
      this.dirX = -this.dirX;
      this.x = this.x + (this.dirX * 2);
    }
    if (this.y >= width || this.y <= 0) {
      this.dirY = -this.dirY;
      this.y = this.y + (this.dirY * 2);
    }

    this.x = this.x + (this.dirX * random(0, 4));
    this.y = this.y + (this.dirY * random(0, 4));
  }
}
// familia rayo
function Rasho() {
  this.x = 200;
  this.y = 200;
  this.tamano = 0;

  this.dibujarse = function() {
    push();
    noStroke();
  }
}
function deviceShaken() {
  LasVacas[v] = new Vaquita();
}