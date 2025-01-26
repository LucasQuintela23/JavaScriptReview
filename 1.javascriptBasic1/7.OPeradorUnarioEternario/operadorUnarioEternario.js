/**
 * Operador Unário
 * Um operador unário é aquele que trabalha com apenas um operando. 
 * Alguns dos operadores mais comuns são:
 * Operador de Negação Numérica (-), Operador de Incremento (++), Operador de Decremento (--)
 * Operador typeof, Operador ! (NOT), Operador void
 * 
 */





/*
 *Operador Ternário 
 * O operador ternário (? :) é uma forma compacta de fazer uma condição if-else. Ele funciona como:
 * Sintaxe:
 * 
 * condição ? valor_se_verdadeiro : valor_se_falso;
 */

 // Exemplo pratico:

 //Checar se um número é par ou ímpar:
 let idade = 18;
 let podeDirigir = idade >= 18 ? "Sim, pode dirigir" : "Não pode dirigir";
 console.log(podeDirigir); // "Sim, pode dirigir"

// Definir valor padrão:

let nome = "";
let saudacao = nome ? `Olá, ${nome}` : "Olá, visitante";
console.log(saudacao); // "Olá, visitante"

// Encadeando ternários:

let nota = 85;
let conceito = nota >= 90 ? "A" : nota >= 70 ? "B" : "C";
console.log(conceito); // "B"


/**
 * Diferenças entre if-else e operador ternário
 * Ternário: Mais compacto, ideal para expressões simples.
 * If-else: Melhor para lógicas mais complexas ou para várias instruções no mesmo bloco.
 */

let aprovado = true;

// Ternário
let mensagem = aprovado ? "Aprovado" : "Reprovado";
console.log(mensagem); // "Aprovado"

// If-else
if (aprovado) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}
