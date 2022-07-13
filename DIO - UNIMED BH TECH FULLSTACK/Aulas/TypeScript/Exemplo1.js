var pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
};
pessoa.idade = 30;
var Andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
};
var Paula = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
var Vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
var Jessica = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Atriz,
    materias: ['Matemática', 'Programação']
};
var Monica = {
    nome: 'Jessica',
    idade: 28,
    materias: ['Matemática', 'Programação']
};
function lista(lista) {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        console.log('- ', item);
    }
}
lista(Monica.materias);
