import { createInterface } from "node:readline/promises";
async function main(): Promise <void> {
    const leitor = createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const nome: string = await leitor.question(
        "Digite seu nome: "
    );
    const idade: number = Number (await leitor.question("Digite sua idade: "));

    console.log(`Ola, ${nome} Você tem ${idade} anos.` );

    leitor.close();


}
main();