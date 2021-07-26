let cuestionario = document.getElementById("cuestionario");


const encuesta = () => {
    let nombreU = prompt("Digite por favor su nombre")
    if (nombreU == null || nombreU == "") {
        alert("Por favor ingrese su nombre o no puede continuar")
    } else {
        pre1 = prompt("Ingresa solo verdadero o falso a las siguientes preguntas \n Git Hub es un portal creado para alojar el código de las aplicaciones de cualquier desarrollador, y que fue comprado por Microsoft en junio del 2018.")
        pre2 = pre1.toLowerCase();
        if (pre2 === "verdadero") {
            pre1 = prompt("Ingresa solo verdadero o falso a las siguientes preguntas \n Con github se pueden hackear a las demas personas.")
            pre2 = pre1.toLowerCase();
            if (pre2 === "falso") {
                pre1 = prompt("Ingresa solo verdadero o falso a las siguientes preguntas \n GitLab es una herramienta de ciclo de vida y repositorio de Git. Es un completo DevOps plataforma, que permite a los profesionales gestionar y realizar diversar tareas de proyecto. Las tareas incluyen la planificaión del proyecto, la gestión del código fuente, el mantenimiento de la seguridad y el seguimiento. ")
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