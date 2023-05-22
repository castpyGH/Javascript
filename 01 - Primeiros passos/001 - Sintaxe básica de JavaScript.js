// Este é um comentário de linha única

/* Este é um
comentário de várias linhas */


//Variáveis
var idade = 18 // Declaração de variável usando var
let nome = "Marcus Castilho" // Declaração de variável usando let
const PI = 3.14 // Declaração de variável usando const (valor constante)

//Tipos de dados
let numero = 25 //Número inteiro
let nome_exemplo = "Amanda Brandão" //String
let isTrue = true //Booleano
let pessoa = {nome: "Marcus", idade: 18} //Objeto
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] //Array

//Estruturas de controle de fluxo
if (idade >= 18) {
  console.log('Você é maior de idade!')
} else {
  console.log('Você é menor de idade!')
}

//Funções
function saudacao(nome) {
  console.log('Olá, ' + nome + "!")
}

let mensagem = saudacao('Marcus')
console.log(mensagem)