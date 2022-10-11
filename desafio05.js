/*
O mesmo professor do exercício anterior quer sortear a ordem de apresentação de trabalhos dos alunos. 
Faça um programa que leia o nome dos seis alunos e mostre a ordem sorteada.

Implemente seu código utilizando o playground/compilador online de sua preferencia. 
Ao finalizar seu código, cole o código aqui ou o link página do playground no campo de resposta abaixo. */

let alunos = ["Pedro", "Henrique", "Juca", "Laércio", "Roberto", "Luiz"]
let i = alunos.length
console.log("A ordem de apresentação será...");

while(i !== 0) {
    let student = alunos[Math.floor(Math.random() * alunos.length)];
    console.log(`${student}\n`);
    alunos.splice(alunos.indexOf(student), 1);
    i--;
}
