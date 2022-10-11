/*
Faça um programa que leia quanto dinheiro uma pessoa tem na carteira e mostre quantos dólares ela pode comprar. 
Considere U$ 1,00 = R$ 5,13. Implemente seu código utilizando o playground/compilador online de sua preferencia. 
Ao finalizar seu código, cole o código aqui ou o link página do playground no campo de resposta abaixo.*/

const prompt = require('prompt-sync')();

let totalDinheiro = Number(prompt("Quantidade de dinheiro na carteira: "));
console.log("Você pode comprar",(totalDinheiro * 5.13).toFixed(2), "dólares");
