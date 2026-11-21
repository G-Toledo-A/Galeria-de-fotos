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

    listaUsuarios.forEach(usuario => {
        console.log(
            `id: ${usuario.id}\nusername: ${usuario.username}\nemail: ${usuario.email}`
        );
    });
}