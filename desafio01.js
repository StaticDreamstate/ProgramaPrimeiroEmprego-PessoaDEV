/* 
Faça um programa que leia duas notas de um aluno, calcule e mostre a sua média.
Implemente seu código utilizando o playground/compilador online de sua preferencia. 
Ao finalizar seu código, cole o código aqui ou o link página do playground no campo de resposta abaixo. 
*/

const prompt = require('prompt-sync')();

let n1 = Number(prompt("Nota1: "));
let n2 = Number(prompt("Nota2: "));
console.log("Média: ",(n1+n2)/2);

