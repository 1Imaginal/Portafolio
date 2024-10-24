var registro='';
var estilo=0;



function agregar(){
    var x = document.getElementById("tarea").value;
    var y = document.getElementById("adiciones");

    if(x == ''){
        alert("Inserte una tarea");
    } else{
        if (estilo%2 == 0) {
            registro = registro + "<tr class=\"renglon1\">";
          } else {
            registro = registro + "<tr class=\"renglon2\">";
          }
       registro = registro +  "<input type='checkbox'>" + x + "</tr>";
       y.innerHTML = registro;
    }
}

function limpiar(){
    var y = document.getElementById("adiciones");
    y.innerHTML ='';
    registro='';
}