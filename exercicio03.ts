import { createInterface } from "node:readline/promises";
async function main(): Promise <void> {
    const leitor = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const nome: string = await leitor.question(
        "Digite seu nome: "
    );

    const idade : number = Number (await leitor.question(
        "Digite sua idade: "
    ));

    if (idade<0) {
        console.log("idade invalida");
    }
    else if (idade<12) {
        console.log(`${nome} é criança`)
    }
    else if (idade<18) {
        console.log(`${nome} é adolescente`)
    }
    else {
        console.log(`${nome} é adulto`);
    }
}