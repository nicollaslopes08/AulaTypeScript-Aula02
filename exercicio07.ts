import { createInterface } from "node:readline/promises";
async function main(): Promise <void> {
    const leitor = createInterface({
        input: process.stdin,
        output: process.stdout
    });
const nomes: string[] = [];

for (let contador: number = 1; contador <= 3; contador++){
    const nome: string = await leitor.question(
        `Digite o $(contador) nome: `
    );

    nomes.push(nome);
}
console.log("\nNomes cadastrados: ");

for (const nome of nomes) {
    console.log(nome);
}
console.log(`\nQuantidade de nomes: ${nomes.lenght}`);
leitor.close();
}
main()