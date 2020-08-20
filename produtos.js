console.log(" ===PRODUTOS.JS ===");

function cadastroProduto() {
console.log("Cadastrando Produto...");
var produto = document.getElementById("produto");
//console.log(produto.value);

var preco = document.getElementById("preco").Value;
//console.log(preco);

var qtde = document.getElementById("qtde").Value;
//console.log(qtde);

var total = document.getElementById("total");


var total = preco * qtde;
console.log(total);

document.getElementById("total").Value = total;

}