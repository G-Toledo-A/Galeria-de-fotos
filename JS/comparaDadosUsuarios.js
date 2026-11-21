import { geraImagens } from "./geraImagens.js";
import { abreMensagem } from "./modalDmensagem.js";

// Pega o nome e a senha colocados no form
export function compara(username, password, lista) {
    //verifica se os dados batem com pelo menos 1 usuario da lista
    const usuarioValido = lista.some(usuario => 
        usuario.username === username && usuario.password === password
    );

    if (usuarioValido) {
        //abre a página
        geraImagens();
    } else {
        abreMensagem();
    }
}