import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;


const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;

contaCorrenteRicardo.depositar(200);
contaCorrenteRicardo.depositar(100);


const valorSacado = contaCorrenteRicardo.sacar(70);
const valorDepositado = contaCorrenteRicardo.depositar(200);



const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 1002;

conta2.depositar(50);
conta2.depositar(100);

const valorSacado2 = conta2.sacar(50);

contaCorrenteRicardo.tranferir(200, conta2);


console.log(valorSacado);
console.log(contaCorrenteRicardo);


console.log(valorSacado2);
console.log(conta2);