/*function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

1) 10
    50*

    2) vai dar erro, pois sem o console não executa na tela

    let textoDoUsuario = prompt("Insira um texto");

    const outraFuncao = function(texto) {
        return texto.toLowerCase().includes("cenoura")
    }
    
    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)

    2)
    a. serve para o usuário escrever algo, ai caso no que ele escrever tenha a palavra "cenoura", é verdadeiro, caso não, é falso
    b. as três faram aparecer "true"*/
    
  /*1)

  a.
    let NOME = prompt("Digite seu nome")
    let IDADE = prompt("Digite sua idade")
    let ENDEREÇO = prompt("Digite seu endereço")
    let PROFISSÃO = prompt("Digite sua profissão")

    console.log (`Eu sou ${NOME}, tenho ${IDADE} anos, moro em ${ENDEREÇO} e sou ${PROFISSÃO}`)*/

    
    /*
    b.
    let funcaoRecebeInf = function (nome, idade, cidade, profissao) {
        return (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
    }
    
   console.log (funcaoRecebeInf("Leandro", 32, "SP", "Marketing"))
   
   2) 
   
   a.
 

   function calculaSoma (numero1, numero2) {
       const soma = numero1 + numero2
       console.log(soma)
   }
    calculaSoma (2,3) 
    
    b.

    function calculaSoma (numero1, numero2) {
        const soma = numero1 >= numero2
        console.log(soma)
    }
     calculaSoma (2,3) 
     
     c.

     function calculaPar (numero) {
        const testePar = (numero%2) === 0
        console.log(testePar)
    }
     calculaPar (2) 

     d. 
     function fraseAlteracao (frase) {

        const fraseMaiuscula = frase.toUpperCase()
        console.log(frase.length)
        console.log(fraseMaiuscula)
          }
     fraseAlteracao ("sapo")

     3) */


     
     function numeros (n1, n2) {
        const numerosInseridos = (`${n1} e ${n2}`)
        const soma = n1 + n2
        const diferença = n1 - n2
        const multiplicacao = n1 * n2
        const divisao = n1 / n2

console.log(`Números inseridos: ${numerosInseridos }
    Soma: ${soma }
    Diferença: ${diferença }
    Multiplicação: ${multiplicacao}
    Divisão: ${divisao }`)

}
let numero1 = Number(prompt("Digite um número"))
let numero2 = Number(prompt("Digite outro número"))

numeros(numero1, numero2)


     