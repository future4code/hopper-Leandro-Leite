/*let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

a) undefined
b)  null
C)  11
d)  3
e)  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f)  9*/

/*const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Resposta: letras e espaço de "Subi num ônibus em Marrocos" somam 27, será o número que irá aparecer no console*/

/*const nomeDoUsuario = prompt("Digite seu nome")
const emailDoUsuario = prompt("Digite seu e-mail")

console.log ("O e-mail "+emailDoUsuario+" foi cadastrado com sucesso. Seja bem-vinda(o), "+nomeDoUsuario+"!")*/

/*listaComidas = ["Lasanha", "Pizza", "Hamburguer", "Batata Frita", "Beterraba"]
//console.log(listaComidas)

let i = 1
const comidaFavorita = prompt("fala sua comida favorita")
listaComidas[i+1] = comidaFavorita

console.log(`Essas são as minhas comidas preferidas: ${listaComidas[0]} \n ${listaComidas[1]} \n ${listaComidas[2]} \n ${listaComidas[3]} \n ${listaComidas[4]}`)*/

listaDeTarefas = []

const tarefasUsuario1 = prompt("fala uma tarefa")
const tarefasUsuario2 = prompt("outra")
const tarefasUsuario3 = prompt("última")

listaDeTarefas.push(tarefasUsuario1, tarefasUsuario2, tarefasUsuario3)


let tarefaRealizada = listaDeTarefas.splice(prompt("Digite a tarefa índice concluída:") -1, 1)


console.log(listaDeTarefas)



