
import console from "console";
import * as readLine from "readline";


const leia = readLine.createInterface({
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
    

let experiencia: number,
nivel: number,
vida: number = 100,
forca:number = 20,
nivelGanho:number =0,
xpRest: number = 0;

console.log ("Sistema de evoluçao de personagem");
console.log ("");
console.log ("");

let nome= await perguntar ("Informe o nome do personagem: ");
console.log("");
let Rnivel = await perguntar ("Informe o nivel do personagem: ");
nivel = parseInt(Rnivel);
console.log("");
let Rexpericencia = await perguntar ("Informe a experiencia que o personagem ganhou: ");
experiencia = parseInt(Rexpericencia);
console.log("");
 function NovoNivel(): void {
    if (experiencia > 100){
       nivelGanho = Math.floor(experiencia/100)
        nivel += nivelGanho;
         xpRest = experiencia%100
        vida += nivelGanho*20;
        forca += nivelGanho*5;

        console.log(`Voce subiu de nivel! Voce ganhou 20 pontos de vida e 5 pontos de forca por nivel, agora voce esta no nivel: ${nivel}`)
    }
    else if(experiencia <0){
        console.log("o numero é invalido")

        }else {

        experiencia += experiencia;
    }
    
}NovoNivel();
console.log("");
console.log(`Os resultados do personagem ${nome} foram: `);
console.log(`Niveis ganhos: ${nivelGanho}`);
console.log("");
console.log(`Nivel atual: ${nivel}`);
console.log("");
console.log(`Vida atual: ${vida}`);
console.log("");
console.log(`Forca atual: ${forca}`);
console.log("");
console.log(`Experiencia restante: ${xpRest}`);

}

iniciarSistema();