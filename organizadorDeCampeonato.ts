
import * as readline from "node:readline";
import process from "node:process";

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

async function iniciarSistema(){
    let 
    classificacao: string = "",
    pontosEquipe1: number = 0;




   
 function calcularPontos (vitoria: number, empate: number) : number {
      const pontos = (vitoria*3) + empate
      return pontos;
      }

    function calcularSaldoGols (golMarcado: number, GolSofrido: number): number{
       const saldo = golMarcado - GolSofrido
        return saldo
    }

    function verificarSituacao (pontos: number){
       if (pontos >= 10) {
    classificacao = "Classificada";
} else if (pontos >= 6) { // Pega de 6 até 9
    classificacao = "Ainda tem chances";
} else {
    classificacao = "Eliminado";
}
    return classificacao;
}


    console.log("        ORGANIZADOR DE CAMPEONATO"        );
    console.log("");
    console.log("");


let equipe1 = await perguntar ("informe o nome da primeira equipe: ");
let melhorEquipe: string = equipe1;
console.log ("");
console.log ("");

let vitorias = parseFloat (await perguntar ("Informe a quantidade de vitorias da equipe: "));
console.log("");
console.log("");
let empates = parseFloat (await perguntar ("Informe a quantidade de empates da equipe: "));
console.log("");
console.log("");
let derrotas1 = parseFloat (await perguntar("Informe a quantidade de derrotas da equipe: "));
console.log("");
console.log("");
    pontosEquipe1 = calcularPontos (vitorias, empates);
   
let golMarcado = parseFloat (await perguntar ("informe a quantidade de gols marcados pela equipe: "));
console.log("");
console.log("");
let GolSofrido = parseFloat (await perguntar ("informe a quantidade de gols sofridos pela equipe: ") );
console.log("");
console.log("");
   let saldoEquipe1 = calcularSaldoGols (golMarcado, GolSofrido);

   
console.log (`A quantidade de pontos de ${equipe1} é: ${pontosEquipe1}`)
console.log (`O saldo de ${equipe1} é: ${saldoEquipe1}`);


let classificacao1 = verificarSituacao(pontosEquipe1);
console.log (`A situação da equipe é: ${classificacao1}`)

let equipe2 = await perguntar ("informe o nome da segunda equipe: ");

console.log ("");
console.log ("");

let vitorias2 = parseFloat (await perguntar ("Informe a quantidade de vitorias da equipe: "));
console.log("");
console.log("");
let empates2 = parseFloat (await perguntar ("Informe a quantidade de empates da equipe: "));
console.log("");
console.log("");
let derrotas2 = parseFloat (await perguntar("Informe a quantidade de derrotas da equipe: "));

    let pontosEquipe2 = calcularPontos (vitorias2, empates2);
    if (pontosEquipe2 > pontosEquipe1){
        melhorEquipe = equipe2
    }
   
let golMarcado2 = parseFloat (await perguntar ("informe a quantidade de gols marcados pela equipe: "));
console.log("");
console.log("");
let GolSofrido2 = parseFloat (await perguntar ("informe a quantidade de gols sofridos pela equipe: ") );
console.log("");
console.log("");
   let saldoEquipe2 = calcularSaldoGols (golMarcado2, GolSofrido2);

   
console.log (`A quantidade de pontos de ${equipe2} é: ${pontosEquipe2}`)
console.log (`O saldo de ${equipe2} é: ${saldoEquipe2}`);

let classificacao2 = verificarSituacao(pontosEquipe2);


console.log (`A situação da equipe é: ${classificacao2}`)

let equipe3 = await perguntar ("informe o nome da terceira equipe: ");

console.log ("");
console.log ("");

let vitorias3 = parseFloat (await perguntar ("Informe a quantidade de vitorias da equipe: "));
console.log("");
console.log("");
let empates3 = parseFloat (await perguntar ("Informe a quantidade de empates da equipe: "));
console.log("");
console.log("");
let derrotas3 = parseFloat (await perguntar ("Informe a quantidade de derrotas da equipe: "));

    let pontosEquipe3 = calcularPontos (vitorias3, empates3);
    if (pontosEquipe3 > pontosEquipe2){
        melhorEquipe = equipe3
    }
   
let golMarcado3 = parseFloat (await perguntar ("informe a quantidade de gols marcados pela equipe: "));
console.log("");
console.log("");
let GolSofrido3 = parseFloat (await perguntar ("informe a quantidade de gols sofridos pela equipe: ") );
console.log("");
console.log("");
   let saldoEquipe3 = calcularSaldoGols (golMarcado3, GolSofrido3);

   
console.log (`A quantidade de pontos de ${equipe3} é: ${pontosEquipe3}`)
console.log (`O saldo de ${equipe3} é: ${saldoEquipe3}`);

let classificacao3 = verificarSituacao(pontosEquipe3);

console.log (`A situação da equipe é: ${classificacao3}`)

let equipe4 = await perguntar ("informe o nome da quarta equipe: ");

console.log ("");
console.log ("");

let vitorias4 = parseFloat (await perguntar ("Informe a quantidade de vitorias da equipe: "));
console.log("");
console.log("");
let empates4 = parseFloat (await perguntar ("Informe a quantidade de empates da equipe: "));
console.log("");
console.log("");
let derrotas4 = parseFloat (await perguntar("Informe a quantidade de derrotas da equipe: "));

    let pontosEquipe4 = calcularPontos (vitorias4, empates4);
    if (pontosEquipe4 > pontosEquipe3){
        melhorEquipe = equipe4
    }
   
let golMarcado4 = parseFloat (await perguntar ("informe a quantidade de gols marcados pela equipe: "));
console.log("");
console.log("");
let GolSofrido4 = parseFloat (await perguntar ("informe a quantidade de gols sofridos pela equipe: ") );
console.log("");
console.log("");
   let saldoEquipe4 = calcularSaldoGols (golMarcado4, GolSofrido4);

   
console.log (`A quantidade de pontos de ${equipe4} é: ${pontosEquipe4}`)
console.log (`O saldo de ${equipe4} é: ${saldoEquipe4}`);

let classificacao4 = verificarSituacao(pontosEquipe4);

console.log (`A situação da equipe é: ${classificacao4}`)


console.log("                    TABELA      ");
console.log("equipe   |   Pontos   |   Saldo   |   Classificação")
console.log("");
console.log("");
console.log(`${equipe1}  |  ${pontosEquipe1}  |  ${saldoEquipe1}  |  ${classificacao1}`)
console.log("")
console.log(`${equipe2}  |  ${pontosEquipe2}  |  ${saldoEquipe2}  |  ${classificacao2}`)
console.log("")
console.log(`${equipe3}  |  ${pontosEquipe3}  |  ${saldoEquipe3}  |  ${classificacao3}`)
console.log("")
console.log(`${equipe4}  |  ${pontosEquipe4}  |  ${saldoEquipe4}  |  ${classificacao4}`)
let maiorPontos: number  = pontosEquipe1,
maiorPontosSaldo: number = saldoEquipe1,
maiorPontosEquipe: string = equipe1;
if (pontosEquipe2 > maiorPontos) {
        maiorPontos = pontosEquipe2;
        maiorPontosEquipe = equipe2;
        maiorPontosSaldo = saldoEquipe2;
    }
    else if (pontosEquipe2 == maiorPontos){
        if (saldoEquipe2 > maiorPontosSaldo){
            maiorPontosEquipe = equipe2;
            maiorPontosSaldo = saldoEquipe2
        }
      
    }
    if (pontosEquipe3 > maiorPontos) {
        maiorPontos = pontosEquipe3;
        maiorPontosEquipe = equipe3;
        maiorPontosSaldo = saldoEquipe3
    }
    else if (pontosEquipe3 == maiorPontos){
        if (saldoEquipe3 > maiorPontosSaldo){
            maiorPontosEquipe = equipe3;
            maiorPontosSaldo = saldoEquipe3
        }
    }
    if (pontosEquipe4 > maiorPontos) {
        maiorPontos = pontosEquipe4;
        maiorPontosEquipe = equipe4;
        maiorPontosSaldo = saldoEquipe4
    }
    else if (pontosEquipe4 == maiorPontos){
        if (saldoEquipe4 > maiorPontosSaldo){
            maiorPontosEquipe = equipe4;
            maiorPontosSaldo = saldoEquipe4
        }
    } 

    let maiorSaldo: number  = saldoEquipe1,
    maiorSaldoEquipe: string = equipe1;
if (saldoEquipe2 > maiorSaldo) {
        maiorSaldo = saldoEquipe2;
        maiorSaldoEquipe = equipe2;
    }
    if (saldoEquipe3 > maiorSaldo) {
       maiorSaldo = saldoEquipe3;
       maiorSaldoEquipe = equipe3;
    }
    if (saldoEquipe4 > maiorSaldo) {
       maiorSaldo = saldoEquipe4
     maiorSaldoEquipe = equipe4;
    }

    let maiorGols: number  = golMarcado,
    maiorGolEquipe: string = equipe1;
if (golMarcado2 > maiorGols) {
        maiorGols = golMarcado2;
       maiorGolEquipe = equipe2;
    }
    if (golMarcado3 > maiorGols) {
       maiorGols = golMarcado3;
       maiorGolEquipe = equipe3;
    }
    if (golMarcado4 > maiorGols) {
      maiorGols = golMarcado4;
    maiorGolEquipe = equipe4;
    }
    console.log("")
    console.log (`A equipe vencedora com mais pontos foi ${maiorPontosEquipe} com ${maiorPontos} pontos!`)
    console.log ("");
    console.log (`A equipe com o maior saldo foi ${maiorSaldoEquipe} com ${maiorSaldo} saldo de gols`);
    console.log ("");
    console.log (`A equipe com o maior numero de gols foi ${maiorGolEquipe} com ${maiorGols} gols!`);

    leia.close();
}

iniciarSistema();
