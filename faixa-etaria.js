console.log(" === FAIXA-ETARIA.JS ===");

function obterFaixaEtaria(idade) {
    var resp = "";

    if(isNaN(idade)) {
        resp = "PENDENTE";
    } else if (idade <= 12) {
        resp = "CRIANÇA";
    } else if (idade <= 17) {
        resp = "ADOLECENTE";
    } else if (idade <= 59) {
        resp = "ADULTO";
    } else {
        resp = "MELHOR IDADE";
    }

return resp;
    
}

function avaliar() {
    //entrada
    var idade = parseInt(document.getElementById("idade").value);

    //processamento

    var resp = obterFaixaEtaria(idade);

    // saida

    document.getElementById("result").value = resp;
}















