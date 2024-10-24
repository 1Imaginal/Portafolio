function formulario(){
    x = "Nombre: " +document.getElementById("name").value;
    x = x + "<br>Correo: " +document.getElementById("mail").value;
    x = x + "<br>Edad: " +document.getElementById("age").value;
    x = x +"<br>Genero: ";
  if(document.getElementById("male").checked) {
    x = x + document.getElementById("male").value;
  } else if(document.getElementById("female").checked){
    x = x + document.getElementById("female").value;
  } else if(document.getElementById("other").checked) {
    x = x + document.getElementById("other").value;
  } 
  x = x + "<br> Fecha de nacimiento: " +document.getElementById("birth").value;
  x = x + "<br> Color favorito: " +document.getElementById("col").value;
    document.getElementById("resultado").innerHTML = x;
    document.getelemntbyid("resultado").innerhtml="uwu";
}