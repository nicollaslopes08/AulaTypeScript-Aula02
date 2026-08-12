import * as readLine from "readline";

const leia = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(pergunta: string): Promise<string> {
    return new Promise((resolve) => {
        leia.question(pergunta, (resposta: string) => {
            resolve(resposta);
        });
    });
}

function validarPontuacao(pontuacao: number): boolean{
    return !Number.isNaN(pontuacao) && pontuacao >= 0;
}

function calcularDiferenca(
    pontosJogador1: number,
    pontosJogador2: number
): number {
    return Math.abs (pontosJogador1 - pontosJogador2);
}

function verficarResultado(
    nomeJogador1: string,
    pontosJogador1: number,
    nomeJogador2: string,
    pontosJogador2: number 
): string {
    if (pontosJogador1 > pontosJogador2) {
        return `Vencedor: ${nomeJogador1}`;
    }

    if (pontosJogador2 > pontosJogador1) {
        return `Vencedor: ${nomeJogador2}`;
    }

    return "A partida terminou empatada.";
}

function exibirPlacar(
    nomeJogador1: string,
    pontosJogador1: number,
    nomeJogador2: string,
    pontosJogador2: number
): void {
    console.log("\n==== PLACAR FINAL ====");
    console.log(
        `${nomeJogador1} ${pontosJogador1}  x  ${pontosJogador2} ${nomeJogador2}`
    );
}

async function executar(): Promise<void> {
    console.log("==== PLACAR DE PARTIDA ====\n");
    const nomeJogador1: string = await perguntar(
        "Nome do primeiro jogador: "
    );

    const respostaPontos1: string = await perguntar(
        `Pontuação de ${nomeJogador1}:`
    );

    const nomeJogador2: string = await perguntar(
        "Nome do segundo jogador: "
    );

    const respostaPontos2: string = await perguntar(
        `Pontuação de ${nomeJogador2}: `
    );

    const pontosJogador1: number = Number(respostaPontos1);
    const pontosJogador2: number = Number(respostaPontos2);

    if (
        !validarPontuacao(pontosJogador1) ||
        !validarPontuacao(pontosJogador2)
    ) {
        console.log(
            "\nErro: as pontuações devem ser numeros nao negativos."
        );
        leia.close();
        return;
    }

    exibirPlacar(
        nomeJogador1,
        pontosJogador1,
        nomeJogador2,
        pontosJogador2
    );

    const resultado: string = verficarResultado(
     nomeJogador1,
     pontosJogador1,
     nomeJogador2,
     pontosJogador2   
    );

    const diferenca: number = calcularDiferenca(
        pontosJogador1,
        pontosJogador2
    );

    console.log(resultado);
    console.log(`Diferença: ${diferenca} pontos(s)`);

    leia.close
}

executar();

