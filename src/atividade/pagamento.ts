// 1. Definimos um contrato (Interface)
interface MetodoPagamento {
    processar(valor: number): void;
}

// 2. Implementamos formas específicas de pagamento
class PagamentoCartao implements MetodoPagamento {
    processar(valor: number): void {
        console.log(`Processando R$ ${valor} no Cartão de Crédito...`);
    }
}

class PagamentoPix implements MetodoPagamento {
    processar(valor: number): void {
        console.log(`Gerando QR Code para Pix no valor de R$ ${valor}...`);
    }
}

// 3. O Processador não precisa mudar se criarmos um novo método de pagamento
class ProcessadorDeVendas {
    executar(metodo: MetodoPagamento, valor: number) {
        metodo.processar(valor);
    }
}

// --- Testando o Código ---
const processador = new ProcessadorDeVendas();
const meuPix = new PagamentoPix();

processador.executar(meuPix, 150.00); 