let cuestionario = document.getElementById("cuestionario");


const encuesta = () => {
    let nombreU = prompt("Digite por favor su nombre")
    if (nombreU == null || nombreU == "") {
        alert("Por favor ingrese su nombre o no puede continuar")
    } else {
        pre1 = prompt("Ingresa solo verdadero o falso a las siguientes preguntas \n Las siglas la lógica es la ciencia que estudia los métodos de razonamiento la cual proporciona alguna reglas y técnicas para determinar si un argumento es válido o no, indica la forma correcta de obtener respuestas y los métodos para llegar a ellas.")
        pre2 = pre1.toLowerCase();
        if (pre2 === "verdadero") {
            pre1 = prompt("Ingresa solo verdadero o falso a las siguientes preguntas \n Ciencia que estudia los procedimientos para distinguir si un razonamiento es correcto o incorrecto.")
            pre2 = pre1.toLowerCase();
            if (pre2 === "verdadero") {
                pre1 = prompt("Ingresa solo verdadero o falso a las siguientes preguntas \n Es la parte de la lógica que estudia las proposiciones y símbolos utilizados en nuevas formaciones de las mismas que podrán ser verdaderas o falsas, señaladas por reglas formales, llamados conectores lógicos.")
            pre2 = pre1.toLowerCase();
            if (pre2 === "verdadero") {
                alert("Felicidades " + nombreU + " acertaste en todas estas en buen camino hacia la programación")
            } else {
                alert("Lo siento estas equivocado por favor intenta de nuevo")  
            }
            } else {
                alert("Lo siento estas equivocado por favor intenta de nuevo")  
            }
        } else {
            alert("Lo siento estas equivocado por favor intenta de nuevo")
        }
    }
}       


cuestionario.onclick = function () {
    encuesta();
}