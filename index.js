import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);


const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);

contaCorrenteRicardo.depositar(200);
contaCorrenteRicardo.depositar(100);


const valorSacado = contaCorrenteRicardo.sacar(70);
const valorDepositado = contaCorrenteRicardo.depositar(200);

const conta2 = new ContaCorrente(1002, cliente2);

conta2.depositar(50);
conta2.depositar(100);

const valorSacado2 = conta2.sacar(50);
contaCorrenteRicardo.tranferir(200, conta2);


console.log(valorSacado);
console.log(contaCorrenteRicardo);


console.log(valorSacado2);
console.log(conta2);

console.log("Atualmente existem " + ContaCorrente.numeroDeContas + " novas contas!");