
let a = document.getElementById("barraDeInicio");

let scrollPos = window.scrollY || document.documentElement.scrollTop;


function aparecer() {
   
    let newScrollPos = window.scrollY || document.documentElement.scrollTop;

   
    if (newScrollPos < scrollPos) {
      
        a.style.top = "0";
        a.style.position = "fixed";
        a.style.transition = "top 0.3s ease-in-out"; 
   

    } else {
       
        a.style.top = "-60px"; 
       
    }

   
    scrollPos = newScrollPos;
}


window.addEventListener("scroll", aparecer);


let btnCerrar = document.getElementsByClassName("cerrar")[0];







