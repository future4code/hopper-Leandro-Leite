/*
(1)
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
a) Ele pede um numero, se o numero ao ser dividido por 2, der zero ele mostra uma mensagem, se não, ele mostra outra
b) os numeros que ao dividir por 2, der zero
c) os numeros que ao dividir por 2, não dê zero

(2)
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
  break; // BREAK PARA O ITEM c.
    preco = 5.5
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


a) para mostrar o preço de 4 opções de frutas
b) 2,25
c) 5 reais, pois ele pulou para o comando de dois itens abaixo


const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) colocando um push para o usuario colcoar um numero
b) ele ira dizer que passou, se for -10, ele não dirá nada
c) o erro esta que ele não especificou o que é para acontecer caso o numero seja menor que 0


(1)
const respostaDoUsuario = prompt("Qual sua idade?")
const numero = Number(respostaDoUsuario)

if (numero > 17) {
  console.log("Você pode dirigir")
} else {
  console.log("Você não pode dirigir")
}

(2)
let respostaAluno = prompt("Qual sua turma?")


if (respostaAluno === "M") {
  console.log("Bom dia")

} 
else if (respostaAluno === "V") {
    console.log("Boa tarde")
}
else if (respostaAluno === "N")  
console.log("Boa noite")

(3)


let aluno = prompt("Qual sua turma?")


switch (aluno) {
    case "M": 
    console.log  ("Bom dia")
          break;
      
        case  "V":
        console.log ("Boa tarde")
          break;
      
          case "N":
            console.log ("Boa noite")
                            break;
}
 
(4)*/

const respostaDoUsuario1 = prompt("Quanto custa o ingresso? Fale somente o número")
const preço = Number(respostaDoUsuario1)

const respostaDoUsuario2 = prompt("Qual o gênero?")


if (respostaDoUsuario1 <= "fantasia" && preço <= 15) {
    console.log("Bom filme!");
  } else {
    console.log("Escolha outro filme :(");
  }

