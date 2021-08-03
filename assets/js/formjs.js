let mensaje = document.getElementById("mensaje");

function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
  //preguntas
  let p1 = document.Form.p1.value;
  let p2 = document.Form.p2.value;
  let p3 = document.Form.p3.value;
  let p4 = document.Form.p4.value;
  let p5 = document.Form.p5.value;
  var nombre = document.Form.nombre.value;
  let p1Err = p2Err = p3Err = p4Err = p5Err = nombreErr = true;

  // validación del formulario
  a = p1.charAt(0);
  b = p2.charAt(0);
  c = p3.charAt(0);
  d = p4.charAt(0);
  e = p5.charAt(0);

//validar campo nombre
  if (nombre == "") {
    printError("nombreErr", "Por favor ingrese su Nombre ");
  } else {
    var regex =
      /^[ A-Za-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ1234567890ñÑ.,-]{3,100}$/;
    //var regex = /^[a-zA-áéíóúñüàè]{5,50}$/;
    if (regex.test(nombre) === false) {
      printError(
        "nombreErr",
        "Por favor ingrese un Nombre valido y con Max 100 letras"
      );
    } else {
      printError("nombreErr", "");
      nombreErr = false;
    }
  }
  //primera pregunta
  if (a === "v" || a === "f") {
    p1Err = false;
  }

  if (p1 == "") {
    printError("p1Err", "Por favor selecciona una opción (Verdadero o Falso)");
  } else {
    printError("p1Err", "");
    p1Err = false;
  }
  //segunda pregunta
  if (b === "v" || b === "f") {
    p1Err = false;
  }

  if (p2 == "") {
    printError("p2Err", "Por favor selecciona una opción (Verdadero o Falso)");
  } else {
    printError("p2Err", "");
    p2Err = false;
  }
  //tercera pregunta
  if (c === "v" || c === "f") {
    p3Err = false;
  }

  if (p3 == "") {
    printError("p3Err", "Por favor selecciona una opción (Verdadero o Falso)");
  } else {
    printError("p3Err", "");
    p3Err = false;
  }

//cuarta pregunta
if (d === "v" || d === "f") {
    p4Err = false;
  }

  if (p4 == "") {
    printError("p4Err", "Por favor selecciona una opción (Verdadero o Falso)");
  } else {
    printError("p4Err", "");
    p4Err = false;
  }

  //quinta pregunta
if (e === "v" || e === "f") {
    p5Err = false;
  }

  if (p5 == "") {
    printError("p5Err", "Por favor selecciona una opción (Verdadero o Falso)");
  } else {
    printError("p5Err", "");
    p5Err = false;
  }

  let buenas =0;
  // validación de respuestas
  if ((p1Err || p2Err || p3Err || p4Err || p5Err || nombreErr) == true) {
    return false;
  } else {
    if (a === "v" && b === "f" && c === "v" && d === "f" && e === "v") {
      alert(`Felicidades Aprobaste el Examen ${nombre}, preguntas correctas 5/5`);
    } else {
      a === "v"?buenas++:"";
      b === "v"?buenas++:"";
      c === "v"?buenas++:"";
      d === "v"?buenas++:"";
      e === "v"?buenas++:"";

      alert(`No Aprobaste el Examen ${nombre}, el numero de preguntas buenas son ${buenas}/5, por favor intentalo de nuevo`);
    }
  }
}
