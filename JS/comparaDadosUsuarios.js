import { geraImagens } from "./geraImagens.js";
import { abreMensagem } from "./modalDmensagem.js";

export function compara(username, password, lista) {
    //tira espaços e deixa tudo minusculo
    const nomeUsu = username.trim().toLowerCase();
    const senhUsu = password.trim().toLowerCase();

    //se os dados baterem com algum usuario, preenche variavel
    const usuarioEncontrado = lista.find(usuario => 
        nomeUsu === usuario.username.toLowerCase() && 
        senhUsu === usuario.email.toLowerCase()
    );

    //se o usuario for encontrado
    if (usuarioEncontrado) {
        //mostra os dados no console
        /*
        console.log(
            `Login aprovado!\n` +
            `Nome inserido: ${username} | Encontrado: ${usuarioEncontrado.username}\n` +
            `Senha inserida: ${password} | Encontrada: ${usuarioEncontrado.email}`
        );
        */
        
        //muda a tela
        geraImagens();
    //se não
    } else {
        //mensagem de erro
        abreMensagem("O usuário não foi encontrado.");
    }
}