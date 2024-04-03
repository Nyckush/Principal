// Asignando Variables para : Botones de dercha y Izquierda.//

let btnDer = document.getElementById("der");
let btnIzq = document.getElementById("izq");

// elemento seccion con las temporaadas  = a.

let a = document.getElementById("sessions");


// funcion para el boton derecho//

function desplazandoDer() {

a.scrollLeft+=600;


}

//funcion para el boton Izq //


function desplazandoIzq () {

    a.scrollLeft -= 600;
} 

//eventos para las variables : btnIzq , btnDer //

btnDer.addEventListener("click",desplazandoDer);
btnIzq.addEventListener("click",desplazandoIzq);



//Abrir caja de temporada 1

function abrirT1 () {
    
    if($("#capT1").eq(0).css("display")=="none"){

      return   $("#capT1").css("display","flex");
    }
   else {

      return   $("#capT1").eq(0).slideUp();
   }
    


}

$("#T1").on("click",abrirT1);



function Cerrar () {

$("#capT1").eq(0).slideUp()

}

$(".btnX").eq(0).on("click",Cerrar);


//TEMA : NAVBAR //

let eleNabvar = $("#barraDeInicio").eq(0);

let scrollValorInicial = window.scrollY || document.documentElement.scrollTop;


function barra () {

  let nuevoValorScroll = window.scrollY || document.documentElement.scrollTop;

   if(scrollValorInicial >nuevoValorScroll){

    eleNabvar.css("top","0");
    eleNabvar.css("position","fixed");
    eleNabvar.css("transition","top 0.3s ease-in-out");
    eleNabvar.css("z-index","500");


   }

   else{
    eleNabvar.css("top","-60px")
   }

    scrollValorInicial = nuevoValorScroll;

}

window.addEventListener("scroll",barra);

