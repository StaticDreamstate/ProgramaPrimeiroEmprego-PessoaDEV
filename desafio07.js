/*
Desenvolva um programa que pergunte a distância de uma viagem em km. Calcule o preço da passagem, cobrando 
R$ 0,50 por km para viagens de até 200 km e R$ 0,45 para viagens mais longas.

Implemente seu código utilizando o playground/compilador online de sua preferencia. 
Ao finalizar seu código, cole o código aqui ou o link página do playground no campo de resposta abaixo. */

const prompt = require('prompt-sync')();

let totalKm = Number(prompt("Quantos km pretende viajar? "));
let preco = 0;

if (totalKm <= 200) { preco = 0.50; }
else { preco = 0.45; }

console.log("O preço da passagem é", totalKm * preco);