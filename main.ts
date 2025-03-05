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

// extendeno interfaces e tipos

interface Pessoa {
    nome: string
    idade: number
}

interface Aluno extends Pessoa {
    curso: string
    ira: number
}

let aluno1: Aluno

//aluno1.curso

// extendendo type

type Pessoa1 = {
    nome: string
    idade: number
}

type Aluno1  = Pessoa1 & {
    curso: string
    ira: number
}

let aluno2: Aluno

// propriedades opcionais

type Person = {
    nome: string
    idade: number
    carro?: string // a interrogacao antes dos : indica que é opcional
}

type Alun = Person & {
    curso: string
    ira: number
}

let aluno3: Alun
aluno3 = {
    nome: "Daniel",
    idade: 24,
    curso: "Engenharia de Redes",
    ira: 4.1
}



