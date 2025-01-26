/*
Operador	Descrição	Exemplo	Resultado

+  |	Adição	=> 5 + 3 = 8
-  |    Subtração => 	5 - 3 =	2
*  |    Multiplicação =>	5 * 3 = 15
/  |	Divisão => 	6 / 3 = 2
%  |	Módulo(resto da divisão) =>	5 % 2 = 1
** |	Exponenciação =>	2 ** 3	8

*/


/*
Operadores de Incremento e Decremento
São usados para adicionar ou subtrair 1 de uma variável.

Operador	Descrição	Exemplo	Resultado
++	Incremento	let x = 5; x++;	6
--	Decremento	let y = 5; y--;	4

Pré-incremento/decremento (++x ou --x): Incrementa/decrementa antes de usar o valor.
Pós-incremento/decremento (x++ ou x--): Incrementa/decrementa após usar o valor.

*/

let a = 5;
console.log(a++); // 5 (usa o valor primeiro, depois incrementa)
console.log(a);   // 6

let b = 5;
console.log(++b); // 6 (incrementa primeiro, depois usa o valor)


/*
 Operadores de Atribuição Matemática

 Esses operadores combinam atribuição (=) com operações matemáticas.

Operador	Descrição	Exemplo	Equivalente a	Resultado
+=	| Adição e atribuição	=> x += 3	x = x + 3	x somado a 3
-=	| Subtração e atribuição =>	x -= 2	x = x - 2	x menos 2
*=	| Multiplicação e atribuição =>	x *= 2	x = x * 2	x vezes 2
/=	| Divisão e atribuição =>	x /= 2	x = x / 2	x dividido por 2
%=	| Módulo e atribuição =>	x %= 2	x = x % 2	Resto de x dividido por 2
**=	| Exponenciação e atribuição =>	x **= 2	x = x ** 2	x elevado ao quadrado

*/

/* 
Ordem de Precedência
JavaScript segue a ordem de precedência em operações matemáticas (como na matemática tradicional).

Parênteses ()
Exponenciação **
Multiplicação, divisão e módulo *, /, %
Adição e subtração +, -

*/

// Exemplo:

let resultado = 5 + 3 * 2;    // Resultado: 11 (multiplicação antes da adição)
let resultado2 = (5 + 3) * 2; // Resultado: 16 (parênteses primeiro)



/*
Operadores de Comparação Numérica
Embora não sejam "matemáticos", esses operadores são úteis ao trabalhar com números.
Operador	Descrição	Exemplo	Resultado
>	Maior que	=> 5 > 3	true
<	Menor que => 5 < 3	false
>=	Maior ou igual=> 5 >= 5	true
<=	Menor ou igual=>	5 <= 4	false
===	Igualdade estrita=>	5 === 5	true
!==	Diferença estrita=>	5 !== 3	true

*/



/*
Funções Matemáticas Úteis (Math)
JavaScript tem um objeto Math com funções matemáticas prontas.

Função	Descrição	Exemplo
Math.round(x)	Arredonda para o mais próximo=> Math.round(4.7) → 5
Math.floor(x)	Arredonda para baixo=>	Math.floor(4.7) → 4
Math.ceil(x)	Arredonda para cima=>	Math.ceil(4.3) → 5
Math.sqrt(x)	Raiz quadrada=>	Math.sqrt(16) → 4
Math.pow(x, y)	Potência (x elevado a y)=>	Math.pow(2, 3) → 8
Math.max(a, b, ...)	Retorna o maior valor=>	Math.max(1, 5, 3) → 5
Math.min(a, b, ...)	Retorna o menor valor=>	Math.min(1, 5, 3) → 1
Math.random()	Gera um número aleatório=> (0-1)	Math.random()

*/

let aleatorio = Math.random() * 10; // Número entre 0 e 10
console.log(Math.floor(aleatorio)); // Número inteiro entre 0 e 9
