interface ICarro {
    marca: string;
    modelo: string;
    ano: number;

    exibirDetalhes(): void;
    acelerar(velocidade: number): void;
    frear(): void;
}

class CarroAGasolina implements ICarro {
    marca: string;
    modelo: string;
    ano: number;
    private velocidade: number;

    constructor(marca: string, modelo: string, ano: number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = 0;
    }

    exibirDetalhes(): void {
        console.log(`Dados do veículo a gasolina`);
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`)
    }
    acelerar(velocidade: number): void {
        this.velocidade += velocidade;
        //+= primeiro incrementa, depois usa o valor
        //=+ usa o valor, depois incrementa
        console.log(`Acelerando a ${this.velocidade} km/h`)
    }
    frear(): void {
        this.velocidade = 0;
        console.log(`O carro parou.`)
    }

}

const carroGas = new CarroAGasolina("Wolkswagen", "Polo", 2018);
carroGas.exibirDetalhes();
carroGas.acelerar(50);
carroGas.acelerar(30);
carroGas.frear();