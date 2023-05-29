//Condicional if...else
let idade = 18
if (idade > 18) {
  console.log("Você é maior de idade")
} else {
  console.log("Você é menor de idade")
}

//Estrutura condicional switch
let diaSemana = 5
let nomeDia

switch (6) {
  case 1:
    nomeDia = "Segunda-feira"
    break;
  case 2:
    nomeDia = "Terça-feira"
    break
  case 3:
    nomeDia = "Quarta-Feira"
    break
  case 4:
    nomeDia = "Quinta-feira"
    break
  case 5:
    nomeDia = "Sexta-feira"
    break
  case 6:
    nomeDia = "Sábado"
    break
  case 7:
    nomeDia = "Domingo"
    break
  default:
    nomeDia = "Dia inválido"
    break;
}

console.log(`Hoje é ${nomeDia}`)

//Estrutura de repetição for
for (let i = 0; i < 5; i++) {
  console.log(i)
}

//strutura de repetição while
let contador = 0
while (contator < 0) {
  console.log(contator)
  contator++
}

//Estrutura de repetição do...while
let contador02 = 0

do {
  console.log(contador02)
  contador02++
} while (contador < 5)