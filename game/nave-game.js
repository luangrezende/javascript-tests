function load() {
    var btn = document.getElementById("botaoCalcular");

    btn.addEventListener("click", function(){
        var quantidadeCasas = parseInt(document.getElementById("quantidadeCasas").value);
        var posicaoNave = parseInt(document.getElementById("posicaoNave").value);
        var posicaoPiloto = parseInt(document.getElementById("posicaoPiloto").value);

        if(!validarCampos(quantidadeCasas, posicaoNave, posicaoPiloto)){
            return;
        }

        var result = calcularQuantidadeJogadas(quantidadeCasas, posicaoNave, posicaoPiloto);
        alert(`O jogador vai precisar andar ${result} casas antes de atirar!`);
    }, false);
};

function calcularQuantidadeJogadas(quantidadeCasas, posicaoNave, posicaoPiloto) {
    if(posicaoNave > posicaoPiloto){
        return posicaoNave - posicaoPiloto;
    }
    else if(posicaoNave < posicaoPiloto){
        var result = quantidadeCasas - posicaoPiloto;
        return posicaoNave + result;
    }
    else{
        return 0;
    }
};

function validarCampos(quantidadeCasas, posicaoNave, posicaoPiloto) {
    if(isNaN(quantidadeCasas)
        || isNaN(posicaoNave)
        || isNaN(posicaoPiloto)){
            alert(`Preencha todos os campos.`);
            return false;
    }
    if(quantidadeCasas < posicaoNave 
        || quantidadeCasas < posicaoPiloto){
            alert(`A quantidade de casas deve ser superior a posicaoNave e posicaoPiloto.`);
            return false;
    }
    return true;
};

//start script
load();