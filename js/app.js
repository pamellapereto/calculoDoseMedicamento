const form = document.getElementById("form");

const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputMedicamento = document.getElementById("medicamento");
const inputData = document.getElementById("data");
const inputQtd = document.getElementById("qtd-dosagem");
const dosagem = document.querySelectorAll('input[name=dosagem]');
/*dosagem = ["250",     "500",        "750",     "1000"]; 
            i = 0       i = 1         i = 2       i = 3
           início       intervalo                  fim              */

//1ª forma para percorrer a lista
for (i = 0; i < dosagem.lenght();  i++)  {
    console.log(dosagem[i]);
}  
          


const btnReset = document.getElementById("reset");
const btnSalvar = document.createElement("button");
btnSalvar.textContent = "Salvar";
form.appendChild(btnSalvar);


const keyNome = "mh-nome";
const keyEmail = "mh-email";
const keyMedicamento = "mh-medicamento";
const keyData = "mh-data";
const keyQtd = "mh-qtd";
const keyDosagem = "mh-dosagem";

function salvarNome() {
  localStorage.setItem("mh-nome", inputNome.value);
}

function salvarEmail() {
  localStorage.setItem("mh-email", inputEmail.value);
}
function salvarMedicamento() {
  localStorage.setItem("mh-medicamento", inputMedicamento.value);
}

function salvarData() {
  localStorage.setItem("mh-data", inputData.value);
}

function salvarQtd() {
  localStorage.setItem("mh-qtd", inputQtd.value);
}

function salvarOpDosagem() {
  localStorage.setItem("mh-dosagem", opDosagem.value);
}

inputNome.addEventListener("input", salvarNome);
inputEmail.addEventListener("input", salvarEmail);
inputMedicamento.addEventListener("input", salvarMedicamento);
inputData.addEventListener("change", salvarData);
inputQtd.addEventListener("change", salvarQtd);
btnReset.addEventListener("click", resetar);



function carregarDados() {
  const nomeSalvo = localStorage.getItem("mh-nome");
  const emailSalvo = localStorage.getItem("mh-email");
  const medicamentoSalvo = localStorage.getItem("mh-medicamento");
  const dataSalva = localStorage.getItem("mh-data");
  const qtdSalva = localStorage.getItem("mh-qtd");

  if (nomeSalvo !== null) {
    inputNome.value = nomeSalvo;
  }

  if (emailSalvo !== null) {
    inputEmail.value = emailSalvo;
  }

  if (medicamentoSalvo !== null) {
    inputMedicamento.value = medicamentoSalvo;
  }

  if (dataSalva !== null) {
    inputData.value = dataSalva;
  }

  if (qtdSalva !== null) {
    inputQtd.value = qtdSalva;
  }
}

function resetar() {
  localStorage.clear();
}

// resetar();
carregarDados();
