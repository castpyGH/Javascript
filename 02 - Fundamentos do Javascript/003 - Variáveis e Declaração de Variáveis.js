//Declaração de variável
let idade
var nome
const PI = 3.14

//Atribuição
idade = 18
let profissao = "Programador"

//Reatribuição de valor
let contador = 0
contador = 1

//Escopo de variáveis
function exemplo() {
  let x = 10; // Acessível apenas dentro da função
  var y = 20; // Acessível em todo o escopo da função
}

console.log(x); // Isso resultará em um erro
console.log(y); // Isso resultará em um erro