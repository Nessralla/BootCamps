export{};

// Objeto definido por inferência
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora',
}

pessoa.idade = 30;

// Objeto definido diretamente
const Andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
}

const Paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

const Vanessa: Pessoa = {
    nome:'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

interface Estudante extends Pessoa {
    materias: string[]
}

const Jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Atriz,
    materias: ['Matemática','Programação']
}

const Monica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    materias: ['Matemática','Programação']
}

function lista(lista: string[]) {
    for (const item of lista) { 
        console.log('- ',item)
    }
}

lista(Monica.materias);

