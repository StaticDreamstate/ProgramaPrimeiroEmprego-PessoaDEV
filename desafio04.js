/*
Um professor quer sortear um dos seus seis alunos para apagar o quadro. 
Faça um programa que ajude ele, lendo o nome deles e escrevendo o nome do escolhido.

Implemente seu código utilizando o playground/compilador online de sua preferencia. 
Ao finalizar seu código, cole o código aqui ou o link página do playground no campo de resposta abaixo. */

const alunos = ["Pedro", "Henrique", "Juca", "Laércio", "Roberto", "Luiz"]

for (i = 0; i < alunos.length; i++) {
    console.log(`${alunos[i]}...\n`);
}

console.log(`${alunos[Math.floor(Math.random() * alunos.length)]}! Venha apagar o quadro!`);