import { logar } from "./processaLogin.js";

export const conteudo = document.getElementById("conteudo");

function geraForm(){
    conteudo.innerHTML = 
    `
        <!--deixar elementos de texto no lado esquerdo depois-->
        <form class="border" id="login">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="InputPassword">
            </div>
            <button type="submit" class="btn-solid theme-primary">Entrar</button>
        </form>
    `;

    //pega o id do formulario
    const formulario = document.getElementById("login");

    //adiciona "ouvinte" ao formulario de login
    //quando há "submit" puxa a função "logar"
    formulario.addEventListener("submit", logar);
}

geraForm();