
import * as readLine from "readline";

const leia = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(pergunta: string): Promise<string>{
    return new Promise((resolve) => {
        leia.question(pergunta, (resposta: string) => {
            resolve(resposta);
        });

        });
    
}

function calcularMedia(
    nota1 : number,
    nota2 : number
): number {
    const media: number = (nota1 + nota2) / 2;

    return media;
}

function verificarSituacao(media: number): string {
    if (media >= 7) {
        return "Aprovado";
    }

    if (media>= 5) {
        return "Recuperação";
    }

    return "Reprovado";
}

async function executar(): Promise<void>{
    const respostaNota1: string = await perguntar(
        "Digite a primeira nota: "
    );

    const respostaNota2: string = await perguntar(
        "Digite a segunda nota: "
    );

    const nota1: number = Number(respostaNota1);
    const nota2: number = Number(respostaNota2);

    const mediaAluno: number = calcularMedia(nota1,nota2);
    const situacaoAluno: string = verificarSituacao(mediaAluno);

    console.log(`Media: ${mediaAluno.toFixed(2)}`);
    console.log(`Situação: ${situacaoAluno}`);

    leia.close();
}

executar();