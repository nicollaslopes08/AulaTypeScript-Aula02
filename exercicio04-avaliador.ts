import { push } from "node:stream/iter";
import * as readline from "readline";

const leia = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(pergunta: string): Promise<string> {
    return new Promise((resolve)=> {
        leia.question(pergunta, (resposta: string) =>{
            resolve(resposta);
        })
        
    })
}

async function iniciarSistema() {
    let MaiorNota: number = 0,
    MenorNota: number = 0,
    notaAcima8:number= 0,
    mediaN:number=0,
    nota:number,
    notasTotal:number=0,
    somaNotas = 0;

    console.log("Sistema avaliador");
    console.log("");
    console.log("");

    let nome = await perguntar ("Infome o nome do filme ou jogo: ");
    console.log("");

    const notas: number[] = [];

   async function RelatorioNotas(): Promise <void>{
    for (let i = 0; i<5; i++){
     let Rnota = await perguntar ("Informe a nota do filme ou jogo: ")
     nota = parseInt(Rnota);
     MenorNota = nota;
     notas.push (nota);
     notasTotal++;
     somaNotas += nota;
     if (nota > MaiorNota){
        MaiorNota = nota;
     }else if (nota > 8){
        notaAcima8++
     }
     else if (nota > MaiorNota && nota > 8){
        notaAcima8++;
        MaiorNota = nota;
     }else if (nota < MenorNota ){
        MenorNota = nota;
     }
        
    }
    function media (somaNotas: number, notasTotal: number): void {
        const mediaN = somaNotas / notasTotal;
    }
    async function classificar 

    
}

console.log(`AVALIACAO: ${nome}`);
console.log("");
console.log(notas);
console.log("");
console.log(`media: ${mediaN}`);
console.log("");
console.log(`A maior nota foi: ${MaiorNota}`);
console.log("");
console.log(`A menor nota foi: ${MenorNota}`);
console.log("");
console.log(`As notas acima de 8 foram: ${notaAcima8}`);

}