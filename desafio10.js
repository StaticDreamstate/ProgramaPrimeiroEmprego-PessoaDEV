/*
Faça um programa que recebe os seguintes dados de pessoas:
Nome, Idade, Nacionalidade

- Inserir 15 pessoas na sua lista.
- O atributo Nome deverá ser único, ou seja, a lista não poderá ter dois registros com o mesmo nome, mesmo que 
para idades ou nacionalidades diferentes.
- retornar a lista de nacionalidade com o respectivo somatório de pessoas; e
- retornar a lista das pessoas agrupadas na faixa etária em cada uma se enquadra (bebe, criança, ..., idoso).

Implemente seu código utilizando o playground/compilador online de sua preferencia. 
Ao finalizar seu código, cole o código aqui ou o link página do playground no campo de resposta abaixo. */

const prompt = require('prompt-sync')();
const total = 15;

function popularLista(myArr) {

    let name, age, birthplace;
    name = prompt("Nome da pessoa: ");

    if (!myArr.includes(name)) {
        age = prompt("Idade da pessoa: ");
        birthplace = prompt("Nacionalidade da pessoa: ");

        let nObj = {
            "nome": name,
            "idade": age,
            "nacionalidade": birthplace
        }

        myArr.push(nObj);
    }

    return 0;
}

function main() {

    let i;
    let myArr = [];

    while (1) {
        for (i = 0; i < total; i++) { popularLista(myArr) }

        if (myArr.length != total) {
            for (i = 0; i < (15 - myArr.length); i++) { popularLista(myArr) }
        }

        else { break; }

    }

    const count = {};
    const nacionalidades = myArr.map(a => a.nacionalidade);

    for (i = 0; i < nacionalidades.length; i++) {
        const element = nacionalidades[i];

        if (count[element]) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }
    }

    console.log("Nacionalidades/Total: ");
    console.log(count);

    let baby = [];
    let child = [];
    let teen = [];
    let adult = [];
    let elder = [];

    for (i = 0; i < myArr.length; i++) {

        nObj = {
            "nome": String(myArr[i].nome),
            "idade": String(myArr[i].idade)
        }

        while (1) {
            if (nObj.idade <= 2) { baby.push(nObj); break; }
            if (nObj.idade >= 2 && nObj.idade < 14) { child.push(nObj); break; }
            if (nObj.idade >= 14 && nObj.idade < 20) { teen.push(nObj); break; }
            if (nObj.idade >= 20 && nObj.idade < 55) { adult.push(nObj); break; }
            if (nObj.idade >= 55) { elder.push(nObj); break; }
            
        }

    }

    console.log("Bebês:");
    console.log(baby);
    console.log("Crianças:");
    console.log(child);
    console.log("Jovens:");
    console.log(teen);
    console.log("Adultos:");
    console.log(adult);
    console.log("Idosos:");
    console.log(elder);
}

main();
