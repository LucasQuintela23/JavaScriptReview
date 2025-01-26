function determinarNivelExperiencia(anos) {
    if (anos >= 0 && anos <= 2) {
        return "Júnior";
    } else if (anos >= 3 && anos <= 5) {
        return "Pleno";
    } else if (anos >= 6) {
        return "Sênior";
    } else {
        return "Valor inválido";
    }
}

// Exemplos de uso:
console.log(determinarNivelExperiencia(1)); // "Júnior"
console.log(determinarNivelExperiencia(4)); // "Pleno"
console.log(determinarNivelExperiencia(7)); // "Sênior"
console.log(determinarNivelExperiencia(-1)); // "Valor inválido"
