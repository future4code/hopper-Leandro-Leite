


/*1)
10
10 5



2)
10 10 10



3)
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

sugiro o código ser assim: 
let horasTrabalhada = prompt("Quantas horas você trabalha por dia?")
let salarioMes = prompt("Quanto você recebe por mês?")
let diasUteis = prompt ("Quantos dias você trabalha por mês?")
alert(`Você recebe ${mês/[horas*dias uteis]} por hora*)*/


let nomeUsuario
let idadeUsuario 

console.log(typeof nomeUsuario)
// foi impresso pois não atribui um valor nem para nome nem para idade//

nomeUsuario = prompt("Qual seu nome?")
idadeUsuario = prompt("Qual sua idade?")

console.log(typeof nomeUsuario, typeof idadeUsuario)
// que tanto o nome quanto a idade são string //

console.log("Olá",nomeUsuario,", você tem",idadeUsuario, "anos")

let roupaCor = prompt("Sua roupa é azul?")
let sonoUsuario = prompt("Você está com sono?")
let gostoLeitura = prompt ("Você gosta de ler?")

console.log("Sua roupa é azul?",roupaCor) 
console.log("você está com sono?",sonoUsuario,)
console.log("Você gosta de ler?", gostoLeitura,)

let a = 10
let b = 25
let c 


c = a
a = b
b = c


console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b) 