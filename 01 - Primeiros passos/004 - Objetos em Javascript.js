//Criação de objetos
let pessoa = {
  nome: "Marcus Castilho",
  idade: 18,
  profissao: "Programador"
}

//Acesso às propriedades
console.log(pessoa.nome) //Output: Marcus Castilho
console.log(pessoa["idade"]) //Output: 18

//Adição ou atualização de propriedades
pessoa.funcao = "Desenvolvedor Full Stack Junior" //Adiciona uma nova propriedade
pessoa.nome = "Marcus" //Atualiza o valor da propriedade nome
console.log(pessoa) //Output: [nome: "Marcus", idade: 18, profissao: "Programador", funcao: "Desenvolvedor Full Stack Junior"]

//Remoção de propriedades
delete pessoa.idade
console.log(pessoa) //Output:[nome: "Marcus", profissao: "Programador", funcao: "Desenvolvedor Full Stack Junior"]

//Métodos de objeto
let pessoa02 = {
  nome: "João",
  idade: 22,
  saudacao: function(nome) {
    console.log('Olá, ' + nome + '! Eu me chamo ' + pessoa02.nome + ' e tenho ' + pessoa02.idade + ' anos.')
  }
}

console.log(pessoa02) //Output: { nome: 'João', idade: 22, saudacao: [Function: saudacao] }
console.log(pessoa02.saudacao('Marcus')) //Output: Olá, Marcus! Eu me chamo João e tenho 22 anos.
