/*Este arquivo possui somente a finalidade de contribuir para a
compreensão de lógica de programação aplicada a Javascript,
não integrando a totalidade do projeto*/

var perfil = "docente"; //Declaração de variável
//Atribuição de valor à variável

//Inicialização da variável (declara e atribui de uma vez só)
var email = "pamella.cpsilva@sp.senac.br";

var cracha = "1049682";
var cargaHoraria = 40;
var dias = 5;
var resultado;
var funcionárioAtivo = true;

// A informação exige alocação na memória; então, a partir de um tipo da informação, pode-se indicar se ela exigirá menos
// ou mais capacidade de alocação
// Tipos de variáveis:
// string -> armazena uma cadeia de caracteres
// number -> armazena números com finalidade de operacoes aritmeticas
// boolean -> armazena valor true ou false

cargaHoraria = 32;

console.log("Dados do Funcionário da Empresa");
console.log("Perfil do funcionário: " + perfil);
console.log("O tipo da variável perfil é: " + typeof(perfil));

function calcularCargaHoraDiaria(cargaHoraria, dias) {
    resultado = cargaHoraria/dias;
    return resultado;
}


calcularCargaHoraDiaria(cargaHoraria, dias);
console.log("A carga horária diária é o resultado de " + cargaHoraria + " horas dividido " +
    "por " + dias + " dias = " + resultado + " horas");

//------------------------------------------------------------//

console.log("\nAtividade de Correção de 15/04");
var nomeUsuario = "Pamella Pereto";
var emailMedic = "pamellapereto@gmail.com";
var data = "2026-04-17T19:53";
var nomeMedicamento = "loratadina";
var dose = 100;
var quantidade = 2;
var resultadodose;

console.log(
    "Os tipos das variáveis são:\n" + 
    "var nomeUsuario: tipo " + typeof(nomeUsuario) + "\n" + + "-" +
    "var email: tipo " + typeof(emailMedic) + "\n" +
    "var data: tipo " + typeof(data) + "\n" +
    "var nomeMedicamento: tipo " + typeof(nomeMedicamento) + "\n" +
    "var dose: tipo " + typeof(dose) + "\n" +
    "var quantidade: tipo " + typeof(quantidade)
);

function calculardose(dose, quantidade) {
    resultadodose = dose * quantidade;
    return resultadodose;
}

calculardose(dose, quantidade);

// console.log(
//     "\nDados do paciente: \n" +
//     "Nome completo: " + nomeUsuario + "\n" +
//     "E-mail: " + emailMedic + "\n" +
//     "Data: " + data + "\n" +
//     "Nome do medicamento: " + nomeMedicamento + "\n" +
//     "dose: " + dose + "mg\n" +
//     "Quantidade de vezes ao dia: " + quantidade + "\n" +
//     "dose diária: " + resultadodose + "mg"
// );


console.log(
    `
     Dados do paciente:
     Nome completo: ${nomeUsuario}
     E-mail: ${emailMedic}
     Data: ${data}
     Nome do medicamento: ${nomeMedicamento}
     dose: ${dose}
     Quantidade de vezes ao dia: ${quantidade}
     dose diária: ${resultadodose}
    `  
);


/* EXERCÍCIO 1: PercorreR com bloco de código for a seguinte array de nomes, mostrando a posição de
cada item e o valor do item NO CONSOLE*/

var aluno = ["Pamella", "Thayná", "Gustavo", "Ilma"];

for (let i = 0; i < aluno.length; i++) {
    console.log(`Posição: ${[i]} - Nome: ${aluno[i]}`);
    // console.log("Posição: " + [i] + " - Nome: " + aluno[i]);
}


/* EXERCÍCIO 2:*/
/* Mostrar somente números pares do 4 até o 21: VOCÊ NÃO PRECISA DE UMA ARRAY E SÓ PRECISA DO FOR PARA EXIBIR
SOMENTE NÚMEROS PARES NO CONSOLE*/
for (let i = 4; i < 21; i = i + 2) {
    console.log(`Números pares de 4 a 20: ${[i]}`);
}

/* EXERCÍCIO 3 */
   /* Calcular um imposto de 10% em cima de preco e exibir o resultado com imposto na tela 
    Operação aritmética: multiplicao de preco pra saber o imposto sobre cada produto e
    o resultado do produto com imposto (adição)
    */
var preco = [20, 45, 78];
for (let i = 0; i < preco.length; i++) {
    let imposto = preco[i] * 0.1;
    let total = preco[i] + imposto;
    console.log(`Preço original: R$ ${preco[i]}\n
        Tributação: ${imposto.toFixed(2)}\n
        Preço final: ${total.toFixed(2)}`);
}
const frutas = ['Maçã', 'Banana', 'Laranja'];

const ultimaFruta = frutas.pop(); 

console.log(frutas); // Resultado: ['Maçã', 'Banana']