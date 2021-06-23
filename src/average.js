/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const assert = require('assert');

const average = (arr) => {
  let resultado = 0;
  let saida = 0;
  if (arr.length === 0) { return undefined; }
   for (let index = 0; index < arr.length; index += 1) {
      if (typeof arr[index] !== typeof saida) { 
        return undefined; 
      } 
      saida += arr[index]; 
    } 
  return Math.round(saida / arr.length);    
};
  console.log(average([1, 2, 3, 4, 5]));
  module.exports = average;