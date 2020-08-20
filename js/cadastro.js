console.log(" === CADASTRO.JS ===");

function cadastrar() {
    console.log("cadastrando...")
    var nomeCompleto = document.getElementById("nome");
    console.log(nomeCompleto.value);

    //console.log(nomeCompleto.type);
    //console.log(nomeCompleto.id);
    
    document.write(`Nome Completo: ${nomeCompleto.value}`);
}