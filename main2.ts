//Generics
type Pessoas<T = Aluno> = {
    nome: string
    idade: number
    profissao: T
}

type Alunos ={
    matricula: string
}

interface Engenheiro {
    crea: string
}

interface Medico {
    crm: string
}

let medico: Pessoas<Medico>
let alunos: Pessoas
let engenheiro: Pessoas<Engenheiro>

//medico.profissao.crm

//com arrays

type Listas<T = string> = T[]

let listas: Listas
