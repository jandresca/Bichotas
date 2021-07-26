let testB = document.getElementById("bootstraptest");
let pantallaBootstrap = document.getElementById("pantallaBootstrap");
let testL = document.getElementById("logicatest");
let pantallaLogica = document.getElementById("pantallaLogica");

const fnBoostrap = () => {
  let pregunta1 = prompt(
    "Primera pregunta, ¿Bootstrap es un framework front-end utilizado para desarrollar aplicaciones web? verdadero(v) o falso(f)"
  );
  pregunta1 = pregunta1.toLowerCase();
  let pregunta2 = prompt(
    "Segunda pregunta, ¿Bootstrap está constituido por una serie de archivos CSS y JavaScript? verdadero(v) o falso(f)"
  );
  pregunta2 = pregunta2.toLowerCase();
  if (pregunta1 === "v" && pregunta2 === "v") {
    pantallaBootstrap.innerHTML += "Aprobaste el examen";
  } else {
    pantallaBootstrap.innerHTML +=
      "No aprobaste el examen, por favor intentalo de nuevo";
  }
};
const fnLogica1 = () => {
  let pregunta12 = prompt(
    "Primera pregunta, ¿la lógica no es la ciencia que estudia los métodos de razonamiento la cual proporciona alguna reglas y técnicas? verdadero(v) o falso(f)"
  );
  pregunta12 = pregunta12.toLowerCase();
  let pregunta22 = prompt(
    "Segunda pregunta, ¿la logica matematica es una Ciencia que estudia los procedimientos para distinguir si un razonamiento es correcto o incorrecto? verdadero(v) o falso(f)"
  );
  pregunta22 = pregunta22.toLowerCase();
  if (pregunta12 === "f" && pregunta22 === "v") {
    pantallaLogica.innerHTML += "Aprobaste el examen";
  } else {
    pantallaLogica.innerHTML +=
      "No aprobaste el examen, por favor intentalo de nuevo";
  }
};

testB.onclick = function () {
  fnBoostrap();
};
testL.onclick = function () {
  fnLogica1();
};
