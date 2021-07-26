let cuestionario = document.getElementById("cuestionario");


const encuesta = () => {
    let nombreU = prompt("Digite por favor su nombre")
    if (nombreU == null || nombreU == "") {
        alert("Por favor ingrese su nombre o no puede continuar")
    } else {
        pre1 = prompt("Ingresa solo verdadero o falso a las siguientes preguntas \n Las siglas CSS significan: Cascading System Sheets")
        pre2 = pre1.toLowerCase();
        if (pre2 === "falso") {
            pre1 = prompt("Ingresa solo verdadero o falso a las siguientes preguntas \n La etiqueta <style> se escribe en un archivo .css")
            pre2 = pre1.toLowerCase();
            if (pre2 === "falso") {
                pre1 = prompt("Ingresa solo verdadero o falso a las siguientes preguntas \n El código CSS hace la vida más fácil al desarrollador front-end al separar las estructura de un documento HTML de su presentación. Dicho de otro modo el HTML actuaría como es esqueleto de la web, definiendo su estructura básica, y el CSS añadiría toda la capa de personalización sobre el que la web define su aspecto final.")
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