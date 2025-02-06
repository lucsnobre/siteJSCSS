document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const categorias = [
        { 
            nome: "Corteiz x Nike Air Max 95 SP", 
            legenda: "Lançado como parte do pacote ‘Rules the World’ da marca de streetwear do Reino Unido, o Corteiz x Nike Air Max 95 SP ‘Aegean Storm’ atualiza o corredor retrô.", 
            icon: "corteiz.webp", 
            preco: "R$ 999,99",
            cor: "#00467F"
        },
        { 
            nome: "Nike Air Max 97 OG", 
            legenda: "Ícone inspirado nos trens-bala japoneses, o Nike Air Max 97 OG 'Silver Bullet' redefine o estilo esportivo com seu visual futurista prateado e detalhes bem vibrantes.", 
            icon: "bullet.webp", 
            preco: "R$ 849,99",
            cor: "#ba2626"
        },
        { 
            nome: "Nike Shox TL", 
            legenda: "Com suas molas características, o Nike Shox TL oferece absorção de impacto incomparável e um estilo ousado e inovador nas ruas e ambientes urbanos.", 
            icon: "shox.webp", 
            preco: "R$ 729,99",
            cor: "#474747"
        },
        { 
            nome: "Nike Air Max DN", 
            legenda: "Diga olá à nova geração de tecnologia Air. O Air Max Dn apresenta o sistema Dynamic Air de tubos de pressão dupla, criando uma sensação reativa a cada passo, do dia ou noite.", 
            icon: "quena.png" , 
            preco: "R$ 899,99",
            cor: "#a61c5c"
        }
    ];

    function criarCard(categoria) {
        const cardContainer = document.getElementById("cards-container");

        if (!cardContainer) {
            console.error("Elemento #cards-container não encontrado!");
            return;
        }

        const card = document.createElement("div");
        card.classList.add("card");
        card.style.border = "3px solid transparent"; // Começa sem borda visível
        card.style.padding = "15px";
        card.style.borderRadius = "8px";
        card.style.textAlign = "center";
        card.style.width = "377px";
        card.style.height="700px"
        card.style.boxShadow = "3px 4px 8px #636363";
        card.style.transition = "border-color 0.4s ease";
       

        // Adiciona evento para mostrar a borda ao passar o mouse
        card.addEventListener("mouseover", function () {
            card.style.borderColor = categoria.cor;
        });

        // Evento para esconder a borda ao tirar o mouse
        card.addEventListener("mouseleave", function () {
            card.style.borderColor = "transparent";
        });

        const img = document.createElement("img");
        img.src = `./img/${categoria.icon}`;
        img.alt = categoria.nome;
        img.style.width = "100%";
        img.style.borderRadius = "8px";
        img.style.width = "100%";
        img.style.height = "auto";
        img.style.maxHeight = "200px"; // Ajuste conforme necessário
        img.style.objectFit = "contain"; // Mantém a proporção
        img.style.borderRadius = "8px";


        const title = document.createElement("h3");
        title.textContent = categoria.nome;
        title.style.margin = "10px 0 5px";
        title.style.fontSize = "30px";

        const legenda = document.createElement("p");
        legenda.textContent = categoria.legenda;
        legenda.style.fontSize = "20px";
        legenda.style.color = "#555";
        legenda.style.marginBottom = "5px";

        const preco = document.createElement("p");
        preco.textContent = categoria.preco;
        preco.style.fontSize = "18px";
        preco.style.fontWeight = "bold";
        preco.style.color = "#000";
        preco.style.marginBottom = "8px";

        // Criando as estrelas de avaliação ⭐⭐⭐⭐⭐
        const estrelas = document.createElement("div");
        estrelas.innerHTML = "★★★★★";
        estrelas.style.color = "#FFD700";
        estrelas.style.fontSize = "40px";
        estrelas.style.marginBottom = "10px";
        estrelas.style.margin = 'px'

        // Criando botão de comprar
        const botao = document.createElement("button");
        botao.textContent = "Comprar";
        botao.style.backgroundColor = categoria.cor;
        botao.style.color = "#fff";
        botao.style.border = "none";
        botao.style.padding = "1000px 1000px";
        botao.style.borderRadius = "5px";
        botao.style.cursor = "pointer";
        botao.style.fontSize = "30px";
        botao.style.fontWeight = "bold";
        botao.style.transition = "background-color 0.3s ease";
        botao.style.width = "377px";
        botao.style.padding = "54px";
        botao.style.border = "none";
        botao.style.borderRadius = "0 0 8px 8px";
        botao.style.fontSize = "30px";
        botao.style.fontWeight = "bold";
        botao.style.cursor = "pointer";
        botao.style.color = "#fff";
        botao.style.backgroundColor = categoria.cor;
        botao.style.transition = "background-color 0.3s ease, transform 0.2s ease";
        botao.style.marginTop = '89px'
       
        botao.style.zIndex="4"
        
        const conteudoCard = document.createElement("div");
        conteudoCard.style.display = "flex";
        conteudoCard.style.flexDirection = "column";
        conteudoCard.style.flexGrow = "1"; // Faz o conteúdo crescer e empurrar o botão para baixo

botao.addEventListener("mouseover", function () {
    botao.style.backgroundColor = "#222";
    
});

botao.addEventListener("mouseleave", function () {
    botao.style.backgroundColor = categoria.cor;
    botao.style.transform = "scale(1)";
});


        botao.addEventListener("mouseover", function () {
            botao.style.backgroundColor = "#222";
        });

        botao.addEventListener("mouseleave", function () {
            botao.style.backgroundColor = categoria.cor;
        });

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(legenda);
        card.appendChild(preco);
        card.appendChild(estrelas);
        card.appendChild(botao);
        cardContainer.appendChild(card);
    }

    categorias.forEach(criarCard);
});
