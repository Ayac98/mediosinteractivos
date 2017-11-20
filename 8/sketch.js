/// Var de las vacas
var LasVacas = [];
var numVacas = 30;
/// Var de los Ovnis
var invasion = [];
var numOvnis = 18;
/// Var de los Meteoritos
var LosMeteoritos = [];
var numMeteoritos = 4;
/// Var de los Marcianitos
var LosMarcianos = [];
var numMarcianitos = 4;
/// Var de los humanos
var humanos = [];
var numHumanos = 15;
/// Var de los humanoides
var humanoides = [];
var numHumanoides = 10;


function setup() {
  createCanvas(800, 800);
/// Definición de vacas
  for (var v = 0; v < numVacas; v = v + 1) {
    LasVacas[v] = new Vaquita();
  }
/// Definición de Ovnis
  for (var i = 0; i < numOvnis; i = i + 1) {
    invasion[i] = new Ovni();
  }
/// Definición de Meteoritos
  for (var s = 0; s < numMeteoritos; s = s + 1) {
    LosMeteoritos[s] = new Meteoritos();
  }
/// Definición de Marcianitos
  for (var m = 0; m < numMarcianitos; m = m + 1) {
    LosMarcianos[m] = new Marcianito();
  }
/// Definición de humanos
  for (var h = 0; h < numHumanos; h = h + 1) {
    humanos[h] = new Humanito();
  }
  //for (var a = 0; a < numHumanoides; a = a + 1) {
    //humanoides[a] = new Humanoide();
  //}
}

function draw() {
  background(220);
 
/// Dibujar Marcinos
  for (var m = 0; m < numMarcianitos; m = m + 1) {
    LosMarcianos[m].dibujarse();
    LosMarcianos[m].moverse();
    //for (var i = 0; i < numOvnis; i = i + 1){
    // var discentro = dist(invasion[i].x,invasion[i].y,Marcianito[m].x,Marcianito[m].y);
    //if (discentro < invasion[i].tamano/2){
    //Marcianito[m].dibujarse();
    //Marcianito[m].moverse();
    //}

  }
/// Dibujar Ovnis/ los ovnis mueren cuando un meteorito los toca
  push();
  for (var i = 0; i < numOvnis; i = i + 1) {
    invasion[i].dibujarse();
    invasion[i].moverse();
    for (var r = 0; r < numMeteoritos; r = r + 1) {
      var discentro = dist(LosMeteoritos[r].x, LosMeteoritos[r].y, invasion[i].x, invasion[i].y);
      if (discentro < LosMeteoritos[r].tamano / 2) {
        invasion[i].morir();
      }
    }
  }
  pop();
/// Dibujar Vacas/ Las vacas mueren cuando un Ovni pasa sobre ellas
  push();
  for (var v = 0; v < numVacas; v = v + 1) {
    LasVacas[v].dibujarse();
    LasVacas[v].moverse();
    for (var j = 0; j < numOvnis; j = j + 1) {
      var distCentro1 = dist(invasion[j].x, invasion[j].y, LasVacas[v].x, LasVacas[v].y);
      if (distCentro1 < invasion[j].tamano / 2) {
        LasVacas[v].morir();
      }
    }
  }
  pop();
/// Dibujar meteoritos
  for (var s = 0; s < numMeteoritos; s = s + 1) {
    LosMeteoritos[s].dibujarse();
    LosMeteoritos[s].moverse();
  }
/// Dibujar Humanos/ Humanos se reproducen cuando un marcianito les pasa por encima
  for (var h = 0; h < numHumanos; h = h +1){
   humanos[h].dibujarse();
   humanos[h].moverse();
   //for (var p = 0; p < numMarcianitos; p = p +1) {
     //var disCentro2 = dist(LosMarcianos[p].x,LosMarcianos[p].y,humanos[h].x,humanos[h].y);
     //if (disCentro2 < LosMarcianos[p].tamano / 2) {
        ///Marcianito[m].dibujarse();
        ///Marcianito[m].moverse();
    //}
  //}
 }
}
/// Tecla espacio para nuevo Ovni
function keyReleased() {
  if (keyCode == 32) {
    numOvnis = numOvnis + 1;
    invasion[invasion.length] = new Ovni();
  }

/// Letra M para un nuevo marcianito
//function keyReleased() {
  if (keyCode == 77) {
    numMarcianitos = numMarcianitos + 1;
    LosMarcianos[LosMarcianos.length] = new Marcianito();
  }

/// Letra V para crear vacas

//function keyReleased() {
  if (keyCode == 86) {
    numVacas = numVacas + 1;
    LasVacas[LasVacas.length] = new Vaquita();
  }
}




/// Familia Humanito
function Humanito() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.tamano = 15;
  this.viva = true;

  this.dibujarse = function() {
    if (this.viva == true) {
      noStroke();
      fill(1,1,1);
      /// Cabeza 	Humanito
      ellipse(this.x, this.y -38, this.tamano + 16, this.tamano + 16);
      /// Cuerpo Humanito
      rect(this.x - 8, this.y - 22, this.tamano + 3, this.tamano + 25);
      /// Brazo izquierdo
      rect(this.x - 15, this.y - 22, this.tamano - 10, this.tamano + 15);
      /// Brazo Derecho
      rect(this.x + 12, this.y - 22, this.tamano - 10, this.tamano + 15);
      /// Pierna Derecha
      rect(this.x - 5, this.y + 6, this.tamano - 10, this.tamano + 15);
      /// Pierna izquierda
      rect(this.x + 1, this.y + 6, this.tamano - 10, this.tamano + 15);
    }
  }

  this.moverse = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  this.crecer = function() {
    this.tamano = this.tamano + random(0.3, 0.6);
  }

  this.morir = function() {
    this.viva = false;
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
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  this.crecer = function() {
    this.tamano = this.tamano + random(0.3, 0.6);
  }

  this.morir = function() {
    this.viva = false;
  }
}
// familia Ovni
function Ovni() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.dirX = 1;
  this.dirY = 1;
  this.tamano = 43;
  this.viva = true;

  this.dibujarse = function() {
    if (this.viva == true) {
      fill(65, 154, 82);
      ellipse(this.x, this.y, this.tamano + 20, this.tamano);
      fill(145, 143, 144);
      ellipse(this.x, this.y + 11, this.tamano + 96, this.tamano - 22);
    }

    this.moverse = function() {
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

    this.morir = function() {
      this.viva = false;
    }
  }
}
// Familia Meteoritos
function Meteoritos() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.dirX = 2;
  this.dirY = 2;
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
