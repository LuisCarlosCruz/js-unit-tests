const assert = require('assert');
const { copyFileSync } = require('fs');
const createMenu = require('../src/restaurant');

describe('9 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // assert.fail();
    // TESTE 1: Verifique se o retorno da função createMenu() é um objeto que possui, 
    // mas não é necessariamente é limitado à chave `fetchMenu`, a qual tem como valor uma função.
    // ```
    // const objetoRetornado = createMenu(); // Retorno: { fetchMenu: () => {}, ... }
    // ```
    assert.strictEqual(typeof createMenu(), 'object');
    // TESTE 2: Verifique que, dado que a função createMenu foi chamada com o objeto: `{ food: {}, drink: {} }`, 
    // verifique que 'objetoRetornado.fetchMenu()' retorna um objeto cujas chaves são somente `food` e `drink`.
    // ```
    const objetoRetornado = createMenu({ food: {}, drink: {} });
    const objKeys = Object.keys(objetoRetornado.fetchMenu())  // Retorno: { food: {}, drink: {}}
    // ```
    const expected = ['food', 'drink']
    assert.deepStrictEqual(expected, objKeys);
    // TESTE 3: Verifique que o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    const request = objetoRetornado.fetchMenu() // Retorno: objetoQualquer
    // ```
    assert.deepStrictEqual(request, { food: {}, drink: {} });
    // Agora faça o PASSO 1 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 4: Verifique que 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.consumption // Retorno: []
    // ```
    assert.deepStrictEqual(createMenu.consumption, []);
    // Agora faça o PASSO 2 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 5: Verifique que chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro, 
    // como `objetoRetornado.order('coxinha')`, tal string é adicionada ao array retornado em `objetoRetornado.consumption
    // ```
    // const restaurant = createMenu({ food: { coxinha: 3.9, sopa: 9.9 }, drink: { agua: 3.9, cerveja: 6.9 } });
    createMenu.order('coxinha');
    // objetoRetornado.order('coxinha');
    // objetoRetornado.consumption // Retorno: ["coxinha"]
    // ```
    assert.deepStrictEqual(createMenu.consumption, ['coxinha']);
    // Agora faça o PASSO 3 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 6: Verifique que as três orders seguintes, de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.
    // ```
    Object.assign(createMenu, { consumption: [] });
    createMenu.order("coxinha");
    createMenu.order("agua");
    createMenu.order("sopa");
    createMenu.order("sashimi");
    // objetoRetornado.consumption // Retorno: ["coxinha", "agua", "sopa", "sashimi"]
    // ```
    assert.deepStrictEqual(createMenu.consumption, ["coxinha", "agua", "sopa", "sashimi"]);
    // Agora faça o TESTE 7 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 7: Verifique que a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    // ```
    Object.assign(createMenu, { consumption: [] });
    createMenu.order('coxinha');
    createMenu.order('agua');
    createMenu.order('coxinha');
    // objetoRetornado.comsuption // Retorno: ['coxinha', 'agua', 'coxinha']
    // ```
    assert.deepStrictEqual(createMenu.consumption, ["coxinha", "agua", "coxinha"]);
    // Agora faça o TESTE 8 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 8: Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    // ```
    const restaurant = createMenu({ food: { coxinha: 3.9, sopa: 9.9 }, drink: { agua: 3.9, cerveja: 6.9 } });
    // objetoRetornado.order('coxinha');
    // objetoRetornado.order('agua');
    // objetoRetornado.order('coxinha');
    // objetoRetornado.pay() // Retorno: somaDosPreçosDosPedidos
    // ```
    assert.deepStrictEqual(createMenu.pay(restaurant), 12.87);
    // Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
  });
});