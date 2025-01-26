function exibirImpares(inicio, fim) {
    // Garantir que o menor número esteja em "inicio" e o maior em "fim"
    let menor = Math.min(inicio, fim);
    let maior = Math.max(inicio, fim);

    console.log(`Números ímpares entre ${menor} e ${maior}:`);
    
    for (let i = menor + 1; i < maior; i++) {
        if (i % 2 !== 0) { // Verifica se o número é ímpar
            console.log(i);
        }
    }
}

// Exemplo de uso
exibirImpares(3, 10);
