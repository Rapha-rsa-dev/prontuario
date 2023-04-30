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
const sairPopup = document.querySelector('#arrow-down')
const modalSair = document.querySelector('#popup');
const sair = document.querySelector("#sair")


sairPopup.addEventListener("click", e => {
    modalSair.style.display = 'flex';
})
modalSair.addEventListener('click', function (event) {

    if (event.target === modalSair) {
        modalSair.style.display = 'none';
    }
});
sairPopup.addEventListener("click", e => {
    modalSair.style.display = 'flex';
})

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
                    console.log(login)
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
                console.log(nomeUser)
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
function viwerPaciente() {

    //ainda vou fazer
};
function editarPaciente() {
    modalPaciente.style.display = 'flex';
    document.querySelector('.paceiteTitulotext').innerText = 'Dados do Paciente';
    document.querySelector('.send').style.display = 'none';
    document.querySelector('#editar').style.display = 'block';
    const labels = document.querySelectorAll('label');
    const spans = document.querySelectorAll('span');
    const inputs = document.querySelectorAll('input');
    const selects = document.querySelectorAll('select');
        
 
    for (let i = 0; i < labels.length; i++) {
        labels[i].remove();
    }
    for (let i = 0; i < spans.length; i++) {
        spans[i].remove();
    }
    inputs.forEach(input => {
        input.disabled = true;
      });
      inputs.forEach(input => {
        input.style.backgroundColor = '#BDBDBD' ;
      });
      selects.forEach(select => {
        select.disabled = true;
      });
      selects.forEach(select => {
        select.style.backgroundColor = '#BDBDBD' ;
      });
          
};
const btnEditar = document.querySelector('#editar');
btnEditar.addEventListener('click', function (e) {
    modalPaciente.style.display = 'flex';
    document.querySelector('.paceiteTitulotext').innerText = 'Editar dados do Paciente';
    document.querySelector('.send').style.display = 'flex';
    btnSend.innerText = 'Salvar alterações';
    document.querySelector('#editar').style.display = 'flex';
    
});
function deletarPacient() {
    modDelete.style.display = 'block';
    document.querySelector('#text6').innerText = 'Essa ação é irreversivel';
    document.querySelector('#text7').innerText = 'Tem certeza que deseja continuar';
};
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
        <i onclick="viwerPaciente()" class="fa-sharp fa-solid fa-clipboard-list" id="clipboard"></i>
        <i onclick="editarPaciente()" class="fa-sharp fa-solid fa-pen-line" id="penLine"><img
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
                console.log(`Pacientes do médico ${medico.idMedico}:`, pacientes);
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
