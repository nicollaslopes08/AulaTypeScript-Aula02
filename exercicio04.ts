function verificarIdade(idade: number): string{
    if (idade >= 18) {
        return "Maior de idade";
    }
    return "Menor de idade";
}

const resultado = verificarIdade(20);

console.log (resultado);