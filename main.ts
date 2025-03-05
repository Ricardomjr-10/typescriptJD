//3 tipos basicos-string,number e boolean

let nome: string = 'RIcardo'

nome = 'daniel'

console.log(nome)

//arrays e tuplas

let lista: string[]

lista = ['daniel', 'Ricardo']

//outro jeito

let list: Array<number>

list = [1, 2]

//tupla

let aluno: [string, number, boolean]

aluno = ['daniel', 24, true]

//obejto

let objeto: object

objeto = {nome: 'daniel', idade: 24}

//outro jeito

let objto: { nome: string; idade: number; legal: boolean}

objto = {nome: 'daniel', idade: 24, legal:true}

//funcoes

function soma(a: number,b: number): number {
    return a + b
}

const soma2 = (a: number, b: number): number => a + b // tipa depois do parenteses

// union e type alias

let id: number | string // union

type Id = number | string // alias

let id1: Id
let id2: Id
let id3: Id
let id4: Id

//type Usuario = { nome: string; idade: number }

let user: Usuario

// inerface

interface Usuario { // a mesma coisa do type acima
    nome: string
    idade: number
} // interface pra objetos e type para tipos basicos

let user1: Usuario