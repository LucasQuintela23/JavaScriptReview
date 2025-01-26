/**
 * Os operadores lógicos em JavaScript são usados para combinar condições ou realizar comparações lógicas. Eles retornam valores booleanos
 * (true ou false) ou os próprios valores envolvidos, dependendo do caso.
 *   
 *  AND (&&), OR (||),NOT (!), 
 * 
 */


/* AND (&&)
 * O operador AND retorna true se todas as condições forem verdadeiras.
 * 
 * Sintaxe:
 *  condição1 && condição2
 */

//Exemplo:
const a = true;
const b = false;

console.log(a && b); // false
console.log(a && true); // true

// Uso prático:

const idade = 25;
const temHabilitacao = true;

if (idade >= 18 && temHabilitacao) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir.");
}

/*
 * OR (||) 
 * O operador OR retorna true se pelo menos uma das condições for verdadeira.
 * condição1 || condição2
 * Exemplo:
 */

const y = true;
const x = false;

console.log(y || x); // true
console.log(x || false); // false


// Uso prático:
const temCartaoCredito = false;
const temDinheiro = true;

if (temCartaoCredito || temDinheiro) {
  console.log("Pode fazer a compra!");
} else {
  console.log("Não pode fazer a compra.");
}


/*
 * NOT (!) 
 * O operador NOT inverte o valor lógico de uma condição. 
 * Se for true, ele retorna false, e vice-versa.
 * 
 * Sixtaxe:
 * !condição
 * 
 * Exemplo:
 */

const a1 = true;

console.log(!a1); // false
console.log(!false); // true

// Uso prático:
const estaChovendo = false;

if (!estaChovendo) {
  console.log("Pode sair sem guarda-chuva!");
} else {
  console.log("Pegue o guarda-chuva!");
}


/*
 * Operador Lógico de Curto-Circuito
 * Com &&: Se a primeira condição for false, o restante não será avaliado.
C* com ||: Se a primeira condição for true, o restante não será avaliado.
 * 
 * Exemplo com &&:
 */

const nome = "Maria";

console.log(nome && "Olá, Maria!"); // "Olá, Maria!"
console.log(false && "Isso não será avaliado."); // false



// Exemplo com ||:

const nome1 = "";

console.log(nome1 || "Nome padrão"); // "Nome padrão"
console.log(true || "Isso não será avaliado."); // true

