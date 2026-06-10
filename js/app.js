const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputMedicamento = document.getElementById("medicamento");
const inputData = document.getElementById("data");
const inputQtd = document.getElementById("qtd-dosagem");
const opDosagem = document.querySelectorAll("input[name='dosagem']");
const btnResetar = document.createElement("button");
const inputUsoContinuo = document.getElementById("default");  // checkbox de uso contínuo
const table = document.createElement("table"); // criação tabela (container)
const tbHead = document.createElement("thead"); // cabeçalho da tabela
const tr = document.createElement("tr"); //1 linha no cabeçalho da tabela (r = row/linha)
const thNomeMedic = document.createElement("th");  //coluna para o nome do medicamento
const thQtdMedic = document.createElement("th");  //coluna para a quantidade
const thDosagem = document.createElement("th"); //coluna para a dosagem
const thData = document.createElement("th");   //coluna para a data

thNomeMedic.textContent = "Medicamento";
thDosagem.textContent = "Dosagem";
thQtdMedic.textContent = "Quantidade";
thData.textContent = "Data";


const sectionResetar = document.getElementById("resetar");
sectionResetar.appendChild(btnResetar);
btnResetar.textContent = "Limpar formulário";
sectionResetar.style.textAlign = "center";
sectionResetar.style.marginTop = "20px";

btnResetar.addEventListener("click", resetar);

//identificada a seção pelo id
const sectionTb_listaMedicamentos = document.getElementById("tb-listaMedicamentos");
sectionTb_listaMedicamentos.appendChild(table); //incorporou tabela nessa seção
table.appendChild(tbHead);
tbHead.appendChild(tr);
tr.appendChild(thNomeMedic);
tr.appendChild(thDosagem);
tr.appendChild(thQtdMedic);
tr.appendChild(thData);


const keyNome = "mh-nome";
const keyEmail = "mh-email";
const keyMedicamento = "mh-medicamento";
const keyData = "mh-data";
const keyQtd = "mh-qtd";
const keyDosagem = "mh-dosagem";
const keyUsoContinuo = "mh-uso-continuo"; // chave para o uso contínuo
  
function salvarUsoContinuo() { // função para salvar o estado do checkbox de uso contínuo
  if (inputUsoContinuo.checked) {
    localStorage.setItem("mh-uso-continuo", "true");
  }
}


function salvarDosagem() {
    console.clear();
  for (let i = 0; i < opDosagem.length; i++) {
    if (opDosagem[i].checked) {
      console.log(typeof(opDosagem[i].value) + " - " + opDosagem[i].value);
      localStorage.setItem("mh-dosagem", opDosagem[i].value);
    }
  }
}


for (let i = 0; i < opDosagem.length; i++) {
  opDosagem[i].addEventListener("change", salvarDosagem);
}

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
  const dosagemSalva = localStorage.getItem("mh-dosagem");

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

  if(dosagemSalva !== null) {
    for (let i = 0; i < opDosagem.length; i++) {
      if (opDosagem[i].value === dosagemSalva) {
        opDosagem[i].checked = true;
      }
    }
  }
}

function resetar() {
  localStorage.clear();
}

// resetar();
carregarDados();

