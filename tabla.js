var registro = ""; 
var estilo=0;

function registrar(){
    //Validacion
    if(document.getElementById("name").value == ''){
        alert("Por favor inserta un nombre");
    } else if(document.getElementById("email").value == ''){
        alert("Port favor inserta un correo");
    } else if(document.querySelectorAll('input[name=ocupacion]:checked').length == 0) {
        alert("Por favor selecciona al menos una opcion");
    } else if(document.querySelector('input[name=genero]:checked') == null) {
        alert("Por favor indica tu genero");
    } else if(document.getElementById("fecha").value == ''){
        alert("Por favor indica tu fecha de nacimiento");
    } else {
        if (estilo%2 == 0) {
            registro = registro + "<tr class=\"renglon1\">";
          } else {
            registro = registro + "<tr class=\"renglon2\">";
          }

          /*Nombre*/
          x = document.getElementById("name").value;
          registro = registro + "<td>" + x + "</td>";

          /*Correo*/
          x = document.getElementById("email").value;
          registro = registro + "<td>" + x + "</td>";

          /*Ocupacion*/
          registro = registro + "<td>";
          iterable = document.querySelectorAll('input[name=ocupacion]:checked');
          for(iterador of iterable){
            registro = registro + iterador.value + "<br>";
          }
          registro = registro + "</td>";

          /*Genero*/
          registro = registro + "<td>" + document.querySelector('input[name=genero]:checked').value + "</td>";

          /*Fecha de nacimiento*/
          registro = registro + "<td>" + document.getElementById("fecha").value + "</td>";

          /*Color favorito*/
          registro = registro + "<td>" + document.getElementById("color").value + "</td>";

          /*Barrita*/
          registro = registro + "<td>" + document.getElementById("barrita").value + "</td>";

          /*Finalizar registro*/
          registro = registro + "</tr>"
          document.getElementById("registros").innerHTML = registro;

        /*Limpiar formulario*/
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("estudiante").checked = false;
        document.getElementById("trabajador").checked = false;
        document.getElementById("otra").checked = false;
        document.getElementById("mas").checked = false;
        document.getElementById("fem").checked = false;
        document.getElementById("otro").checked = false;
        document.getElementById("fecha").value = '';
        document.getElementById("color").value = "#000000";
        document.getElementById("barrita").value = 50;

        /*alternar estilos*/
        estilo++;
    }
    

}