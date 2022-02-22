// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {

  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
 
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = Number(prompt("Digite a altura"))
let largura = Number(prompt("Digite a largura"))

 const area = altura * largura
  console.log(area)


}


// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual =  Number(prompt("Digite em que ano estamos"))
  let anoNascimento = Number(prompt("Digite o ano que você nasceu"))
  const idade = anoAtual - anoNascimento
console.log(idade)
  

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
 const nome = prompt("Alicia")
  const idade = prompt("28")
  const email = prompt("alice@gmail.com")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Azul")
  const cor2 = prompt("Amarelo")
  const cor3 = prompt("Vermelho")

  const cores = [cor1, cor2, cor3]
  console.log(cores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  
return string.toUpperCase(string)

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
return array[0]


}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
return array [array.length -1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const auxiliar = array[0]

  array [0] =  array [array.length -1]
  array [array.length -1] = auxiliar 
  return array 

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
 if (string1.toLowerCase() === string2.toLowerCase())  {
  return true
 }
else {
  return false 
}
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}