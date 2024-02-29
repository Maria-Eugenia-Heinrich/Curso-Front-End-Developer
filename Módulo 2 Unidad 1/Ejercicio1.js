 //Obtiene todos los elementos con id blueviolet,deeppink y chartreuse

 var elementos=document.querySelectorAll("#blueviolet, #deeppink ,#chartreuse");
 var i=0; var color;

 //Ciclo for que permite cambiar el color de fondo

 for (i=0;i<elementos.length;i++)
   {
    //Para cada elemento de elementos aplico la función cambiarColorB
    elementos[i].addEventListener('click',function cambiarColorB()
     {

      color=this.id;//Selecciono el color según id.
      document.querySelector('body').style.background=color; //Cambio el fondo

     }, false);
   };