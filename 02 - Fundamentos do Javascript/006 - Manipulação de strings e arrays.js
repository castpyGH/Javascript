//Concatenação
let str1 = "Olá"
let str2 = "mundo"
let mensagem = str1 + " " + str2 // Concatenação usando o operador '+'
let mensagem2 = str1.concat('', str2) //Concatenação usando a função concat()
let mensagem3 = `${str1}, ${str2}!` //Concatenação usando `${}`

//Tamanho da String
let str3 = 'Hello'
let Tamanho = str3.length
console.log(Tamanho) //Output: 5

//Acesso a caracteres
let str4 = 'Hello'
let primeiroCaracter = str4[0] //Indice 0 = Letra 'H'
let terceiroCaracter = str4[2] //Indice 2 = Letra 'l'

//Métodos de Manipulação [toUpperCase(), toLowerCase(), split(), trim(), replace()]
let str5 = ' Hello, World! '
let maiuscula = str5.toUpperCase() // ' HELLO, WORLD! '
let minuscula = str5.toLowerCase() // ' hello, world! '
let partes = str5.split(',') //['Hello', 'World!']
let semEspacos = str5.trim() //"Hello, World!"
let substituir = str5.replace("Hello", "Hi") //"Hi, World!"

//[Manipulação de Arrays]
//Criação de array
let array1 = [1, 2, 3, 4, 5];
let array2 = ["maçã", "banana", "laranja"];
let array3 = [true, false, true];

//Acesso a elementos
let frutas = ["maçã", "banana", "laranja"];
let primeiraFruta = frutas[0]; // "maçã"
let segundaFruta = frutas[1]; // "banana"

//Manipulação de elementos [push(), pop(), shift(), unshift(), splice()]
frutas.push("manga"); // Adiciona um elemento no final do array
frutas.pop(); // Remove o último elemento do array
frutas.shift(); // Remove o primeiro elemento do array
frutas.unshift("abacaxi"); // Adiciona um elemento no início do array
frutas.splice(1, 1, "morango"); // Remove um elemento e adiciona outro no índice especificado

//Iteração em Arrays
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
}

frutas.forEach(function (fruta) {
  console.log(fruta)
})

