/* 
	OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 -  pegar o elemento HTML dos botões
	- passo 2 -  identificar o clique do usuário no botão
	- passo 3 - desmarcar o botão selecionado anterior
	- passo 4 - marcar o botão clicado como se estivesse selecionada
	- passo 5 - esconder a imagem de fundo anterior
	- passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
*/

// passo 1 -  pegar o elemento HTML dos botões
const botoesCarrosel = document.querySelectorAll(".botao");
const imagens= document.querySelectorAll(".imagem");


// passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrosel.forEach((botao, indice) =>{
    botao.addEventListener("click", ()=>{
        //passo 3- desamarcar o botao selecionado anterior
        desativarBotaoSelecionado();
        // passo 4 - marcar o botao clicado como se estivesse selecionado
        selecionarBotaoCarrosel(botao);
        //passo 5 -esconder imagem ativa de fundo
        esconderImagemAtiva();
        //passo 6 -aparecer a imagem de funco correspondente ao botao clicado
        mostrarImagemDeFundo(indice);
    });

});


    function mostrarImagemDeFundo(indice){
        imagens[indice].classList.add("ativa");
    }

    function selecionarBotaoCarrosel(botao){
        botao.classList.add("selecionado")
    }

    function esconderImagemAtiva(){
        const imagemAtiva = document.querySelector(".ativa");
        imagemAtiva.classList.remove("ativa");
    }

    function desativarBotaoSelecionado(){
        const botaoSelecionado = document.querySelector(".selecionado");
        botaoSelecionado.classList.remove("selecionado");
    }

