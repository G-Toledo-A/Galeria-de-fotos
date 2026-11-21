//pega o link da API
const API = 'https://jsonplaceholder.typicode.com/photos';

// Faz uma requisição e transforma a resposta do servidor em um objeto JavaScript
async function requisitar(caminho, opcoes = {}) {
    // Envia a requisição pela internet.
    const resposta = await fetch(`${API}${caminho}`, opcoes); 

    // Verifica falhas.
    if (!resposta.ok) throw new Error(`O servidor respondeu com HTTP ${resposta.status}.`);

    return resposta.json(); // Converte o JSON recebido em dados JavaScript.
}

/*
data.forEach(imagem => {
    console.log(`Imagem: ${imagem.id}`);
    console.log(`Titulo: ${imagem.title}`);
    console.log(`URL: ${imagem.url}`);
    console.log(`ThumbURL: ${imagem.thumbnailUrl}`);
});

//pega o espaco em que as imagens ficarão
const areaImagens = document.getElementById(".container");
*/