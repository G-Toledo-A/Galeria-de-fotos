//pega o link da API
const API = 'https://jsonplaceholder.typicode.com/photos';

// Faz uma requisição e transforma a resposta do servidor em um objeto JavaScript
export async function requisitar(caminho, opcoes = {}) {
    // Envia a requisição pela internet.
    const resposta = await fetch(`${API}${caminho}`, opcoes); 

    // Verifica falhas.
    if (!resposta.ok) throw new Error(`O servidor respondeu com HTTP ${resposta.status}.`);

    return resposta.json(); // Converte o JSON recebido em dados JavaScript.
}