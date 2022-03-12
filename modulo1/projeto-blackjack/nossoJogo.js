/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo de Blackjack!")

if (confirm("Quer iniciar uma nova rodada?")) {
   const usuario1 = comprarCarta()
   const usuario2 = comprarCarta()
   const computador1 = comprarCarta()
   const computador2 = comprarCarta()

   const resultadoUsuario = usuario1.valor + usuario2.valor
   const resultadoComputador = computador1.valor + computador2.valor

   console.log(`Usuário - cartas: ${usuario1.texto} ${usuario2.texto} - pontuação: ${resultadoUsuario}`)
   console.log(`Computador - cartas: ${computador1.texto} ${computador2.texto} - pontuação: ${resultadoComputador}`)

   if (resultadoComputador === resultadoUsuario) {
      console.log("Empate!")

   } else if (resultadoComputador < resultadoUsuario) {
      console.log("O usuário ganhou!")

   } else if (resultadoComputador > resultadoUsuario) {
   }
      console.log("O computador ganhou!")
   } else {
      console.log ('O jogo acabou')
   }


