console.log(" ===Cadastrando...=== ");

function criarFicha() {
    var nome
    var peso
    var altura
    var dataNascimento = campoDataNascimento







    var temProblemasCardiacos = campoProblemasCardiacos.checked

    var fraseAcompanhamentoMedico

    if( temProblemasCardiacos) {
        fraseAcompanhamentoMedico = "Necessita de acompanhamento médico"
    } if(!temProblemasCardiacos) {
        fraseAcompanhamentoMedico = "Não necessita de acompanhamento médico"
    }
   
    }

  document.write(`
  <hr>
  Nome: ${(nome)}
  <br>
  Peso: ${formataFloatBasil(peso)} kg
  <br>
  Altura: ${formataFloatBasil(altura)} m
  <br>
  Data de Nascimento: ${dataNascimento}
  <br>
  Idade: ${idade} anos
  <br>
  ${fraseAcompanhamentoMedico}
  
  
  
  `)