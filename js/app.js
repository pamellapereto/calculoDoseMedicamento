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
const btnAdd = document.getElementById("add") //botao identificado 

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
btnAdd.addEventListener("click", saveLocal); //ao interagir com o botão, salvar no localStorage

//identificada a seção pelo id
const sectionTb_listaMedicamentos = document.getElementById("tb-listaMedicamentos");
sectionTb_listaMedicamentos.appendChild(table); //incorporou tabela nessa seção

table.appendChild(tbHead);
tbHead.appendChild(tr);
tr.appendChild(thNomeMedic);
tr.appendChild(thDosagem);
tr.appendChild(thQtdMedic);
tr.appendChild(thData);

sectionTb_listaMedicamentos.style.display = "flex";
sectionTb_listaMedicamentos.style.justifyContent = "space-around";
sectionTb_listaMedicamentos.style.marginTop = "3rem";

tr.style.display = "flex";
tr.style.gap = "2rem";  //Nessa única linha tem um distanciamento (gap) de uma coluna para a outra

// OPÇÃO A para verificar se checkbox está marcado 
function verificarUsoContinuo() {
  if (inputUsoContinuo.checked) {
    return true;
  } else {
    return false;
  }
}

// OPÇÃO A para verificar qual dosagem foi selecionada
function verificarDosagem() {
  for (let i = 0; i < opDosagem.length; i++) {
    if (opDosagem[i].checked) {
      return opDosagem[i].value;
    }
  }
  return null; // Retorna null se nenhuma dosagem estiver selecionada
}



const keyNome = "mh-nome";
const keyEmail = "mh-email";
const keyTratamento = "mh-tratamento";


function salvarNome() {
  localStorage.setItem("mh-nome", inputNome.value);
}

function salvarEmail() {
  localStorage.setItem("mh-email", inputEmail.value);
}


function saveLocal() {

  const tratamento = {
  nome: inputMedicamento.value,
  data: inputData.value,
  qtd: inputQtd.value,
  //OPÇÃO A para chamar a função e verificar estado booleano do checkbox 
  // usoContinuo: verificarUsoContinuo()

  //OPÇÃO B para verificar se checkbox está marcado e seu estado booleano => ação auto-executável
  usoContinuo: (() => {
    if (inputUsoContinuo.checked) {
      return true;
    } else {
      return false;
    }
  }),

  //OPÇÃO A para chamar a função e verificar valor da dosagem selecionada
  // dosagem: verificarDosagem(),

  //OPÇÃO B para verificar qual dosagem foi selecionada e seu valor => ação auto-executável
  dosagem: (() => {
    for (let i = 0; i < opDosagem.length; i++) {
      if (opDosagem[i].checked) {
        return opDosagem[i].value;
      }
    }
    return null; // Retorna null se nenhuma dosagem estiver selecionada
  }) (),
}
  inputMedicamento.addEventListener("input", () => {
    tratamento.nome = inputMedicamento.value;
  });

  inputData.addEventListener("input", () => {
    tratamento.data = inputData.value;
  });

  inputQtd.addEventListener("input", () => {
    tratamento.qtd = inputQtd.value;
  });

  inputUsoContinuo.addEventListener("change", () => {
    tratamento.usoContinuo = inputUsoContinuo.checked;
  });


  let tratamentos = JSON.parse(localStorage.getItem(keyTratamento)) || [];
  tratamentos.push(tratamento);
  localStorage.setItem(keyTratamento, JSON.stringify(tratamentos));

  //TAREFA: RENDERIZAR NOVAMENTE A TABELA COM OS DADOS ATUALIZADOS => chame a função carregarDados()
}

inputNome.addEventListener("input", salvarNome);
inputEmail.addEventListener("input", salvarEmail);

function carregarDados() {
  const nomeSalvo = localStorage.getItem("mh-nome");
  const emailSalvo = localStorage.getItem("mh-email");
  const medicamentoSalvo = localStorage.getItem(keyTratamento) ? JSON.parse(localStorage.getItem(keyTratamento)).nome : null;
  const dataSalva = localStorage.getItem(keyTratamento) ? JSON.parse(localStorage.getItem(keyTratamento)).data : null;
  const qtdSalva = localStorage.getItem(keyTratamento) ? JSON.parse(localStorage.getItem(keyTratamento)).qtd : null;
  const dosagemSalva = localStorage.getItem(keyTratamento) ? JSON.parse(localStorage.getItem(keyTratamento)).dosagem : null;

  if (nomeSalvo !== null) {
    inputNome.value = nomeSalvo;
  }
  if (emailSalvo !== null) {
    inputEmail.value = emailSalvo;
  } 

  //TAREFA: RENDERIZAÇÃO DA TABELA COM OS DADOS SALVOS NO LOCALSTORAGE
}

function resetar() {
  localStorage.clear();
}

carregarDados();

