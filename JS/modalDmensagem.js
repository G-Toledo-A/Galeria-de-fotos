//exibe a mensagem(presente no HTML) na tela
const caixaDialogo = document.getElementById("exampleDialog");
const btnFechar = document.querySelector("[data-bs-dismiss]");

btnFechar.addEventListener("click", fechaMensagem);

export function abreMensagem(){
    caixaDialogo.showModal();
}

function fechaMensagem(){
    caixaDialogo.close();
}