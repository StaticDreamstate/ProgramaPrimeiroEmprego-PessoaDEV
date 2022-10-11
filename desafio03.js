/* 
Faça um programa que lê lista de valores numéricos e retorna a maior, a menor, e o resultado da divisão destas 
duas variáveis retornadas, e informa se existe alguma outra variável na lista, que tem o mesmo valor do resultado 
da divisão. Considere a seguinte lista para seu exercício: 3,19,10,22,23,9,7,32,2,16,21,13

Implemente seu código utilizando o playground/compilador online de sua preferencia. 
Ao finalizar seu código, cole o código aqui ou o link página do playground no campo de resposta abaixo. */

const myArr = [3,19,10,22,23,9,7,32,2,16,21,13].sort(function(a, b) {
    return a - b});

const first = myArr[0];
const last = Number(myArr.slice(-1));
console.log("Menor valor:", first);
console.log("Maior valor:", last);
console.log("Divisão entre o maior e o menor valor:", last/first);

if(myArr.includes(last/first)) {
    console.log("O quociente coincide com outro valor na lista.");
}