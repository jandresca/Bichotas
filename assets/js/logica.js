const letsPlayAudio = document.getElementById("lets-play");
const easyAudio = document.getElementById("easy");
const wrongAnswerAudio = document.getElementById("wrong-answer");
const correctAnswerAudio = document.getElementById("correct-answer");

let punt_A = document.getElementById("punt_A");
let punt = document.getElementById("punt");

//opciones
let a = document.getElementById("a"); let b = document.getElementById("b"); let c = document.getElementById("c"); let d = document.getElementById("d");

let a2 = document.getElementById("a2"); let b2 = document.getElementById("b2"); let c2 = document.getElementById("c2"); let d2 = document.getElementById("d2");

let a3 = document.getElementById("a3"); let b3 = document.getElementById("b3"); let c3 = document.getElementById("c3"); let d3 = document.getElementById("d3");

let a4 = document.getElementById("a4"); let b4 = document.getElementById("b4"); let c4 = document.getElementById("c4"); let d4 = document.getElementById("d4");

let a5 = document.getElementById("a5");
let b5 = document.getElementById("b5");
let c5 = document.getElementById("c5");
let d5 = document.getElementById("d5");

let a6 = document.getElementById("a6");
let b6 = document.getElementById("b6");
let c6 = document.getElementById("c6");
let d6 = document.getElementById("d6");

let a7 = document.getElementById("a7");
let b7 = document.getElementById("b7");
let c7 = document.getElementById("c7");
let d7 = document.getElementById("d7");

let a8 = document.getElementById("a8");
let b8 = document.getElementById("b8");
let c8 = document.getElementById("c8");
let d8 = document.getElementById("d8");

let a9 = document.getElementById("a9");
let b9 = document.getElementById("b9");
let c9 = document.getElementById("c9");
let d9 = document.getElementById("d9");

let a10 = document.getElementById("a10");
let b10 = document.getElementById("b10");
let c10 = document.getElementById("c10");
let d10 = document.getElementById("d10");

let a11 = document.getElementById("a11");
let b11 = document.getElementById("b11");
let c11 = document.getElementById("c11");
let d11 = document.getElementById("d11");

let a12 = document.getElementById("a12");
let b12 = document.getElementById("b12");
let c12 = document.getElementById("c12");
let d12 = document.getElementById("d12");
//puntos
let puntos = document.getElementById("puntos");
let ganados = document.getElementById("ganados");
//array
let puntuacion = [
  1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 15000, 21000,
  28000, 36000, 45000, 55000, 66000, 78000, 0, 11000, 12000,
];
//preguntas
let pregunta1 = document.getElementById("pregunta1");
let pregunta2 = document.getElementById("pregunta2");
let pregunta3 = document.getElementById("pregunta3");
let pregunta4 = document.getElementById("pregunta4");
let pregunta5 = document.getElementById("pregunta5");
let pregunta6 = document.getElementById("pregunta6");
let pregunta7 = document.getElementById("pregunta7");
let pregunta8 = document.getElementById("pregunta8");
let pregunta9 = document.getElementById("pregunta9");
let pregunta10 = document.getElementById("pregunta10");
let pregunta11 = document.getElementById("pregunta11");
let pregunta12 = document.getElementById("pregunta12");
let final = document.getElementById("final");
let nombre1 = document.getElementById("nombre1");
let start = document.getElementById("start");
let timer = document.getElementById("timer");
let ayuda = document.getElementById("ayuda");
let ayuda2 = document.getElementById("ayuda2");
let ayuda3 = document.getElementById("ayuda3");
let nombre = "";

//inicializo las preguntas en estado none para que no se vean
pregunta1.style.display = "none";
pregunta2.style.display = "none";
pregunta3.style.display = "none";
pregunta4.style.display = "none";
pregunta5.style.display = "none";
pregunta6.style.display = "none";
pregunta7.style.display = "none";
pregunta8.style.display = "none";
pregunta9.style.display = "none";
pregunta10.style.display = "none";
pregunta11.style.display = "none";
pregunta12.style.display = "none";
final.style.display = "none";
nombre1.style.display = "none";
punt.style.display = "none";
punt_A.style.display = "none";
timer.style.display = "none";
ayuda.style.display = "none";
ayuda2.style.display = "none";
ayuda3.style.display = "none";

const help3 = () => {
  if(pregunta1.style.display==="block") c.style.display = "none",d.style.display = "none",document.getElementById("ayuda3").disabled=true;

  if(pregunta2.style.display==="block") b2.style.display = "none",c2.style.display = "none",document.getElementById("ayuda3").disabled=true;

  if(pregunta3.style.display==="block") a3.style.display = "none",d3.style.display = "none",document.getElementById("ayuda3").disabled=true;

  if(pregunta4.style.display==="block") a4.style.display = "none",d4.style.display = "none",document.getElementById("ayuda3").disabled=true;

  if(pregunta5.style.display==="block") a5.style.display = "none",d5.style.display = "none",document.getElementById("ayuda3").disabled=true;

  if(pregunta6.style.display==="block") b6.style.display = "none",d6.style.display = "none",document.getElementById("ayuda3").disabled=true;

  if(pregunta7.style.display==="block") a7.style.display = "none",d7.style.display = "none", document.getElementById("ayuda3").disabled=true;

  if(pregunta8.style.display==="block") c8.style.display = "none",a8.style.display = "none", document.getElementById("ayuda3").disabled=true;

  if(pregunta9.style.display==="block") c9.style.display = "none",d9.style.display = "none", document.getElementById("ayuda3").disabled=true;

  if(pregunta10.style.display==="block") b10.style.display = "none",a10.style.display = "none", document.getElementById("ayuda3").disabled=true;

  if(pregunta11.style.display==="block") a11.style.display = "none",d11.style.display = "none", document.getElementById("ayuda3").disabled=true;

  if(pregunta12.style.display==="block") c12.style.display = "none",b12.style.display = "none", document.getElementById("ayuda3").disabled=true;
};

ayuda3.onclick = function () {
  help3();
};

const help1 = () => {
  if(pregunta1.style.display==="block") alert("El publico voto de la siguiente manera: \n -30 personas votaron por la A \n -50 personas votaron por la B \n -15 personas votaron por la C \n -5 personas votaron por la D"), document.getElementById("ayuda").disabled=true;

  if(pregunta2.style.display==="block") alert("El publico voto de la siguiente manera: \n 10 personas votaron por la A \n 10 personas votaron por la B \n 10 personas votaron por la C \n 70 personas votaron por la D"), document.getElementById("ayuda").disabled=true;

  if(pregunta3.style.display==="block") alert("El publico voto de la siguiente manera: \n 20 personas votaron por la A \n 20 personas votaron por la B \n 40 personas votaron por la C \n 20 personas votaron por la D"), document.getElementById("ayuda").disabled=true;

  if(pregunta4.style.display==="block") alert("El publico voto de la siguiente manera: \n 30 personas votaron por la A \n 10 personas votaron por la B \n 45 personas votaron por la C \n 15 personas votaron por la D"), document.getElementById("ayuda").disabled=true;

  if(pregunta5.style.display==="block") alert("El publico voto de la siguiente manera: \n 0 personas votaron por la A \n 90 personas votaron por la B \n 10 personas votaron por la C \n 0 personas votaron por la D"), document.getElementById("ayuda").disabled=true;

  if(pregunta6.style.display==="block") alert("El publico voto de la siguiente manera: \n 65 personas votaron por la A \n 15 personas votaron por la B \n 15 personas votaron por la C \n 5 personas votaron por la D"), document.getElementById("ayuda").disabled=true;

  if(pregunta7.style.display==="block") alert("El publico voto de la siguiente manera: \n 5 personas votaron por la A \n 10 personas votaron por la B \n 75 personas votaron por la C \n 10 personas votaron por la D"), document.getElementById("ayuda").disabled=true;

  if(pregunta8.style.display==="block") alert("El publico voto de la siguiente manera: \n 25 personas votaron por la A \n 35 personas votaron por la B \n 25 personas votaron por la C \n 15 personas votaron por la D"), document.getElementById("ayuda").disabled=true;

  if(pregunta9.style.display==="block") alert("El publico voto de la siguiente manera: \n 15 personas votaron por la A \n 55 personas votaron por la B \n 15 personas votaron por la C \n 15 personas votaron por la D"), document.getElementById("ayuda").disabled=true;

  if(pregunta10.style.display==="block") alert("El publico voto de la siguiente manera: \n 0 personas votaron por la A \n 0 personas votaron por la B \n 100 personas votaron por la C \n 0 personas votaron por la D"), document.getElementById("ayuda").disabled=true;

  if(pregunta11.style.display==="block") alert("El publico voto de la siguiente manera: \n 25 personas votaron por la A \n 45 personas votaron por la B \n 15 personas votaron por la C \n 15 personas votaron por la D"), document.getElementById("ayuda").disabled=true;

  if(pregunta12.style.display==="block") alert("El publico voto de la siguiente manera: \n 10 personas votaron por la A \n 10 personas votaron por la B \n 5 personas votaron por la C \n 75 personas votaron por la D"), document.getElementById("ayuda").disabled=true;
};

ayuda.onclick = function () {
  help1();
};

const help2 = () => {
  let usuario = prompt("Ingresa el nombre de la persona a la que quieres llamar")


  if(pregunta1.style.display==="block") alert("Tu amigo/a " + usuario +" indica que la respuesta corresta es la B"), document.getElementById("ayuda2").disabled=true;

  if(pregunta2.style.display==="block") alert("Tu amigo/a " + usuario +" indica que la respuesta corresta es la D"), document.getElementById("ayuda2").disabled=true;

  if(pregunta3.style.display==="block") alert("Tu amigo/a " + usuario +" indica que la respuesta corresta es la C"), document.getElementById("ayuda2").disabled=true;

  if(pregunta4.style.display==="block") alert("Tu amigo/a " + usuario +" indica que la respuesta corresta es la C"), document.getElementById("ayuda2").disabled=true;

  if(pregunta5.style.display==="block") alert("Tu amigo/a " + usuario +" indica que la respuesta corresta es la B"), document.getElementById("ayuda2").disabled=true;

  if(pregunta6.style.display==="block") alert("Tu amigo/a " + usuario +" indica que la respuesta corresta es la A"), document.getElementById("ayuda2").disabled=true;

  if(pregunta7.style.display==="block") alert("Tu amigo/a " + usuario +" indica que la respuesta corresta es la C"), document.getElementById("ayuda2").disabled=true;

  if(pregunta8.style.display==="block") alert("Tu amigo/a " + usuario +" indica que la respuesta corresta es la B"), document.getElementById("ayuda2").disabled=true;

  if(pregunta9.style.display==="block") alert("Tu amigo/a " + usuario +" indica que la respuesta corresta es la B"), document.getElementById("ayuda2").disabled=true; 

  if(pregunta10.style.display==="block") alert("Tu amigo/a " + usuario +" indica que la respuesta corresta es la C"), document.getElementById("ayuda2").disabled=true; 

  if(pregunta11.style.display==="block") alert("Tu amigo/a " + usuario +" indica que la respuesta corresta es la B"), document.getElementById("ayuda2").disabled=true; 

  if(pregunta12.style.display==="block") alert("Tu amigo/a " + usuario +" indica que la respuesta corresta es la A"), document.getElementById("ayuda2").disabled=true; 

}

ayuda2.onclick = function () {
  help2();
};

window.onload = updateClock;
totalTime = 200;
function updateClock () { 
  document.getElementById("timer").innerHTML = "Tiempo: " + totalTime + " segundos";
    totalTime === 0
  ? (ganados.innerHTML =
      alert(
        "lo siento " +
          nombre +
          " perdiste por falta de tiempo, pero puedes jugar de nuevo cuando desees"
      ) + location.reload())
  : totalTime -=1,setTimeout("updateClock()",1000);
}

let fnStart = () => {
  start.style.display = "none";
  punt.style.display = "block";
  punt_A.style.display = "block";
  easyAudio.play();
  easyAudio.volume = 0.3;

  let nombre = prompt(
    "Bienvenido al juego quien quiere ser millonario por favor ingrese su nombre: "
  );

  if (nombre !== "") {
    window.onload = updateClock;
    totalTime = 30;
    timer.style.display = "block";
    ayuda2.style.display = "block";
    ayuda.style.display = "block";
    ayuda3.style.display = "block";
  }
  while (nombre == null || nombre === "") {
    alert(
      "por favor ingresar el nombre para poder iniciar con el cuestionario"
    );
    nombre = prompt(
      "Bienvenido al juego quien quiere ser millonario por favor ingrese su nombre: "
    );
  }

  pregunta1.style.display = "block";
  const f = () => {
    // start audio
	  letsPlayAudio.currentTime = 0;
    easyAudio.pause();
    easyAudio.currentTime = 0;
    letsPlayAudio.play();
    letsPlayAudio.volume = 0.3;
    let pregunta = prompt(
      "Estas seguro que esta es la respuesta\n (solo si o no)"
    );

    while (pregunta !== "si" && pregunta !== "no") {
      alert("por favor escriba si o no");
      pregunta = prompt(
        "Estas seguro que esta es la respuesta\n (solo si o no)"
      );
    }
    letsPlayAudio.pause();
	  letsPlayAudio.currentTime = 0;
    wrongAnswerAudio.play();
    wrongAnswerAudio.volume = 0.3;
    easyAudio.play();
    wrongAnswerAudio.pause=0;
    wrongAnswerAudio.currentTime = 0;
    return pregunta;
  };

  const emergente = () => {
	  letsPlayAudio.currentTime = 0;
    // start audio
    easyAudio.pause();
    easyAudio.currentTime = 0;
    letsPlayAudio.play();
    letsPlayAudio.volume = 0.3;

    let pregunta = prompt(
      "Estas seguro que esta es la respuesta\n (solo si o no)"
    );

    if (pregunta === "si") {
      window.onload = updateClock;
      totalTime = 30;
    }

    while (pregunta !== "si" && pregunta !== "no") {
      alert("por favor escriba si o no");
      pregunta = prompt(
        "Estas seguro que esta es la respuesta\n (solo si o no)"
      );
    }
    letsPlayAudio.pause();
	  letsPlayAudio.currentTime = 0;
    correctAnswerAudio.play();
    correctAnswerAudio.volume = 0.3;
    easyAudio.play();
    correcta = pregunta.toLowerCase();
    correctAnswerAudio.pause=0;
    correctAnswerAudio.currentTime = 0;
    return correcta;
  };
  

  ganados.innerHTML = puntuacion[0];
  puntos.innerHTML = puntuacion[18];

  function preguntaas(posicion) {
     pregunta = f();
     console.log(pregunta);
     pregunta === "si"
     ? (ganados.innerHTML =
         alert(
           "lo siento " +
             nombre +
             " perdiste y quedaste con " +
             puntuacion[posicion] +
             " puntos"
         ) + 
         setTimeout("location.reload()",2000))
     : "";
   }
   
  //pregunta 1
  b.onclick = function () {
    correcta = emergente();
    if (correcta === "si")
      alert("perfecto " + nombre + " esta es la adecuada"),
        (puntos.innerHTML = puntuacion[0]),
        (ganados.innerHTML = puntuacion[1]),
        (pregunta2.style.display = "block"),
        (pregunta1.style.display = "none");
  };
  
  a.onclick = function () {
   preguntaas(18);
  };

  c.onclick = function () {
      preguntaas(18);
  };

  d.onclick = function () {
    preguntaas(18);
  };

  
  
  //pregunta 2
  d2.onclick = function () {
    correcta = emergente();
    if (correcta === "si")
      alert("perfecto " + nombre + " esta es la adecuada"),
        (puntos.innerHTML = puntuacion[2]),
        (ganados.innerHTML = puntuacion[2]),
        (pregunta2.style.display = "none"),
        ((pregunta1.style.display = "none"),
        (pregunta3.style.display = "block"));
  };

  b2.onclick = function () {
    preguntaas(0);
  };

  c2.onclick = function () {
    preguntaas(0);
  };

  a2.onclick = function () {
    preguntaas(0);
  };

  //pregunta 3
  a3.onclick = function () {
    preguntaas(2);
  };

  b3.onclick = function () {
    preguntaas(2);
  };

  d3.onclick = function () {
    preguntaas(2);
  };

  c3.onclick = function () {
    correcta = emergente();
    if (correcta === "si")
      alert("perfecto " + nombre + " esta es la adecuada"),
        (puntos.innerHTML = puntuacion[5]),
        (ganados.innerHTML = puntuacion[3]),
        (pregunta2.style.display = "none"),
        ((pregunta1.style.display = "none"),
        (pregunta3.style.display = "none"),
        (pregunta4.style.display = "block"));
  };

  //pregunta 4
  a4.onclick = function () {
    preguntaas(5);
  };

  b4.onclick = function () {
    preguntaas(5);
  };

  c4.onclick = function () {
    correcta = emergente();
    if (correcta === "si")
      alert("perfecto " + nombre + " esta es la adecuada"),
        (puntos.innerHTML = puntuacion[9]),
        (ganados.innerHTML = puntuacion[4]),
        (pregunta2.style.display = "none"),
        ((pregunta1.style.display = "none"),
        (pregunta3.style.display = "none"),
        (pregunta4.style.display = "none"),
        (pregunta5.style.display = "block"));
  };

  d4.onclick = function () {
    preguntaas(5);
  };

  //pregunta 5
  a5.onclick = function () {
    preguntaas(9);
  };

  b5.onclick = function () {
    correcta = emergente();
    if (correcta === "si")
      alert("perfecto " + nombre + " esta es la adecuada"),
        (puntos.innerHTML = puntuacion[10]),
        (ganados.innerHTML = puntuacion[5]),
        (pregunta2.style.display = "none"),
        ((pregunta1.style.display = "none"),
        (pregunta3.style.display = "none"),
        (pregunta4.style.display = "none"),
        (pregunta5.style.display = "none"),
        (pregunta6.style.display = "block"));
  };

  c5.onclick = function () {
    preguntaas(9);
  };

  d5.onclick = function () {
    preguntaas(9);
  };

  //pregunta 6
  c6.onclick = function () {
    preguntaas(10);
  };

  b6.onclick = function () {
    preguntaas(10);
  };

  a6.onclick = function () {
    correcta = emergente();
    if (correcta === "si")
      alert("perfecto " + nombre + " esta es la adecuada"),
        (puntos.innerHTML = puntuacion[11]),
        (ganados.innerHTML = puntuacion[6]),
        (pregunta2.style.display = "none"),
        ((pregunta1.style.display = "none"),
        (pregunta3.style.display = "none"),
        (pregunta4.style.display = "none"),
        (pregunta5.style.display = "none"),
        (pregunta6.style.display = "none"),
        (pregunta7.style.display = "block"));
  };

  d6.onclick = function () {
    preguntaas(10);
  };

  //pregunta 7
  a7.onclick = function () {
    preguntaas(11);
  };

  b7.onclick = function () {
    preguntaas(11);
  };

  c7.onclick = function () {
    correcta = emergente();
    if (correcta === "si")
      alert("perfecto " + nombre + " esta es la adecuada"),
        (puntos.innerHTML = puntuacion[12]),
        (ganados.innerHTML = puntuacion[7]),
        (pregunta2.style.display = "none"),
        ((pregunta1.style.display = "none"),
        (pregunta3.style.display = "none"),
        (pregunta4.style.display = "none"),
        (pregunta5.style.display = "none"),
        (pregunta6.style.display = "none"),
        (pregunta7.style.display = "none"),
        (pregunta8.style.display = "block"));
  };

  d7.onclick = function () {
    preguntaas(11);
  };

  //pregunta 8
  a8.onclick = function () {
    preguntaas(12);
  };

  d8.onclick = function () {
    preguntaas(12);
  };

  c8.onclick = function () {
    preguntaas(12);
  };

  b8.onclick = function () {
    correcta = emergente();
    if (correcta === "si")
      alert("perfecto " + nombre + " esta es la adecuada"),
        (puntos.innerHTML = puntuacion[13]),
        (ganados.innerHTML = puntuacion[8]),
        (pregunta2.style.display = "none"),
        ((pregunta1.style.display = "none"),
        (pregunta3.style.display = "none"),
        (pregunta4.style.display = "none"),
        (pregunta5.style.display = "none"),
        (pregunta6.style.display = "none"),
        (pregunta7.style.display = "none"),
        (pregunta8.style.display = "none"),
        (pregunta9.style.display = "block"));
  };

  //pregunta 9
  a9.onclick = function () {
    correcta = emergente();
    if (correcta === "si")
      alert("perfecto " + nombre + " esta es la adecuada"),
        (puntos.innerHTML = puntuacion[14]),
        (ganados.innerHTML = puntuacion[9]),
        (pregunta2.style.display = "none"),
        ((pregunta1.style.display = "none"),
        (pregunta3.style.display = "none"),
        (pregunta4.style.display = "none"),
        (pregunta5.style.display = "none"),
        (pregunta6.style.display = "none"),
        (pregunta7.style.display = "none"),
        (pregunta8.style.display = "none"),
        (pregunta9.style.display = "none"),
        (pregunta10.style.display = "block"));
  };

  b9.onclick = function () {
    preguntaas(13);
  };

  c9.onclick = function () {
    preguntaas(13);
  };

  d9.onclick = function () {
    preguntaas(13);
  };

  //pregunta 10
  a10.onclick = function () {
    preguntaas(14);
  };

  c10.onclick = function () {
    correcta = emergente();
    if (correcta === "si")
      alert("perfecto " + nombre + " esta es la adecuada"),
        (puntos.innerHTML = puntuacion[15]),
        (ganados.innerHTML = puntuacion[19]),
        (pregunta2.style.display = "none"),
        ((pregunta1.style.display = "none"),
        (pregunta3.style.display = "none"),
        (pregunta4.style.display = "none"),
        (pregunta5.style.display = "none"),
        (pregunta6.style.display = "none"),
        (pregunta7.style.display = "none"),
        (pregunta8.style.display = "none"),
        (pregunta9.style.display = "none"),
        (pregunta10.style.display = "none"),
        (pregunta11.style.display = "block"));
  };

  b10.onclick = function () {
    preguntaas(14);
  };

  d10.onclick = function () {
    preguntaas(14);
  };

  //pregunta 11
  a11.onclick = function () {
    preguntaas(15);
  };

  d11.onclick = function () {
    preguntaas(15);
  };

  c11.onclick = function () {
    preguntaas(15);
  };

  b11.onclick = function () {
    correcta = emergente();
    if (correcta === "si")
      alert("perfecto " + nombre + " esta es la adecuada"),
        (puntos.innerHTML = puntuacion[16]),
        (ganados.innerHTML = puntuacion[20]),
        (pregunta2.style.display = "none"),
        ((pregunta1.style.display = "none"),
        (pregunta3.style.display = "none"),
        (pregunta4.style.display = "none"),
        (pregunta5.style.display = "none"),
        (pregunta6.style.display = "none"),
        (pregunta7.style.display = "none"),
        (pregunta8.style.display = "none"),
        (pregunta9.style.display = "none"),
        (pregunta10.style.display = "none"),
        (pregunta11.style.display = "none"),
        (pregunta12.style.display = "block"));
  };

  //pregunta 12
  a12.onclick = function () {
    preguntaas(16);
  };

  b12.onclick = function () {
    preguntaas(16);
  };

  d12.onclick = function () {
    correcta = emergente();
    if (correcta === "si")
      alert("perfecto " + nombre + " esta es la adecuada"),
        (puntos.innerHTML = puntuacion[17]),
        (nombre1.innerHTML = "<b>" + nombre + "</b>"),
        (nombre1.style.display = "block"),
        (final.style.display = "block"),
        (pregunta2.style.display = "none"),
        ((pregunta1.style.display = "none"),
        (pregunta3.style.display = "none"),
        (pregunta4.style.display = "none"),
        (pregunta5.style.display = "none"),
        (pregunta6.style.display = "none"),
        (pregunta7.style.display = "none"),
        (pregunta8.style.display = "none"),
        (pregunta9.style.display = "none"),
        (pregunta10.style.display = "none"),
        (pregunta11.style.display = "none"),
        (pregunta12.style.display = "none"));
  };

  c12.onclick = function () {
    
    preguntaas(16);
  };
};

start.onclick = function () {
  fnStart();
};