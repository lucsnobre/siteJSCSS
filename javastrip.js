document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const categorias = [
        { 
            nome: "Nike Shox TL White Metallic Platinum Black", 
            legenda: "O Nike Shox TL leva o amortecimento mecânico para o próximo nível. Uma versão refeita do ícone de 2003, ele apresenta malha respirável na parte superior e tecnologia Nike Shox em todo o comprimento para absorção de impacto ideal e um visual ousado nas ruas.", 
            icon: "grupies.png", 
            preco: "R$ 1.270,00",
            cor: "#807c7c",
            link: "https://droper.app/d/9394/Corteiz_x_Nike_Air_Max_95_SP_Aegean_Storm"
        },
        { 
            nome: "Nike Shox TL Vapor Green Racer Blue", 
            legenda: "O Nike Shox TL leva o amortecimento mecânico para o próximo nível. Uma versão refeita do ícone de 2003, ele apresenta malha respirável na parte superior e tecnologia Nike Shox em todo o comprimento para absorção de impacto ideal e um visual ousado nas ruas.", 
            icon: "shoxzu.png", 
            preco: "R$ 1.599,90 ",
            cor: "#56a1d1",
            link: "https://droper.app/d/2468/Nike_Air_Max_97_White_Bullet"
        },
        { 
            nome: "Nike Shox TL Black", 
            legenda: "O Nike Shox TL leva o amortecimento mecânico para o próximo nível. Uma versão refeita do ícone de 2003, ele apresenta malha respirável na parte superior e tecnologia Nike Shox em todo o comprimento para absorção de impacto ideal e um visual ousado nas ruas.", 
            icon: "shox.webp", 
            preco: "R$ 900,00",
            cor: "#b1b3b5",
            link:"https://droper.app/d/6435/Nike_Shox_TL_Black_and_Max_Orange"
        },
        { 
            nome: "Nike Shox TL Sunrise", 
            legenda: "O Nike Shox TL leva o amortecimento mecânico para o próximo nível. Uma versão refeita do ícone de 2003, ele apresenta malha respirável na parte superior e tecnologia Nike Shox em todo o comprimento para absorção de impacto ideal e um visual ousado nas ruas.", 
            icon: "shoxsrs.png" , 
            preco: "R$ 2.500,00",
            cor: "#e07222",
            link: "https://droper.app/d/1112/Nike_Shox_TL_Sunrise"
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
        card.style.boxShadow = "7px 7px 11px#787878";
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

        botao.addEventListener("click", function () {
            window.location.href = categoria.link;
        });
        
        

        botao.addEventListener("mouseleave", function () {
            botao.style.backgroundColor = categoria.cor;
        });
       
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(legenda);
        card.appendChild(preco);
        card.appendChild(botao);
        cardContainer.appendChild(card);
    }

    categorias.forEach(criarCard);
});
