function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento == null){
        console.log('Elemento não encontrado ou seletor inválido')
    }

    if (elemento && elemento.localName === 'audio' ){
            elemento.play();
    }else {
        console.log('Elemento não encontrado ou seletor inválido')
    }
}

// function tocaSomClap() {
//     document.querySelector('#som_tecla_clap').play();
// }
// document.querySelector('.tecla_pom').onclick = tocarSomPom

const listaDeTeclas = document.querySelectorAll('.tecla')

// listaDeTeclas.forEach((p, i) => {
//     listaDeTeclas[i].onclick = tocaSomPom
// })

let contador = 0;

for(let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
    tocaSom(idAudio);
    }
    tecla.onkeydown = function (evento) {
        if(evento.code == 'Space' || evento.code ==     'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }

}
