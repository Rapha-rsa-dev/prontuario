const addNewPaciente = document.querySelector('.newPacientAdd');
const modalPaciente = document.querySelector('.modal-paciente');
const fecharModalPaciente = document.querySelector('#closeModal');
const closeCancel = document.querySelector('.cancel');
const btnSend = document.querySelector('#sendPacient');
const cpfInput = document.querySelector('#cpfDados');
const nameInputPaciente = document.querySelector('#nomedados');
const dataDeNascInput = document.querySelector('#datadados');
const emailInputPaciente = document.querySelector('#emailDados');
const generoInput = document.querySelector('#generodados');
const nacionalidadeInput = document.querySelector('#paisesdados');
const naturalidadeInput = document.querySelector('#naturaldados');
const profissaoInput = document.querySelector('#jobdados');
const escolaridadeInput = document.querySelector('#scholdados');
const estadoCivilInput = document.querySelector('#maritaldados');
const maeInput = document.querySelector('#motherdados');
const paiInput = document.querySelector('#fatherdados');
const erroNome = document.querySelector('#nomeErro');
const erroCpf = document.querySelector('#cpfErro');
const erroData = document.querySelector('#dataErro');
const erroEmail = document.querySelector('#emailErro');
const erroGenero = document.querySelector('#generoErro');
const erroNacionalidade = document.querySelector('#erroNacionalidade');
const erroNaturalidade = document.querySelector('#erroNaturalidade');
const erroProfissao = document.querySelector('#erroProfissao');
const erroEscolaridade = document.querySelector('#erroEscolaridade');
const erroEstadoCivil = document.querySelector('#erroEstadoCivil');
const erroMae = document.querySelector('#erroMae');
const erroPai = document.querySelector('#erroPai');
const btnYes = document.querySelector('.Yes');
const btnNo = document.querySelector('.No');
const modConfirm = document.querySelector('.mod');
const userTela = document.querySelector("#userName");
const modalSucess = document.querySelector('.modalSucess');
const btnConfirm = document.querySelector('#cadasroConfirm');
const modDelete = document.querySelector('.modDelete');
const btnNoDelete = document.querySelector('.no');
const btnDelete = document.querySelector('.yes');
const emailCheck = document.getElementsByClassName('emailInput');
const sairPopup = document.querySelector('#arrow-down');
const modalSair = document.querySelector('#popup');
const sair = document.querySelector("#sair");
const body = document.querySelector('.main-conteiner');
const cabecalho = document.querySelector('.contentHeader');
const centro = document.querySelector('.contentTable');
const modalProntuario = document.querySelector('.prontuario');
const voltarPacientes = document.querySelector('.text55');

sairPopup.addEventListener("click", e => {
    modalSair.style.display = 'flex';
})
centro.addEventListener('click', function (event) {
    if (event.target === centro) {
        modalSair.style.display = 'none';
    }
});

body.addEventListener('click', function (event) {
    if (event.target === body) {
        modalSair.style.display = 'none';
    }
});
cabecalho.addEventListener('click', function (event) {
    if (event.target === cabecalho) {
        modalSair.style.display = 'none';
    }
});
document.addEventListener('click', function (event) {
    if (modalSair.contains(event.target)) {
        modalSair.style.display = 'none';
    }
});

sair.addEventListener("click", e => {
    modalSair.style.display = 'none';
    localStorage.removeItem('senhaUser');
    localStorage.removeItem('emailUser');
    setTimeout(() => {
        window.location.href = '/index.html';
    }, 1000)
})


const nomeU = fetch(`https://raphadev.onrender.com/login`)
    .then((response) => {
        response.json()
            .then((dados) => {
                dados.map((login) => {
                   
                    if (login) {
                        document.querySelector('#userName').textContent = `${login.nomeUser}`
                        document.querySelector('.emailLogado').textContent = `${login.emailUser}`

                    }

                })
            })
    })


addNewPaciente.addEventListener('click', addPaciente);
function addPaciente() {
    modalPaciente.style.display = 'flex';
    document.querySelector('.cabecalho').style.display = 'none';
    document.querySelector('.contentTable').style.display = 'none';
    document.querySelector('#back').style.backgroundColor = 'rgba(0,0,0,0.4)';
};
function closeModal(){
    modConfirm.style.display = "block";
}    
closeCancel.addEventListener('click', function () {
    modConfirm.style.display = "block";
});
fecharModalPaciente.addEventListener('click', function () {
    modConfirm.style.display = "block";
});
btnYes.addEventListener("click", function () {
    modConfirm.style.display = "none";
    location.reload();
});
btnNo.addEventListener("click", function (e) {
    modConfirm.style.display = "none";

});
let ValidEmail = function ValidEmail(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    );
    if (emailRegex.test(email)) {
        return true;
    };
    return false;
};

async function newPacient(paciente) {
    return fetch('https://raphadev.onrender.com/pacientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(paciente),
    });
};
let nomeUser;

fetch(`https://raphadev.onrender.com/login`).then((response) => {
    response.json().then((usuarios) => {
        usuarios.map((login) => {

            if (login) {
                nomeUser = `${login.nomeUser}`
                
            }

        })
    })
})


async function cadastrar() {
    const cpf = cpfInput.value;
    const nome = nameInputPaciente.value;
    const dataDeNasc = dataDeNascInput.value;
    const email = emailInputPaciente.value;
    const genero = generoInput.value;
    const nacionalidade = nacionalidadeInput.value;
    const naturalidade = naturalidadeInput.value;
    const profissao = profissaoInput.value;
    const escolaridade = escolaridadeInput.value;
    const estadoCivil = estadoCivilInput.value;
    const mae = maeInput.value;
    const pai = paiInput.value;
    const dadosPaciente = {
        cpf, nome, dataDeNasc,
        email, genero, nacionalidade,
        naturalidade, profissao, escolaridade,
        estadoCivil, mae, pai, idMedico: nomeUser
    };
    await newPacient(dadosPaciente);
};

cpfInput.addEventListener('input', () => {
    let numeroCPF = cpfInput.value;
    let tem11numeros = numeroCPF.length >= 11;
    let numero = cpfInput.value.replace(/\D/g, "");
    numero = numero.slice(0, 11);
    numero = numero.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    cpfInput.value = numero;
    if (tem11numeros) {
        erroCpf.innerText = 'CPF';
        erroCpf.style.color = '#4F4F4F';
        return;
    };
});

nameInputPaciente.addEventListener('input', function () {
    let nomeTamanho = nameInputPaciente.value;
    let tem5Digitos = nomeTamanho.length >= 2;
    if (tem5Digitos) {
        erroNome.innerText = 'Nome';
        erroNome.style.color = '#4F4F4F';
        return;
    };
});
emailInputPaciente.addEventListener('input', function () {
    let emailValid = emailInputPaciente.value;
    let checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (checkEmail.test(emailValid)) {
        erroEmail.innerText = 'Email';
        erroEmail.style.color = '#4F4F4F';

    } else {
        erroEmail.innerText = 'Digite um Email valido';
        erroEmail.style.color = '#e90505';
        return;
    };
});
dataDeNascInput.addEventListener('input', () => {
    let diaMesAno = dataDeNascInput.value;
    let tem8numeros = diaMesAno.length >= 8;
    let formatData = dataDeNascInput.value.replace(/\D/g, "");
    formatData = formatData.slice(0, 8);
    formatData = formatData.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
    dataDeNascInput.value = formatData;
    if (tem8numeros) {
        erroData.innerText = 'Data de Nascimento';
        erroData.style.color = '#4F4F4F';
        return;
    };
});
generoInput.addEventListener('change', function () {
    if (generoInput.checkValidity()) {
        erroGenero.innerText = 'Sexo/Gênero';
        erroGenero.style.color = '#4F4F4F';
        return;
    };
});
nacionalidadeInput.addEventListener('change', function () {
    if (nacionalidadeInput.checkValidity()) {
        erroNacionalidade.innerText = 'Nacionalidade';
        erroNacionalidade.style.color = '#4F4F4F';
        return;
    };
});
naturalidadeInput.addEventListener('input', function () {
    let naturalTamanho = naturalidadeInput.value;
    let temUmaCidade = naturalTamanho.length >= 2;
    if (temUmaCidade) {
        erroNaturalidade.innerText = 'Naturalidade';
        erroNaturalidade.style.color = '#4F4F4F';
        return;
    };
});
profissaoInput.addEventListener('input', function () {
    let profissaoTamanho = profissaoInput.value;
    let temUmJob = profissaoTamanho.length >= 2;
    if (temUmJob) {
        erroProfissao.innerText = 'Profissão';
        erroProfissao.style.color = '#4F4F4F';
        return;
    };
});
escolaridadeInput.addEventListener('input', function () {
    let nivelescolar = escolaridadeInput.value;
    let tamanhoEscolar = nivelescolar.length >= 2;
    if (tamanhoEscolar) {
        erroEscolaridade.innerText = 'Escolaridade';
        erroEscolaridade.style.color = '#4F4F4F';
        return;
    };
});
estadoCivilInput.addEventListener('change', function () {
    if (estadoCivilInput.checkValidity()) {
        erroEstadoCivil.innerText = 'Estado Civil';
        erroEstadoCivil.style.color = '#4F4F4F';
        return;
    };
});
maeInput.addEventListener('input', function () {
    let nomeDamae = maeInput.value;
    let tamanhoMae = nomeDamae.length >= 2;

    if (tamanhoMae) {
        erroMae.innerText = 'Mãe';
        erroMae.style.color = '#4F4F4F';
        return;
    };
});
paiInput.addEventListener('input', function () {
    let nomeDoPai = paiInput.value;
    let tamanhoPai = nomeDoPai.length >= 2;
    if (tamanhoPai) {
        erroPai.innerText = 'Pai';
        erroPai.style.color = '#4F4F4F';
        return;
    };
});
btnSend.addEventListener('click', (event) => {
    event.preventDefault();
    if (cpfInput.value === "") {
        erroCpf.innerText = 'Preencha o CPF';
        erroCpf.style.color = '#e90505';
        return;
    };
    if (nameInputPaciente.value === "") {
        erroNome.innerText = 'Preencha o nome ';
        erroNome.style.color = '#e90505';
        return;
    };

    if (dataDeNascInput.value === "") {
        erroData.innerText = 'Digite uma data com dd/mm/aaaa';
        erroData.style.color = '#e90505';
        return;
    };
    if (emailInputPaciente.value === "" || !ValidEmail(emailInputPaciente.value)) {
        erroEmail.innerText = 'Digite um email valido';
        erroEmail.style.color = '#e90505';
        return;
    };
    if (generoInput.value === "") {
        erroGenero.innerText = 'Selecione o gênero';
        erroGenero.style.color = '#e90505';
        return;
    };
    if (naturalidadeInput.value === "") {
        erroNaturalidade.innerText = 'Digite o local de Nascimento';
        erroNaturalidade.style.color = '#e90505';
        return;
    };
    if (nacionalidadeInput.value === "") {
        erroNacionalidade.innerText = 'Digite o país de nascimento';
        erroNacionalidade.style.color = '#e90505';
        return;
    };
    if (profissaoInput.value === "") {
        erroProfissao.innerText = 'Digite uma profissão';
        erroProfissao.style.color = '#e90505';
        return;
    };
    if (escolaridadeInput.value === "") {
        erroEscolaridade.innerText = 'Digite o nivel escolar';
        erroEscolaridade.style.color = '#e90505';
        return;
    };
    if (estadoCivilInput.value === "") {
        erroEstadoCivil.innerText = 'Selecione o estado civil';
        erroEstadoCivil.style.color = '#e90505';
        return;
    };
    if (maeInput.value === "") {
        erroMae.innerText = 'Digite um nome';
        erroMae.style.color = '#e90505';
        return;
    };
    if (paiInput.value === "") {
        erroPai.innerText = 'Digite um nome';
        erroPai.style.color = '#e90505';
        return;
    };
    btnConfirm.addEventListener('click', function () {
        modalSucess.style.display = 'none';
        document.querySelector('.cabecalho').style.display = 'block';
        document.querySelector('.contentTable').style.display = 'flex';
        document.querySelector('#back').style.backgroundColor = '#E5E5E5';
        location.reload();
    });
    if (cadastrar()) {
        modalPaciente.style.display = 'none';
        modalSucess.style.display = 'flex'
        document.querySelector('.cabecalho').style.display = 'block';
        document.querySelector('.contentTable').style.display = 'flex';
        document.querySelector('#back').style.backgroundColor = '#E5E5E5';
        return
    } else {
        return;
    };
});
enviarForm.addEventListener('DOMContentLoaded', function () {
    const enviarForm = document.querySelector('.sendForm');
    setTimeout(function () {
        enviarForm.submit();
        return;
    }, 2000);
    return;
});

    const labels = document.querySelectorAll('label');
    const spans = document.querySelectorAll('span');
    const inputs = document.querySelectorAll('input');
    const selects = document.querySelectorAll('select');
    
    function viwerPaciente() {
    document.querySelector('.paceiteTitulotext').innerText = 'Dados do Paciente';
    document.querySelector('.send').style.display = 'none';
    document.querySelector('#editar').style.display = 'block';
    modalPaciente.style.display = 'flex';
    inputs.forEach(inputs => {
        inputs.disabled = true;
        inputs.style.backgroundColor = '#BDBDBD';
    });
    selects.forEach(selects => {
        selects.disabled = true;
        selects.style.backgroundColor = '#BDBDBD';
    });
    labels.forEach(labels => {
        labels.style.display = 'none';
    });
    spans.forEach(spans => {
        spans.style.display = 'none';
    });
       
    function dadosPaciente(paciente) {
        cpfInput.value = paciente.cpf;
        nameInputPaciente.value = paciente.nome;
        dataDeNascInput.value = paciente.dataDeNascimento;
        emailInputPaciente.value = paciente.email;
        generoInput.value = paciente.genero;
        nacionalidadeInput.value = paciente.nacionalidade;
        naturalidadeInput.value = paciente.naturalidade;
        profissaoInput.value = paciente.profissao;
        escolaridadeInput.value = paciente.escolaridade;
        estadoCivilInput.value = paciente.estadoCivil;
        maeInput.value = paciente.mae;
        paiInput.value = paciente.pai;
    };
    async function carregarDadosPaciente() {
        try {
          const response = await fetch(`https://raphadev.onrender.com/pacientes/1`);
          const data = await response.json();
          
          dadosPaciente(data);
        } catch (error) {
          console.error(error);
          alert('Não foi possível carregar os dados do paciente');
        }
      }
      
      carregarDadosPaciente(); 
      
}    
    
    
    btnEditar = document.querySelector('#editar');
    btnEditar.addEventListener('click', function (e) {
        modalPaciente.style.display = 'flex';
        document.querySelector('.paceiteTitulotext').innerText = 'Editar dados do Paciente';
        document.querySelector('.send').style.display = 'flex';
        document.querySelector('#sendPacient').style.display ='none';
        document.querySelector('#editar').style.display = 'none';
        const divEdit = document.querySelector('.btnsend');
        
        divEdit.innerHTML = '<p onclick="closeModal()" class="cancel">Cancelar</p><button onclick="editarPac()" type="submit" id="saveEdit">Salvar alterações</button>' 
          
        inputs.forEach(inputs => {
            inputs.disabled = false;
            inputs.style.backgroundColor = '#FFFFFF';
        });
        selects.forEach(selects => {
            selects.disabled = false;
            selects.style.backgroundColor = '#FFFFFF';
        });
        labels.forEach(labels => {
            labels.style.display = 'flex';
        });
        spans.forEach(spans => {
            spans.style.display = 'flex';
        });
                
             
        })
        const dados = {
            cpf: cpfInput.value,
            nome: nameInputPaciente.value,
            dataDeNascimento: dataDeNascInput.value,
            email: emailInputPaciente.value,
            genero: generoInput.value,
            nacionalidade: nacionalidadeInput.value,
            naturalidade: naturalidadeInput.value,
            profissao: profissaoInput.value,
            escolaridade: escolaridadeInput.value,
            estadoCivil: estadoCivilInput.value,
            mae: maeInput.value,
            pai: paiInput.value
          }

        async function editarPac() {
            
               try {
                const dados = {
                  cpf: cpfInput.value,
                  nome: nameInputPaciente.value,
                  dataDeNascimento: dataDeNascInput.value,
                  email: emailInputPaciente.value,
                  genero: generoInput.value,
                  nacionalidade: nacionalidadeInput.value,
                  naturalidade: naturalidadeInput.value,
                  profissao: profissaoInput.value,
                  escolaridade: escolaridadeInput.value,
                  estadoCivil: estadoCivilInput.value,
                  mae: maeInput.value,
                  pai: paiInput.value
                };
                
                const response = await fetch(`https://raphadev.onrender.com/pacientes/1`, {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(dados)
                })
                
            
                if (!response.ok) {
                  throw new Error('Não foi possível atualizar os dados do paciente');
                }
                
                const data = await response.json();
                closeModal();
                console.log(data);
                alert('Dados do paciente atualizados com sucesso');
                document.location.reload()
              } catch (error) {
                console.error(error);
                alert(error.message);
              }
            

        }
      




function deletarPacient() {
    modDelete.style.display = 'block';
    document.querySelector('#text6').innerText = 'Essa ação é irreversivel';
    document.querySelector('#text7').innerText = 'Tem certeza que deseja continuar';
};
function abrirProntuario(){
    modalProntuario.style.display = 'flex';
    modalPaciente.style.display = 'none';
    centro.style.display = 'none';
    voltarPacientes.style.display = 'block';
}
const pacientesPorPagina = 6;
let paginaAtual = 1;
function exibirPacientes(pacientes) {
    const divPai = document.querySelector('.dadostabela');
    divPai.innerHTML = "";
    const startIndex = (paginaAtual - 1) * pacientesPorPagina;
    const endIndex = startIndex + pacientesPorPagina;
    pacientes.slice(startIndex, endIndex).forEach(paciente => {
        const divPaciente = document.createElement('tbody');
        divPaciente.classList.add('dadostabela');
        divPaciente.innerHTML = `
        <td>
        <td id="codigoUser">${paciente.id}</td>
        <td id="nomeUser1">${paciente.nome}</td>
        <td id="cpfUser">${paciente.cpf}</td>
        <td id="iconn">
        <i onclick="abrirProntuario()" class="fa-sharp fa-solid fa-clipboard-list allclip" id="clipboard"></i>
        <i onclick="viwerPaciente()" class="fa-sharp fa-solid fa-pen-line umpen" id="penLine"><img
                src="./SRC/assets/img/pen_line.svg" alt=""></i>
        <i onclick="deletarPacient()" class="fa-solid fa-trash-can" id="trash"></i>
        </td>
        `;
        divPai.appendChild(divPaciente);
    });
};
const medicoLogado = {
    id: 1
};
fetch('https://raphadev.onrender.com/pacientes')
    .then(response => response.json())
    .then(data => {
        fetch('https://raphadev.onrender.com/login')
            .then(response => response.json())
            .then(medicosData => {

                const idMedico = medicoLogado.id;
                const medico = medicosData.find(medico => medico.id === idMedico);
                const pacientes = data.filter(paciente => paciente.idMedico && paciente.idMedico === medico.id);
                // console.log(`Pacientes do médico ${medico.idMedico}:`, pacientes);
            });
    });
function exibirPaginacao(pacientes) {
    const numPaginas = Math.ceil(pacientes.length / pacientesPorPagina);
    const divPaginacao = document.getElementById('pagination');
    divPaginacao.innerHTML = "";
    for (let i = 1; i <= numPaginas; i++) {
        const botaoPagina = document.createElement('button');
        botaoPagina.innerText = i;
        if (i === paginaAtual) {
            botaoPagina.classList.add('active');
        };
        botaoPagina.addEventListener('click', () => {
            paginaAtual = i;
            exibirPacientes(pacientes);
            exibirPaginacao(pacientes);
        });
        divPaginacao.appendChild(botaoPagina);
    };
};
async function carregarPacientes() {
    const response = await fetch('https://raphadev.onrender.com/pacientes');
    const pacientes = await response.json();
    exibirPacientes(pacientes);
    exibirPaginacao(pacientes);
};
carregarPacientes();
const apiURL = 'https://raphadev.onrender.com/pacientes';
async function carregarDados() {
    const response = await fetch(apiURL);
    const pacientes = await response.json();
    btnDelete.setAttribute('data-id', pacientes[0].id);
};



async function deletarDados(id) {
    await fetch(apiURL + `/${id}`, {
        method: 'DELETE'
    });
};
btnNoDelete.addEventListener("click", function () {
    modDelete.style.display = 'none';
})
btnDelete.addEventListener('click', async () => {
    const idPaciente = btnDelete.dataset.id;
    await deletarDados(idPaciente);
    setTimeout(function () {
        document.location.reload();
    }, 1500);
});
carregarDados();
// to aqui
const searchInput = document.querySelector('.search');
const pacientesDiv = document.querySelector('.pacientes');
let timeoutId = null;
let acharPaciente = '';

function renderizarPacientes(pacientes) {
    pacientesDiv.innerHTML = '';
    pacientes.forEach(paciente => {
        if (paciente.nome.toLowerCase().startsWith(acharPaciente)) {
            const divPaciente = document.createElement('div');
            divPaciente.classList.add('paciente');
            const nomeElement = document.createElement('p');
            nomeElement.textContent = paciente.nome;
            divPaciente.appendChild(nomeElement);
            pacientesDiv.appendChild(divPaciente);
            pacientesDiv.style.display = 'block';

            //     divPaciente.addEventListener('click', () => {
            //criar caminho para pagina obs anda nao criei
            //         window.location.href = `https://seudominio.com/prontuario/${paciente.id}`;
            //       });
        }
    });
}
function handleSearchInput(event) {
    const searchTerm = event.target.value.trim().toLowerCase();
    const firstWord = searchTerm.split(' ')[0];
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        if (firstWord === acharPaciente) {
            return;
        }
        acharPaciente = firstWord;

        const endpoint = `https://raphadev.onrender.com/pacientes?search=${searchTerm}`;
        fetch(endpoint)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar pacientes!');
                }
                return response.json();
            })
            .then(data => {
                renderizarPacientes(data);
            })
            .catch(error => {
                console.error(error);
                pacientesDiv.innerHTML = '<p>Erro ao buscar pacientes!</p>';
            });
    }, 500);
}
searchInput.addEventListener('input', handleSearchInput);

const newSection = document.querySelector('.sectionHead')
const cancelModal = document.querySelector('#fecharModal');
const closeModalCreate = document.querySelector('.closeCreate');
const btnCriarSection = document.querySelector('.btnCreateSection');
const btnCriarfato = document.querySelector('.btnCreateFactor')
const modalSection = document.querySelector('.modalSection');
const voltarAoTopo = document.querySelector('.voltaraotopo');
const openSection = document.querySelector('.sectionHead');
const factorRel = document.querySelector('.fatoRel');
const filterAll = document.querySelector('.filtrar');
const cardSection = document.querySelector('.cardSection');
const cardSection2 = document.querySelector('.cardSection2');
const cardFactor = document.querySelector('.cardfatos');
const modalFato = document.querySelector('.modalfatorRelevante');
const modalCriarSection = document.querySelector('.modalSectionContent');
const abrirFatos = document.querySelector('.fatoRel');
const fecharSection = document.querySelector('#closeSection')
const cancelModalCriar = document.querySelector('#fecharModalCriar')

voltarPacientes.addEventListener('click', function(){
        centro.style.display = 'flex';
        modalProntuario.style.display = 'none';
        voltarPacientes.style.display = 'none';
        cardSection.style.display = 'none';
    cardFactor.style.display = 'none';
    cardSection2.style.display = 'none';
    filterAll.style.display = 'none';
    voltarAoTopo.style.display = 'none';
    modalFato.style.display = 'none';
    modalCriarSection.style.display ='none';
});
newSection.addEventListener('click', function(){
    modalSection.style.display = 'block';
    modalCriarSection.style.display = 'block';
    modalFato.style.display = 'none';
});
abrirFatos.addEventListener('click', function(){
    modalSection.style.display = 'block';
    modalCriarSection.style.display = 'none';
    modalFato.style.display = 'flex';
});
cancelModal.addEventListener('click', function(){
    modalSection.style.display ='none';
    modalCriarSection.style.display = 'none';
    modalFato.style.display ='none';
});
cancelModalCriar.addEventListener('click', function(){
    modalSection.style.display ='none';
    modalCriarSection.style.display = 'none';
    modalFato.style.display ='none';
});
closeModalCreate.addEventListener('click', function(){
    modalSection.style.display ='none';
    modalCriarSection.style.display = 'none';
    modalFato.style.display ='none';
});
fecharSection.addEventListener('click', function(){
    modalSection.style.display ='none';
    modalCriarSection.style.display = 'none';
    modalFato.style.display ='none';
});
btnCriarSection.addEventListener('click', function(){
    modalSection.style.display ='none';
    modalCriarSection.style.display ='none';
    modalFato.style.display ='none';
    cardSection.style.display = 'flex';
    cardFactor.style.display = 'flex';
    cardSection2.style.display = 'flex';
    filterAll.style.display = 'flex';
    voltarAoTopo.style.display = 'flex';
});
btnCriarfato.addEventListener('click', function(){
    modalSection.style.display ='none';
    modalCriarSection.style.display = 'none';
    cardSection.style.display = 'flex';
    cardFactor.style.display = 'flex';
    cardSection2.style.display = 'flex';
    filterAll.style.display = 'flex';
    voltarAoTopo.style.display = 'flex';
});

