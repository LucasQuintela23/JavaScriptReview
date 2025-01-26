/**
 * Tipos de Escopo em JavaScript
    Escopo Global
    Escopo Local (ou de Função)
    Escopo de Bloco 
 *
 */


/**
 * Uma variável tem escopo global quando é declarada fora de qualquer função ou bloco. 
 * Ela pode ser acessada de qualquer lugar no código.
 *Exemplo: 
 */

let globalVar = "Eu sou global";

function exibirGlobal() {
  console.log(globalVar); // Acessa a variável global
}

exibirGlobal(); // "Eu sou global"
console.log(globalVar); // "Eu sou global"


/**
 * Escopo Local (ou de Função)
 * Variáveis declaradas dentro de uma função têm escopo local e 
 * só podem ser acessadas dentro dessa função.
 * Exemplo:
 */

function minhaFuncao() {
    let localVar = "Eu sou local";
    console.log(localVar); // "Eu sou local"
  }
  
  minhaFuncao();
  
  // console.log(localVar); // Erro! Não pode acessar fora da função.
  

/**Escopo de Bloco
 * Introduzido no ES6, variáveis declaradas com let e const têm escopo de bloco. 
 * Isso significa que só são acessíveis dentro do bloco {} em que foram declaradas.
 * 
 * Exemplo:
 */

{
    let blocoVar = "Eu existo apenas aqui";
    console.log(blocoVar); // "Eu existo apenas aqui"
  }
  
  // console.log(blocoVar); // Erro! Fora do escopo do bloco.
  

  /**
   * Diferença entre var, let e const no escopo
   * var: Escopo global ou de função (não respeita escopo de bloco).
   * let: Respeita escopo de bloco.
   * const: Também respeita escopo de bloco, mas o valor não pode ser reatribuído.
   * 
   */

  if (true) {
    var varTeste = "Escopo de função ou global";
    let letTeste = "Escopo de bloco";
    const constTeste = "Escopo de bloco";
  
    console.log(varTeste); // Funciona
    console.log(letTeste); // Funciona
    console.log(constTeste); // Funciona
  }
  
  console.log(varTeste); // Funciona (fora do bloco)
  // console.log(letTeste); // Erro! Fora do bloco
  // console.log(constTeste); // Erro! Fora do bloco
  
