import { resolve } from "dns";
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

function validarQuantidade(quantidade: number): boolean {
    return (
        !Number.isNaN(quantidade) &&
        Number.isInteger(quantidade) &&
        quantidade >=0
    );
}

    function validarPreco(preco: number): boolean {
        return  !Number.isNaN(preco) && preco >= 0;
    }

    function calcularSubtotal (
        quantidade : number,
        precoUnitario: number 
    ): number{
        return quantidade * precoUnitario;
    }

    function calcularTotal(
        totalLanches: number,
        totalBebidas: number
    ): number {
        return totalLanches + totalBebidas;
    }

    function calcularValorPorPessoa(
        valorTotal: number,
        quantidadePessoa: number
    ): number {
        return valorTotal / quantidadePessoa;
    }

    function formatarDinheiro(valor: number): string {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    }

    async function executar(): Promise<void> {
        console.log("==== PEDIDO DA TURMA ====\n");

        const quantidadeLanches: number = Number(
            await perguntar("Quantidade de lanches: ")
        );

        const precoLanche: number = Number(
            await perguntar("Preco de cada lanche: R$")
        );

        const quantidadeBebidas: number = Number(
            await perguntar("Quantidade de bebidas: ")
        );

        const precoBebida: number = Number(
            
            await perguntar("Preço de cada bebida: R$ ")
        );

        const quantidadePessoas: number = Number(
            await perguntar("Quantidade de pessoas: ")
        );

         if (
        !validarQuantidade(quantidadeLanches) ||
        !validarQuantidade(quantidadeLanches)
    ) {
        console.log(
            "\nErro: as quantidades devem ser números inteiros positivos."
        );
        leia.close();
        return;
    }

    if (
        !validarPreco(precoLanche) ||
        !validarPreco(precoBebida)
     ) {
        console.log("\nErro: os preços não podem ser negativos.")
        leia.close();
        return;
        }

    if (
        !Number.isInteger(quantidadePessoas) ||
        quantidadePessoas <= 0
    ) {
        console.log("\nErro: a quantidade de pessoas deve ser maior que zero.");
        leia.close();
        return;
    }

    const totalLanches: number = calcularSubtotal(
        quantidadeLanches,
        precoLanche
    );

    const totalBebidas: number = calcularSubtotal(
        quantidadeBebidas,
        precoBebida
    );

    const totalPedido: number = calcularTotal(
        totalLanches,
        totalBebidas
    );

    const valorPorPessoa: number = calcularValorPorPessoa(
        totalPedido,
        quantidadePessoas
    );

    console.log("===== RESUMO DO PEDIDO =====");
    console.log(`Total dos lanches: ${formatarDinheiro(totalLanches)}`);
    console.log(`Total das bebidas: ${formatarDinheiro(totalBebidas)}`);
    console.log(`Valor total: ${formatarDinheiro(totalPedido)}`);
    console.log(`Cada pessoa pagará: ${formatarDinheiro(valorPorPessoa)}`);

    leia.close();
}

executar();


    

