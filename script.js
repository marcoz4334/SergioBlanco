const burger = document.querySelector(".burger");
const cuerpo = document.querySelector("body");
burger.addEventListener("click", menu)

function menu(){
    if(document.getElementById("burger").style.display==='block')
    document.getElementById("burger").style.display='none'
    else
        document.getElementById("burger").style.display='block'
        document.getElementById("burger").style.transition='all: 3s'
        cuerpo.classList.toggle("no_scroll")

}