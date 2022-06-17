function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}
function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
}
// document.querySelector('.tecla_pom').onclick = tocarSomPom

const listaDeTeclas = document.querySelectorAll('.tecla')

// listaDeTeclas.forEach((p, i) => {
//     listaDeTeclas[i].onclick = tocaSomPom
// })

let contador = 0;

while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSomPom;
    contador = contador + 1;
    console.log(contador);
}