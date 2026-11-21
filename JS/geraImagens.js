import { requisitar } from "./chamaImagens.js";
import { abreMensagem } from "./modalDmensagem.js";
import { ativaVisualizacao } from "./abrirImagem.js";

export async function geraImagens(){
    //pega area principal do site
    const conteudo = document.getElementById("conteudo");

    try{
        //pega a lista de imagens
        const listaImagens = await requisitar('');

        //mostra os dados de todas as imagens pegas no console(por questões de teste)
        /*
        listaImagens.forEach(imagem => {
            console.log(
            `
                id: ${imagem.id}\n
                albumid: ${imagem.albumId}\n
                title: ${imagem.title}\n
                url: ${imagem.url}\n
                thumbUrl: ${imagem.thumbnailUrl}
            `);
        });
        */

        const imagens = listaImagens.slice(0, 24).map(imagem => `
            <div class="col">
                <div class="card h-100">
                    <a href="#" class="text-decoration-none text-dark">
                        <img 
                            src="${imagem.thumbnailUrl}" 
                            class="card-img-top" 
                            alt="${imagem.title}" 
                            data-img-id="${imagem.id}"
                            data-img-url="${imagem.url}"
                            data-img-title="${imagem.title}">
                        <div class="card-body p-2">
                            <h5 class="card-title fs-6 text-truncate" title="${imagem.title}">
                                ${imagem.title}
                            </h5>
                        </div>
                    </a>
                </div>
            </div>
        `).join('');

        conteudo.innerHTML = `
            <div class="row row-cols-2 row-cols-md-6 row-cols-lg-12 g-2">
                ${imagens}
            </div>
        `;

        //habilita as imagens clicaveis após carregar a lista
        ativaVisualizacao();
    }
    catch(erro){
        abreMensagem("Não foi possível encontrar imagens: ", erro);
    }
}