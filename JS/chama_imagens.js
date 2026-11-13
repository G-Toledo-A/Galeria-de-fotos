//função que pega as imagens do link
function encontraImagens(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(Response => Response.json())
    .then(data => { 
        console.log(data); 
    })
    .catch(error => console.error('Erro ao carregar o JSON: ', error));
}

data.forEach(imagem => {
    console.log(`Imagem: ${imagem.id}`);
    console.log(`Titulo: ${imagem.title}`);
    console.log(`URL: ${imagem.url}`);
    console.log(`ThumbURL: ${imagem.thumbnailUrl}`);
});

//pega o espaco em que as imagens ficarão
const areaImagens = document.getElementById(".container");