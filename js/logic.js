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
var dosagem = 100;
var quantidade = 2;
var resultadoDosagem;

console.log(
    "Os tipos das variáveis são:\n" + 
    "var nomeUsuario: tipo " + typeof(nomeUsuario) + "\n" +
    "var email: tipo " + typeof(emailMedic) + "\n" +
    "var data: tipo " + typeof(data) + "\n" +
    "var nomeMedicamento: tipo " + typeof(nomeMedicamento) + "\n" +
    "var dosagem: tipo " + typeof(dosagem) + "\n" +
    "var quantidade: tipo " + typeof(quantidade)
);

function calcularDosagem(dosagem, quantidade) {
    resultadoDosagem = dosagem * quantidade;
    return resultadoDosagem;
}

calcularDosagem(dosagem, quantidade);

// console.log(
//     "\nDados do paciente: \n" +
//     "Nome completo: " + nomeUsuario + "\n" +
//     "E-mail: " + emailMedic + "\n" +
//     "Data: " + data + "\n" +
//     "Nome do medicamento: " + nomeMedicamento + "\n" +
//     "Dosagem: " + dosagem + "mg\n" +
//     "Quantidade de vezes ao dia: " + quantidade + "\n" +
//     "Dosagem diária: " + resultadoDosagem + "mg"
// );


console.log(
    `
     Dados do paciente:
     Nome completo: ${nomeUsuario}
     E-mail: ${emailMedic}
     Data: ${data}
     Nome do medicamento: ${nomeMedicamento}
     Dosagem: ${dosagem}
     Quantidade de vezes ao dia: ${quantidade}
     Dosagem diária: ${resultadoDosagem}
    `  
);

