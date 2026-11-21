import { compara } from "./comparaDadosUsuarios.js";
import { abreMensagem } from "./modalDmensagem.js";

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

    try{
        // Pega os dados da API e guarda na lista (array) 'listaUsuarios'
        const listaUsuarios = await requisitar('');

        //mostra os dados de usuarios(serve apenas para testes)
        /*
        listaUsuarios.forEach(usuario => {
            console.log(
                `id: ${usuario.id}\nusername: ${usuario.username}\nemail: ${usuario.email}`
            );
        });
        */

        //pega dados do form
        const nomeUsu = document.getElementById("InputEmail").value;
        const passUsu = document.getElementById("InputPassword").value;

        //ve se algum dos 2 dados está faltando
        if(!nomeUsu && !passUsu){
            //mensagem de erro
            abreMensagem("Insira os dados do usuário.");
        }
        //ve se o nome está faltando
        else if(!nomeUsu){
            //mensagem de erro
            abreMensagem("Nome do usuário está vazio.");
        }
        //ve se a senha está faltando
        else if(!passUsu){
            //mensagem de erro
            abreMensagem("Senha do usuário está vazia.");
        }
        else {    
           //faz a comparação com os usuarios na lista
           compara(nomeUsu, passUsu, listaUsuarios);
        }
    }
    catch(erro) {
        abreMensagem("Não foi possível buscar usuários: ", erro);
    }
}