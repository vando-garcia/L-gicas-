console.log(" ===APP.JS=== ");

function init() {

var nome = prompt("Digite seu nome:");

document.write(`Bem vindo, ${converterParaMaiusculas(nome)} !`);
//document.write("Bem vindo ", converterParaMaiusculas(nome), "!");

}

init();