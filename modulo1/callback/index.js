/* 1) 

apareceu os nomes com aplidos do lado

2) aparece somente os nomes

3) aparece nada


(1)
const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]
//a 
const nomeDoguinhos = pets.map ((ordemNome) => {
    console.log(ordemNome.nome)
})

//b

const racaDog = pets.filter ((pets, indice, array) => {
    return pets.raca === "Salsicha"
})

console.log (racaDog)

//c

const descontoDog = pets.map ((Poodle, indice) =>{
    return pets.raca === "Poodle"
})

console.log (`Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}`)

(2)*/

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 
 //a
 const nomeItens = produtos.map ((ordemNome) => {
    console.log(ordemNome.nome)
})

//b
/*const objeto = {
    nome: produtos.nome, 
    preco: (produtos.preco * 0.95).toFixed(2)
};
return objeto:
});
console.log(promocao)*/

//c
const bebidas = produtos.filter((prod) => {
    return prod.categoria === "Bebidas"
    })

    console.log (bebidas)

//d

const ype = produtos.filter((prod) => {
    return prod.nome.includes('Ypê')
    })
    

    console.log (ype)


//e

const produtosype = ype.map((ype) => {
    return `Compre ${ype.nome} por ${ype.preco}`
    })
    

    console.log (produtosype)