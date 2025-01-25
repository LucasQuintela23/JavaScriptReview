/*

Declarando Variáveis

Usamos três palavras-chave para declarar variáveis:

var: Antiga, com escopo global ou de função (evite usar em códigos modernos).
let: Moderna, com escopo de bloco (recomendada para variáveis que podem mudar).
const: Moderna, com escopo de bloco, usada para valores que não mudam.


*/

let nome = "João"; // Variável que pode mudar
const idade1 = 25;  // Variável constante
var cidade = "São Paulo"; // Declaração antiga

/*

ipos de Dados em JavaScript
Os tipos de dados em JavaScript são classificados em 
primitivos e estruturados (objetos).

Tipos Primitivos
String
Number
BigInt(int)
Boolean
Undefined
Null
Symbol
*/

// String: Usado para representar textos.

let texto = "Olá, mundo!";
let frase = 'JavaScript é divertido!';

// Number: Usado para números, incluindo inteiros e decimais.

let idade = 30;     // Número inteiro
let preco = 19.99;  // Número decimal

// BigInt: Representa números inteiros muito grandes.

let grandeNumero = 123456789012345678901234567890n; // Note o 'n' no final

//Boolean : Representa valores de verdade (true ou false).

let estaChovendo = false;
let terminou = true;

// Undefined: Indica que uma variável foi declarada, mas não tem valor.

let valor;
console.log(valor); // undefined

// Null: Representa a ausência intencional de valor.

let vazio = null;

// Symbol: Usado para criar valores únicos.

let id = Symbol("id único");


/*
Tipos Estruturados (Objetos)
Objetos
Arrays
Funções
*/ 

// Objetos: Coleções de pares chave: valor.

let pessoa = {
    nome: "Maria",
    idade: 28
};

// Arrays: Listas ordenadas de valores.

let frutas = ["maçã", "banana", "laranja"];


// Funções: Blocos de código reutilizáveis.

function saudacao() {
    return "Olá!";
  }
  
/*
Verificando o Tipo de uma Variável

Use o operador ¨typeof¨ para verificar o tipo de um dado.

*/

let numero = 42;
console.log(typeof numero); // "number"

let texto2 = "Olá";
console.log(typeof texto2); // "string"


  



