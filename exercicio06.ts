import { createInterface } from "node:readline/promises";
async function main(): Promise <void> {
    const leitor = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let numero: number;

    do{
        numero = Number(
            await leitor.question("Digite um numero ou 0 para sair: ")
        );

        if (numero !== 0) {
            console.log(`Voce digitou: ${numero}`);

        }

    }while (numero !==0);
    console.log("Programa encerrado.");
    leitor.close();

}
main();
