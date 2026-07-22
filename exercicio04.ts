import { createInterface } from "node:readline/promises";
async function main(): Promise <void> {
    const leitor = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const numero : number = Number(
        await leitor.question("Digite um numero: ")
    );
    
    for (let contador: number = 1; contador <= numero; contador++){
        console.log(`Contador : ${contador}`);
    }
    leitor.close;
}
main();
