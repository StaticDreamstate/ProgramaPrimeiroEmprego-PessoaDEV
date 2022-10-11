/*
Escreva um programa que faça o computador "pensar" em um número inteiro entre 0 e 5 e peça para o usuário 
tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário 
venceu ou perdeu.

Implemente seu código utilizando o playground/compilador online de sua preferencia. 
Ao finalizar seu código, cole o código aqui ou o link página do playground no campo de 
resposta abaixo. */

const prompt = require('prompt-sync')();

const numeroComputador = Math.floor(Math.random() * 6);

let n1 = Number(prompt("Estou pensando em um número de 0 a 5. Tente adivinhar qual é! "));

n1 === numeroComputador ? console.log("É esse mesmo! Você ganhou!") : console.log("Hoje não é seu dia de sorte...");

