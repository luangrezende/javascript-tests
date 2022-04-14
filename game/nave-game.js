// DESCRIÇÂO:
// Você deverá criar um codigo que receberá 3 valores: quantidadeCasas, posicaoAlien e posicaoNave.
// O codigo consiste em calcular a quantidade de casas a NAVE terá que andar até atingir o ALIEN
// Por exemplo: se voce colocou que tem 10 casas, que o ALIEN esta na casa 8 e a NAVE na casa 5
// o resultado apresentado no console deverá ser 3

function load() {
    var btn = document.getElementById("botaoCalcular");

    btn.addEventListener("click", function(){
        var quantidadeCasas = parseInt(document.getElementById("quantidadeCasas").value);
        var posicaoAlien = parseInt(document.getElementById("posicaoAlien").value);
        var posicaoNave = parseInt(document.getElementById("posicaoNave").value);

        if(!validarCampos(quantidadeCasas, posicaoAlien, posicaoNave)){
            return;
        }

        var result = calcularQuantidadeJogadas(quantidadeCasas, posicaoAlien, posicaoNave);
        alert(`O jogador vai precisar andar ${result} casas antes de atirar!`);
    }, false);
};

function calcularQuantidadeJogadas(quantidadeCasas, posicaoAlien, posicaoNave) {
    if(posicaoAlien > posicaoNave){
        return posicaoAlien - posicaoNave;
    }
    else if(posicaoAlien < posicaoNave){
        var result = quantidadeCasas - posicaoNave;
        return posicaoAlien + result;
    }
    else{
        return 0;
    }
};

function validarCampos(quantidadeCasas, posicaoAlien, posicaoNave) {
    if(isNaN(quantidadeCasas)
        || isNaN(posicaoAlien)
        || isNaN(posicaoNave)){
            alert(`Preencha todos os campos.`);
            return false;
    }
    if(quantidadeCasas < posicaoAlien 
        || quantidadeCasas < posicaoNave){
            alert(`A quantidade de casas deve ser superior a posicaoAlien e posicaoNave.`);
            return false;
    }
    return true;
};

//start script
load();