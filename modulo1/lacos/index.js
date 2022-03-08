/*

1)
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

ele atribui 0 a variável e enquanto ela for menor que 5, irá somar +1, até chegar ao momento final que vale 10

2)
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

a) Será impreso no console todos os números maiores de 18.
b) Para saber o índice dos elementos, teria que usar for. For...of não fornece os índices.

3)
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

 a) Quatro linhas com 1, 2, 3 e 4 asteriscos respectivamente.

1. 
let numeroDePets = Number(prompt("Quantos animais de estimação você tem?"))
const nomeDosPets = []
A)
if (numeroDePets === 0) {
    console.log("Que pena! Você pode adotar um pet!")
B)
}else{
    while (numeroDePets>0){
        nomeDosPets.push(prompt("Diga o nome dos seus pets"));
        numeroDePets -= 1
    }
C)    
    console.log(nomeDosPets)


2. 
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

A)
for (var num of arrayOriginal){
    console.log(num)
}

B)
for (var num of arrayOriginal){
    console.log(num/10)
}

C)
const novoArray = []
for (var num of arrayOriginal){
    if((num%2)===0){
        novoArray.push(num)
    }
}
console.log(novoArray)

D)
const arrayDeStrings = []
for (var num of arrayOriginal){
    arrayDeStrings.push(`O elemento do índex ${arrayOriginal.indexOf(num)} é: ${num}`)
}
console.log(arrayDeStrings)

E)
let maiorNumero = 0
for (var num of arrayOriginal){
    if(num > maiorNumero){
        maiorNumero = num
    }
}
let menorNumero = maiorNumero
for(var i = 0; i < arrayOriginal.length-1; i++){
    if(menorNumero>arrayOriginal[i]){
        menorNumero = arrayOriginal[i]
    }
}
console.log(`O maior número é ${maiorNumero}, e o menor número é ${menorNumero}`)