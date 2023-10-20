





botao1.onclick = function(){

const iptFrase = document.querySelector("#exercicio1");
const divResposta = document.querySelector(".resultado1")

let frase = iptFrase.value;

let qtdVogais = 0;

for (let i=0; i<frase.length; i++){
    //compara a letra com vogais

    let vogais = "aeiou"
    
    let letra = frase[i].toLowerCase()

    if (vogais.indexOf(letra) != -1) qtdVogais ++

    

    /*outra solução

    let vogaisList =["a","e","i","o","u"]
    if (vogaisList.includes(letra)) qtdVogais++*/


    //if ("aeiou".indexOf(frase[i].toLowerCase()) != -1)

   /*if (frase[i] .toLowerCase() == "a") qtdVogais++

   if (frase[i] .toLowerCase() == "e") qtdVogais++

   if (frase[i] .toLowerCase() == "i") qtdVogais++

   if (frase[i] .toLowerCase() == "o") qtdVogais++

   if (frase[i] .toLowerCase() == "u") qtdVogais++*/

}

//montando a string de resposta
let resposta = "O numero de vogais é: " + qtdVogais;
//atribuindo a string de resposta na div
divResposta.innerHTML = resposta





}