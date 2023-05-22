//=======Manipulação de string=======//
//Concatenação
let nome = "Marcus"
let sobrenome = "Castilho"
let saudacao = nome + " " + sobrenome
console.log(saudacao) //Output: Marcus Castilho

// Usando o método concat()
let texto = "Olá, "
let mensagem = texto.concat(nome)
console.log(mensagem) //Output: Olá, Marcus

//Comprimento da string
let helloWorld = 'Olá, mundo!'
let comprimento = helloWorld.length
console.log(comprimento) //Output: 11

//Acesso a caracteres
let texto02 = "Olá"
let primeiraLetra = texto02[0]
console.log(primeiraLetra) //Output: H

//Métodos de string
let frase = "Eu gosto de programar!"
let maiusculo = frase.toLocaleUpperCase
console.log(maiusculo) //Output: EU GOSTO DE PROGRAMAR!

let palavras = frase.split(" ")
console.log(palavras) // Output: ["Eu", "gosto", "de", "programar!"]

let novaFrase = frase.replace("programar", "codificar")
console.log(novaFrase) //Output: Eu gosto de codificar!


//=======Manipulação de arrays=======//
//Criação de arrays
let numeros = [1, 2, 3]
let nomes = ["Marcus", "Matheus", "Jhonatan"]

//Acesso a elementos
let primeiroNumero = numeros[0]
let segundoNome = nomes[1]
console.log(primeiroNumero) //Output: 1
console.log(segundoNome) //Output: Matheus

//Comprimento do array
let comprimentoArrayNumero = numeros.length
let comprimentoArrayNome = nomes.length
console.log(comprimentoArrayNumero) //Output: 3
console.log(comprimentoArrayNome) //Output: 3

//Métodos de array
numeros.push(4) //Adiciona um elemento ao final do array
console.log(numeros) //Output: [1, 2, 3, 4]

let ultimoNumero = numeros.pop() //Remove e retorna o ultimo elemento do array
console.log(ultimoNumero) //Output: 4
console.log(numeros)  //Output: [1, 2, 3]

let primeiroNumero01 = numeros.shift() //Remove e retorna o primeiro elemento do array
console.log(primeiroNumero01) //Output: 1
console.log(numeros) //Output: [2, 3]