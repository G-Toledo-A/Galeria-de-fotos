import { compara } from "./comparaDadosUsuarios.js";

//pega o link da API
const API = 'https://jsonplaceholder.typicode.com/users';

// Faz uma requisição e transforma a resposta do servidor em um objeto JavaScript
async function requisitar(caminho, opcoes = {}) {
    // Envia a requisição pela internet.
    const resposta = await fetch(`${API}${caminho}`, opcoes); 

    // Verifica falhas.
    if (!resposta.ok) throw new Error(`O servidor respondeu com HTTP ${resposta.status}.`);

    return resposta.json(); // Converte o JSON recebido em dados JavaScript.
}

//mostra os dados em uma tabela
export async function logar(prevencao){
    //previne que a página recarregue
    prevencao.preventDefault();

    // Pega os dados da API e guarda na lista (array) 'listaUsuarios'
    const listaUsuarios = await requisitar('');

    //pega dados do form
    const nomeUsu = document.getElementById("InputEmail").value;
    const passUsu = document.getElementById("InputPassword").value;

    //faz a comparação com os usuarios na lista
    compara(nomeUsu, passUsu, listaUsuarios);

    //coloca conteudo da outra página na tela / main
    //buscaArquivo();

    // Cria as linhas da tabela percorrendo cada item da lista
    const linhasTabela = listaUsuarios.map(usuario => `
        <tr>
            <th scope="row">${usuario.id}</th>
            <td>${usuario.username}</td>
            <td>${usuario.email}</td>
        </tr>
    `).join('');

    //mostra dados pegos do link(temporario)
    dados.innerHTML = 
    `
        <table class="table">
            <thead>
                <tr>
                <th scope="col">id</th>
                <th scope="col">username</th>
                <th scope="col">email</th>
                </tr>
            </thead>
            <tbody>
                ${linhasTabela}
            </tbody>
        </table>
    `;
}