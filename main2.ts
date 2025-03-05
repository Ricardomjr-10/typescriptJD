//Generics
type Pessoas = {
    nome: string
    idade: number
}

type Alunos = Pessoas & {
    curso: string
}

interface Engenheiro extends Pessoas {
    crea: string
}

interface Medico extends Pessoas {
    crm: string
}