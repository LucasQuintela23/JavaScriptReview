/*
As estruturas condicionais em JavaScript permitem executar diferentes blocos de código com base em condições.
Elas são fundamentais para o controle de fluxo de um programa.


if, else if e else
Essa estrutura permite verificar condições e executar diferentes blocos de código.


Sintaxe:
if (condicao) {
  // Código a ser executado se a condição for verdadeira
} else if (outraCondicao) {
  // Código a ser executado se outraCondicao for verdadeira
} else {
  // Código a ser executado se nenhuma condição for verdadeira
}

*/ 


// Exemplo
let hora = 10;

if (hora < 12) {
  console.log("Bom dia!");
} else if (hora < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}


//Verificar valor(==)
if(1 == "1"){
    console.log("Sim, 1, == ¨1¨");
}else{
    console.log("não");
}

//Verificar valor e tipo de dado(===)

if(1 === "1"){
    console.log("Sim, 1, === ¨1¨");
}else{
    console.log("não");
}


/*
Operador Ternário (? :)
O operador ternário é uma forma simplificada de escrever uma condição.

condicao ? valorSeVerdadeiro : valorSeFalso;
*/

//Exemplo 
let idade = 18;
let status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status); // Maior de idade

/*
switch
O switch é usado para comparar um valor com múltiplas opções possíveis (casos).

switch (expressao) {
  case valor1:
    // Código para valor1
    break;
  case valor2:
    // Código para valor2
    break;
  default:
    // Código para qualquer outro caso
}

*/
let dia = 3;

switch (dia) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  default:
    console.log("Dia inválido");
}


/*
Condições com Operadores Lógicos
&& (E): Todas as condições devem ser verdadeiras.
|| (OU): Pelo menos uma condição deve ser verdadeira.
! (NÃO): Inverte o valor lógico.
*/

// Exemplos
let idade2 = 20;
let possuiCarteira = true;

if (idade2 >= 18 && possuiCarteira) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir.");
}

