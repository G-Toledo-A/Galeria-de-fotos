import { caixaDialogo } from "./modalDmensagem.js";

export function ativaVisualizacao(){
    //pega o id da thumbnail
    const imagens = document.querySelectorAll("[data-img-id]");
    
    //adiciona uma ativação da função de abrir imagem para cada imagem
    imagens.forEach(imagem => {
        imagem.addEventListener("click",evento => {
            //previne que a pagina recarregue
            evento.preventDefault();

            //pega os dados da imagem clicada
            const dadosImg = {
                id: imagem.dataset.imgId,
                url: imagem.dataset.imgUrl,
                titulo: imagem.dataset.imgTitle
            };

            //abre a imagem de acordo com o id
            abrirImagem(dadosImg);
        })
    })
}

function abrirImagem({ titulo, url}){
    //pega o "dialog-title"
    const tituloModal = document.querySelector(".dialog-title");

    //pega a tag do paragrafo
    const paragrafo = document.getElementById("mensagem");

    //coloca o titulo da imagem no titulo do modal.
    tituloModal.innerHTML = titulo;

    paragrafo.innerHTML = `<img src="${url}" alt="${titulo}" class="img-fluid">`

    //abre imagem no modal
    caixaDialogo.showModal();
}