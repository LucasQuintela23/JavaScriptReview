/*
for

O for é uma das estruturas mais usadas e permite repetir um bloco de código um número definido de vezes.

Sintaxe:

for (inicializacao; condicao; incremento) {
  // Código a ser executado
}

*/


// Exemplo
for (let i = 0; i < 5; i++) {
  console.log(`Valor de i: ${i}`);
}


/*
while
O loop while executa o bloco de código enquanto a condição for verdadeira.

while (condição) {
  // Código a ser executado
}

*/

// Exemplo

let i = 0;
while (i < 5) {
  console.log(`Valor de i: ${i}`);
  i++;
}


/* 
do...while
O loop do...while é semelhante ao while, mas garante que o código será executado pelo menos uma vez, 
pois a condição é verificada após a execução.

do {
  // Código a ser executado
} while (condição);

*/

//Exemplo

let y = 0;
do {
  console.log(`Valor de i: ${y}`);
  y++;
} while (i < 5);


/*
for...of
O loop for...of é usado para iterar sobre valores de objetos iteráveis, 
como arrays ou strings.

for (const valor of iterável) {
  // Código a ser executado
}

*/

// Exemplo:

const numeros = [10, 20, 30];
for (const numero of numeros) {
  console.log(numero);
}

//Exemplo com strings
const texto = "JavaScript";
for (const letra of texto) {
  console.log(letra);
}

/**
 * for...in
O loop for...in é usado para iterar sobre as propriedades de um objeto (as chaves).
for (const chave in objeto) {
  // Código a ser executado
}
 */


//Exemplo

const usuario = { nome: "João", idade: 25 };
for (const chave in usuario) {
  console.log(`${chave}: ${usuario[chave]}`);
}

/**
 * Boas Práticas
 * Use for quando souber o número de iterações previamente.
 * Prefira for...of para iterar sobre arrays e coleções.
 * Utilize for...in apenas para iterar sobre objetos.
 * Evite loops infinitos (while (true) sem uma condição de parada).
 */






























