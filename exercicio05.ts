import { createInterface } from "node:readline/promises";
async function main(): Promise <void> {
    const leitor = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const limite: number = Number(
        await leitor.question("Digite o limite da contagem: ")

    );
    let contador: number = 1;

    while (contador<= limite) {
        console.log(`Contador: ${contador}`);
        contador++;
    }
    leitor.close();
}
main();