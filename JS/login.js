//pega o id do formulario
const formulario = document.getElementById("login");

//adiciona "ouvinte" ao formulario de login
//quando há "submit" puxa a função "logar"
formulario.addEventListener("submit", logar);

function buscaArquivo(){
    fetch('./imagens.html')
    .then(response => {
        //se não houver resposta
        if (!response.ok) {
            //diz o que deu errado
            throw new Error('Erro ao carregar arquivo: ' + response.status);
        }
        //se houver
        return response.text(); //converte dados recebidos para texto
    })
    //então
    .then(html => {
        //coloca no espaço da página
        document.getElementById('main').innerHTML = html;
    })
    //pega erros que possam ocorrer
    .catch(error => {
        console.error('Problema:', error);
    })
}

function logar(prevencao){
    //previne que a página recarregue
    prevencao.preventDefault();

    //faz a comparação com os usuarios na lista

    //coloca conteudo da outra página na tela / main
    buscaArquivo();
}