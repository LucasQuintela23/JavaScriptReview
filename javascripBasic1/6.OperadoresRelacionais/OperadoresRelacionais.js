/**
 * Os operadores relacionais em JavaScript são usados para comparar valores, retornando um resultado booleano (true ou false). 
 * Eles são amplamente utilizados em condições para controle
 * de fluxo, como if, while, ou validações.
 * 
 * Principais Operadores Relacionais:
 * Maior que (>), Menor que (<), Maior ou igual a (>=), Menor ou igual a (<=), Igual a (==),
 * Estritamente igual a (===), Diferente de (!=), Estritamente diferente de (!==), 

 * Boas Práticas
 * Use sempre os operadores estritos (=== e !==) para evitar resultados inesperados devido à conversão implícita.
 * Evite comparações diretas com NaN, utilize Number.isNaN() para verificá-lo:
 * 
 */

/*1. Maior que (>)
 *Retorna true se o valor da esquerda for maior que o valor da direita.
 * Exeplo:
 */

 console.log(10 > 5); // true
 console.log(5 > 10); // false



 /*
  *2. Menor que (<)
  *Retorna true se o valor da esquerda for menor que o valor da direita.
  *Exemplo:  
  */

  console.log(5 < 10); // true
  console.log(10 < 5); // false

 /*
 *3. Maior ou igual a (>=)
 *Retorna true se o valor da esquerda for maior ou igual ao valor da direita.
 *Exemplo:
 */

 console.log(10 >= 10); // true
 console.log(5 >= 10); // false

 /*
 *4. Menor ou igual a (<=)
 *Retorna true se o valor da esquerda for menor ou igual ao valor da direita.
 *Exemplo:
 */

 console.log(5 <= 10); // true
 console.log(10 <= 5); // false

 /*
  * 5. Igual a (==)
  *Compara se os valores são iguais, ignorando o tipo (conversão implícita).
  *Exemplo: 
  */

  console.log(5 == '5'); // true (converte para o mesmo tipo)
  console.log(5 == 5);   // true
  console.log(5 == 10);  // false

/*
 * 6. Estritamente igual a (===) 
 * Compara se os valores e tipos são iguais.
 * Exemplo:
 */

    console.log(5 === '5'); // false (tipos diferentes)
    console.log(5 === 5);   // true

/**
 * 7. Diferente de (!=)
 * Compara se os valores são diferentes, ignorando o tipo.
 * Exemplo:
 * 
 */

console.log(5 != '5'); // false (os valores são iguais após conversão)
console.log(5 != 10);  // true

/*
 * 8. Estritamente diferente de (!==)
 * Compara se os valores e/ou os tipos são diferentes.
 */

console.log(5 !== '5'); // true (tipos diferentes)
console.log(5 !== 5);   // false
