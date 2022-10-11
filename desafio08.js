/* Faça um programa que leia uma data qualquer e mostre se o ano dela é BISSEXTO.

Implemente seu código utilizando o playground/compilador online de sua preferencia. Ao finalizar seu código, 
cole o código aqui ou o link página do playground no campo de resposta abaixo. */

const prompt = require('prompt-sync')();

let ano = Number(prompt("Digite um ano qualquer: "));
let dezena = ano % 100;

if (dezena !== 0 && ano % 4 === 0) { 
    console.log("Ano bissexto.");
}

else if (dezena === 0 && ano % 400 === 0) { 
    console.log("Ano bissexto.")
}

else {
    console.log("Ano não-bissexto.");
}