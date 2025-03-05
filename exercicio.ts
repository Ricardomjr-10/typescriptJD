class Carro {
    marca: string 
    nome: string 
    constructor(marca: string, nome: string) {
      this.marca = marca
      this.nome = nome
    }
    ligado() {
        console.log(`carro ${this.nome} ligado`)
    }
}

class Interior extends Carro {
    cor:string
    constructor (marca:string, nome:string, cor:string) {
        super(marca,nome)
        this.cor = cor
        
    }

    desligado() {
        console.log(`o carro ${this.nome} esta desligado`)
    }
}

let carro = new Carro ('chevrolet', 'onix')
carro.ligado()

let carroInterior = new Interior ('pegeout', '2008', 'preta')
carroInterior.desligado()
console.log(carro)
console.log(carroInterior)