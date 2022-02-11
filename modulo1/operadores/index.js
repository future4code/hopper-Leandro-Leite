/*
1)

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
// vai aparecer a - false // 

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
// vai aparecer b - false //

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
// vai aparecer c - true //

console.log("d. ", typeof resultado)

2) será imprsso só o numero lado a lado

3)
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!")) 

const resultado = primeiroNumero + segundoNumero 

console.log(resultado)*/



// CÓDIGO //



/*
1)
let idadeUsuario = Number(prompt("Qual sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade do seu/sua melhor amigx?")) 

const resultado = idadeUsuario > idadeAmigo

console.log ( "Sua idade é maior do que a do seu melhor amigo?" , idadeUsuario > idadeAmigo)


2)
a) let numeroUsuario = Number(prompt("insira um numero par"))
 
b) const resultado = numeroUsuario % 2
console.log(resultado)

c) todos dão 0

d) todos dão 1*/

//3)

//let idadeUsuario = Number(prompt("Qual sua idade? Em anos"))

//a)
 /*const resultado = idadeUsuario * 12

console.log (resultado)*/

//b) 
/*const resultado = idadeUsuario * (365*24)

console.log (resultado)*/

let numeroUm = Number(prompt("escolha um numero"))
let numeroDois = Number(prompt("escolha outro numero")) 


console.log ( "O primeiro numero é maior que segundo?" , numeroUm > numeroDois)
console.log ("O primeiro numero é igual ao segundo?", numeroUm === numeroDois)
console.log ("O primeiro numero é divisível pelo segundo?", numeroUm % numeroDois === 0)
console.log ("O segundo numero é divisível pelo primeiro?", numeroDois % numeroUm === 0 )