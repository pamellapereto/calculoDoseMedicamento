const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputMedicamento = document.getElementById("medicamento");
const inputData = document.getElementById("data");
const inputQtd = document.getElementById("qtd-dosagem");

const keyNome = "mh-nome";
const keyEmail = "mh-email";
const keyMedicamento = "mh-medicamento";
const keyData = "mh-data";
const keyQtd = "mh-qtd";

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

inputNome.addEventListener("input", salvarNome);
inputEmail.addEventListener("input", salvarEmail);
inputMedicamento.addEventListener("input", salvarMedicamento);
inputData.addEventListener("change", salvarData);
inputQtd.addEventListener("change", salvarQtd);

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
