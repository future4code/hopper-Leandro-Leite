/*1)Matheus Nachtergaele
Virginia Cavendish
{canal: 'Globo', horario: '14h'}*/

/*2)
a)nome: 'Juca', idade: 3, raca: 'SRD'
nome: 'Juba', idade: 3, raca: 'SRD'
nome: 'Jubo', idade: 3, raca: 'SRD'
b) vai copiar tudo que estava dentro da pasta*/

/*function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
 a) false
undefined
b) undefined, pois não definimos o que é "altura"*/

/*
1)
 Exemplo de entrada
const pessoa = {
    nome: "Leandro", 
    apelidos: ["Lê", "Lele"]
 }
 
 // Exemplo de saída
 //console.log (`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}`)

const novosApelidos = {
    ...pessoa,
   apelidos: ["b1", "b2", "b3"]
 }
 console.log (`Eu sou ${novosApelidos.nome}, mas pode me chamar de: ${novosApelidos.apelidos}`)
*/

//2)
  const pessoa1 = {
    nome: "Bruno", 
    idade: 27,
    profissao: "Instrutor" 
  }

console.log (`${pessoa1.nome}, ${pessoa1.nome.length}, ${pessoa1.idade}, ${pessoa1.profissao}, ${pessoa1.profissao.length}`)

const pessoa2 = {
    nome: "Felipe", 
    idade: 33,
    profissao: "Publicitário" 
  }


  console.log (`${pessoa2.nome}, ${pessoa2.nome.length}, ${pessoa2.idade}, ${pessoa2.profissao}, ${pessoa2.profissao.length}`)

/*
3)
 const carrinho = []
 const fruta1 = { nome: "banana", disponibilidade: true }
 const fruta2 = { nome: "pêra", disponibilidade: true }
 const fruta3 = { nome: "mamão", disponibilidade: true }
 const newArray = [fruta1, fruta2, fruta3]

 function sacolao(param){
    carrinho.push(param)
 }


 sacolao (newArray)
 console.log (carrinho)*/