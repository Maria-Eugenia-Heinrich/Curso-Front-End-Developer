  //Obtiene el elemento con id coleccion

  var palabras=document.getElementById("coleccion");

  //Aplico la función para el elemento coleccion
  palabras.addEventListener('keyup',function contar()
   {
    //Cuento la cantidad de letras que se encuentran
    //en el elemento coleccion y lo muestro dentro de la label contador.
    document.getElementById('contador').innerText=palabras.value.length;

   }
  );
