const carro = [
    {
        modelo: 'passeio',
        marca: 'Toyota',
        anoFabri: '2025',
        portas: '4',
        cor: 'cinza',
        velocidade: '520'
    },
    {
        modelo: 'cedan',
        marca: 'Forde',
        anoFabri: '2008',
        portas: '4',
        cor: 'preto',
        velocidade: '210'

    },
    {
        modelo: 'passageiro',
        marca: 'Kya',
        anoFabri: '2010',
        portas: '4',
        cor: 'vermelho',
        velocidade: '120'

    }
]



//for (let i = 0; i < carro.length; i++) {

//  console.log('carros do forr', carro[i]);

//}

carro.map(function (m) {

    // console.log('Marca do carro: ',m.marca);
    // console.log('modelo do carro :',m.modelo);
    // console.log('cor do carro :',m.cor);

})

function Pessoa(nome, sobreNome, data, sexo, idade) {
    this.nome = nome;
    this.sobreNome = sobreNome;
    this.dataNasc = new Date(data);
    this.sexo = sexo;
    this.idade = idade;
    this.getName = () => {
        return `${this.nome}  ${this.sobreNome}`
    },
        this.nascimento = function () {
            return this.dataNasc.getFullYear();
        }

};

//Pessoa.prototype.getData=function(){

//return this.dataNasc;
//}



const pessoaA = new Pessoa('Paulo', 'César Dias', "7-25-71", 'm', 53);
const pessoaB = new Pessoa('Maria', 'Dias Brito Nazaré', "8-10-1942", 'f', 83);


console.log(`${pessoaA.getName()} ${pessoaA.nascimento()}   ${pessoaA.idade} anos, sexo ${pessoaA.sexo}`);
console.log(`${pessoaB.getName()}  ${pessoaB.nascimento()}    ${pessoaB.idade} anos, sexo ${pessoaB.sexo}`);

const numero = [1, 2, 3, 4, 5];
const initi = 0;

const res = numero.reduce(function (acumulador, numero) {

    return acumulador + numero;
}, initi)

console.log();
console.log('RESULTADO FUNÇÃO REDUCCE', res);

class Carro {
    constructor(nome, marca, ano) {
        this.nome = nome;
        this.marca = marca;
        this.ano = ano
    }

    andarCarro() {

        return `Carro ${this.nome} ano de fabricaçao ${this.ano}`;
    }

}

class marca extends Carro {
    constructor(nome, marca, ano, fabrica) {
        super(nome, marca, ano);
        this.fabrica = fabrica;
    }
}

//const car = new Carro('Amaroq', 'Mercedes', '1195');
const mode = new marca('Palio', 'Fiat', 2024, 'Ribeirão Preto', 'cubatão')

//console.log(car.andarCarro());
console.log(`Nome:${mode.nome}  Marca:${mode.marca}  Ano de Fabricção:${mode.ano}  Fábrica: ${mode.fabrica}`);//