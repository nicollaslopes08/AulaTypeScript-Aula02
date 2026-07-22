import { createInterface } from "node:readline/promises";
async function main(): Promise <void> {
    const leitor = createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const idade: number = Number(
        await leitor.question("Digite sua idade: ")
    );

    const resultado: string = 
    idade >= 18 ? "Maior de idade": "menor de idade";

    console.log(resultado);

    leitor.close();
}
main()