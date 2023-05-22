//Declaração de função
function saudacao() {
  console.log('Olá, mundo!')
}

//Chamada da função
saudacao()

//Parâmetros e argumentos
function saudar(nome) {
  console.log('Olá, ' + nome + '!')
}
saudar('Marcus') //Output: Olá, Marcus!

//Retorno de valor
function soma(a, b) {
  return a + b
}

let resultado = soma(10, 20)
console.log(resultado) //Output: 30

//Escopo de variáveis
let nome_exempo = 'Matheus' //Variável global
function saudacao_exemplo() {
  let mensagem = 'Olá, ' + nome_exempo + '!' //Variável local
  console.log(mensagem)
}

saudacao_exemplo() //Output: Olá, Matheus!

//Funções anônimas e funções de seta
//Função anonima
let saudacao_anonima = function() {
  console.log('Olá, mundo!')
}

//Função de seta
let soma_seta = (a, b) => {
  return a + b
}
