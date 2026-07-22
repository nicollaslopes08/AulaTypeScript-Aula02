import { createInterface } from "node:readline/promises";
async function main(): Promise <void> {
    const leitor = createInterface({
        input: process.stdin,
        output: process.stdout
    });
console.log("1 - Judo");
console.log("2 - Jiu-jitsu");
console.log("3 - Boxe");
console.log("4 - Muay thai");

const opcao: number = Number(
    await leitor.question("Escolha uma modalidade: ")
);

switch (opcao) {
    case 1:
        console.log("Voce escolheu judo");
        break;
    case 2:
        console.log("Voce escolheu jiu-jitsu");
        break;

    case 3:
        console.log("Voce escolheu boxe");
        break;

    case 4:
        console.log("Voce escolheu Muay thai");
        break;

        default:
            console.log("Opcao invalida.");
}

leitor.close();
}
main()