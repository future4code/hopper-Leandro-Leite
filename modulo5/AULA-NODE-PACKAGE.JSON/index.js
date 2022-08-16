import { pessoas } from "./pessoas.js";

const nomeBusca = process.argv[2]

// const resultado = pessoas.find((nome) => nome === nomeBusca)

const resultado = pessoas.filter ((nome) => nome === nomeBusca)

console.table(resultado)