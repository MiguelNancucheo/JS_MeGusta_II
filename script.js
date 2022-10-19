let megusta = [9,12,9];

//obtiene los elementos que sean de clase boton_like
let ele_botom = document.getElementsByClassName("boton_like");

//muestra los datos
function refresca() {
    let ele_cont1 = document.querySelector("#contador_1");
    let ele_cont2 = document.querySelector("#contador_2");
    let ele_cont3 = document.querySelector("#contador_3");
    ele_cont1.innerText = megusta[0];
    ele_cont2.innerText = megusta[1];
    ele_cont3.innerText = megusta[2];
}

//evento click, se utiliza el id del target de cada 
const suma_01 = (elemento) => {
    // console.log(elemento.target.id);
    if (elemento.target.id==="boton_01") {
        megusta[0] ++;    
    } else if (elemento.target.id==="boton_02") {
        megusta[1] ++;    
    } else {
        megusta[2] ++;    
    }
    refresca();
}

//asigna el evento click
ele_botom[0].addEventListener("click", suma_01);
ele_botom[1].addEventListener("click", suma_01);
ele_botom[2].addEventListener("click", suma_01);

// muestra los contadores
refresca();