function load() {
    var btn = document.getElementById("botaoCompara");

    btn.addEventListener("click", function(){
        compararArraysWithFor();
        compararArraysWithForEach();
    }, false);
};

load();

var arrayPrincipal = [10, 20, 50];
var arraySecundario = [10, 30, 50, 50, 100, 150];

function compararArraysWithFor(){
    for (var i = 0; i < arraySecundario.length; i++) {
        for (var j = 0; j < arrayPrincipal.length; j++) {
            var compara = arraySecundario[i] == arrayPrincipal[j];
            if  (compara){
                console.log("[For]Valoe existente no array principal: " + arraySecundario[i]);
            }
        }
    }
}

function compararArraysWithForEach(){
    arraySecundario.forEach(element => {
        var compara = arrayPrincipal.find(x => x === element);

        if (compara !== undefined){
            console.log("[ForEach]Valoe existente no array principal: " + compara);
        }
    });
}