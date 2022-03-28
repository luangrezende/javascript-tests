function load() {
    var btn = document.getElementById("botaoSomar");

    btn.addEventListener("click", function(){
        somarDoisValores();
    }, false);
};

function somarDoisValores(){
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);

    alert(`resultado: ${numero1 + numero2}`);
}

load();


// EXEMPLO RETORNO
var teste = somarValores(1, 2);

console.log("resultado: " + teste);

function somarValores(valor1, valor2){
    var resultado = valor1 + valor2;
    return resultado;
}

function escreverNaTela(texto){
    console.log(texto);
}

// EXEMPLO ARRAY
var array = ['Melancia', 'Banana', 'Ovo'];

// EXEMPLO LOOP
var array = [2, 33, 100];

for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

array.forEach(function(item){
    console.log(item);
});

//1 - criar função para ler array
//2 - somar valores do array
//3 - mostrar resultado na tela (console.log())