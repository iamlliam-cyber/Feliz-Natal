const musica = document.getElementById("musica");

/* TEXTO DIGITANDO */
const mensagem = "Oi meu amor... eu preparei isso só pra você ❤️";
let i = 0;

function digitar() {
    if (i < mensagem.length) {
        document.getElementById("texto").innerHTML += mensagem.charAt(i);
        i++;
        setTimeout(digitar, 80);
    }
}
digitar();

/* TROCA DE TELAS */
function tela(atual, proxima) {
    document.getElementById(atual).classList.add("hidden");
    document.getElementById(proxima).classList.remove("hidden");
}

function pergunta() {
    musica.play();
    tela("tela1", "tela2");
}

function sim() {
    tela("tela2", "telaZoacao");
}

function nao() {
    tela("tela2", "telaNao");
}

function volta() {
    tela("telaNao", "telaZoacao");
}

function final() {
    tela("telaZoacao", "telaFinal");
}

