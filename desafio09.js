/* 
Crie um programa que leia o ano de nascimento de sete pessoas. No final, mostre quantas pessoas ainda não 
atingiram a maioridade e quantas já são maiores. Considere até 17 anos, não atingiram a maioridade de 18 em 
diante já são maiores.

Implemente seu código utilizando o playground/compilador online de sua preferencia. 
Ao finalizar seu código, cole o código aqui ou o link página do playground no campo de resposta abaixo. */

const prompt = require('prompt-sync')();

let menor = 0, i;
let ano, ano_atual = new Date().getFullYear();

for(i = 1; i <= 7; i++) {
    ano = prompt(`Ano de nascimento da pessoa ${i}: `);
    if (ano_atual - ano < 18) { menor++ }
}

console.log(`${menor} pessoas ainda são menores de idade.`);