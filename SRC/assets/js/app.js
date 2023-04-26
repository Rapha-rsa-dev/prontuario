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
const formSend = document.querySelector('.sendForm')
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

const nomeUser = localStorage.getItem('nomeUser');
if (nomeUser) {
  fetch('https://raphadev.onrender.com/login')
    .then(response => response.json())
    .then(data => {
      const users = data.login ? data.login : data;
      const user = users.find(user => user.nomeUser === nomeUser);
      if (user) {
        document.querySelector('#userName').textContent = `${user.nomeUser}`;
      }
    });
}


addNewPaciente.addEventListener('click', addPaciente);
function addPaciente() {
    modalPaciente.style.display = 'flex';
    document.querySelector('.cabecalho').style.display = 'none';
    document.querySelector('.contentTable').style.display = 'none';
    document.querySelector('#back').style.backgroundColor = 'rgba(0,0,0,0.4)'

};
closeCancel.addEventListener('click', function(){
    modConfirm.style.display = "block";
})
fecharModalPaciente.addEventListener('click', function(){
    modConfirm.style.display = "block";
})

btnYes.addEventListener("click", function() {
    modConfirm.style.display = "none";
     location.reload();
  });
  btnNo.addEventListener("click", function() {
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
}

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
        estadoCivil, mae, pai

    };

    await newPacient(dadosPaciente);

};

btnSend.addEventListener('click', (e) => {

    e.preventDefault();

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
        }
    });

    nameInputPaciente.addEventListener('input', function () {


        let nomeTamanho = nameInputPaciente.value;
        let tem5Digitos = nomeTamanho.length >= 5;

        if (tem5Digitos) {
            erroNome.innerText = 'Nome';
            erroNome.style.color = '#4F4F4F';
            return;
        }

    })

    emailInputPaciente.addEventListener('input', function () {

        let emailValid = emailInputPaciente.value;
        let checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        if (checkEmail.test(emailValid)) {
            erroEmail.innerText = 'Email';
            erroEmail.style.color = '#4F4F4F';
            return;
        } else {
            erroEmail.innerText = 'Digite um Email valido';
            erroEmail.style.color = '#e90505';
            return
        }
    })
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
        }
    });
    generoInput.addEventListener('change', function(){
        if (generoInput.checkValidity()) {
            erroGenero.innerText = 'Sexo/Gênero';
            erroGenero.style.color = '#4F4F4F';
          } 
    })
    nacionalidadeInput.addEventListener('change', function(){
        if (nacionalidadeInput.checkValidity()) {
            erroNacionalidade.innerText = 'Nacionalidade';
            erroNacionalidade.style.color = '#4F4F4F';
          } 
    })
    naturalidadeInput.addEventListener('input', function () {

        let naturalTamanho = naturalidadeInput.value;
        let temUmaCidade = naturalTamanho.length >= 5;

        if (temUmaCidade) {
            erroNaturalidade.innerText = 'Naturalidade';
            erroNaturalidade.style.color = '#4F4F4F';
            return;
        }

    })
    profissaoInput.addEventListener('input', function () {

        let profissaoTamanho = profissaoInput.value;
        let temUmJob = profissaoTamanho.length >= 4;

        if (temUmJob) {
            erroProfissao.innerText = 'Profissão';
            erroProfissao.style.color = '#4F4F4F';
            return;
        }

    })
    escolaridadeInput.addEventListener('input', function () {

        let nivelescolar = escolaridadeInput.value;
        let tamanhoEscolar = nivelescolar.length >= 5;

        if (tamanhoEscolar) {
            erroEscolaridade.innerText = 'Escolaridade';
            erroEscolaridade.style.color = '#4F4F4F';
            return;
        }

    })
    estadoCivilInput.addEventListener('change', function(){
        if (estadoCivilInput.checkValidity()) {
            erroEstadoCivil.innerText = 'Estado Civil';
            erroEstadoCivil.style.color = '#4F4F4F';
          } 
    })
    maeInput.addEventListener('input', function () {

        let nomeDamae = maeInput.value;
        let tamanhoMae = nomeDamae.length >= 5;

        if (tamanhoMae) {
            erroMae.innerText = 'Mãe';
            erroMae.style.color = '#4F4F4F';
            return;
        }

    })
    paiInput.addEventListener('input', function () {

        let nomeDoPai = paiInput.value;
        let tamanhoPai = nomeDoPai.length >= 5;

        if (tamanhoPai) {
            erroPai.innerText = 'Pai';
            erroPai.style.color = '#4F4F4F';
            return;
        }

    })

    

    if (cpfInput.value === "") {
        erroCpf.innerText = 'Preencha o CPF';
        erroCpf.style.color = '#e90505';

    };

    if (nameInputPaciente.value === "") {
        erroNome.innerText = 'Preencha o nome ';
        erroNome.style.color = '#e90505';

    };
    if (dataDeNascInput.value === "") {
        erroData.innerText = 'Digite uma data com dd/mm/aaaa';
        erroData.style.color = '#e90505';
    };

    if (emailInputPaciente.value === "" || !ValidEmail(emailInputPaciente.value)) {
        erroEmail.innerText = 'Digite um email valido';
        erroEmail.style.color = '#e90505';
        
    };
    if(generoInput.value === ""){
        erroGenero.innerText = 'Selecione o gênero';
        erroGenero.style.color = '#e90505';
    }
    if(naturalidadeInput.value === ""){
        erroNaturalidade.innerText = 'Digite o local de Nascimento';
        erroNaturalidade.style.color = '#e90505';
        
    };
    if(nacionalidadeInput.value === ""){
        erroNacionalidade.innerText = 'Digite o país de nascimento';
        erroNacionalidade.style.color = '#e90505';
    };
    if(profissaoInput.value === ""){
        erroProfissao.innerText = 'Digite uma profissão';
        erroProfissao.style.color = '#e90505';
        
    };
    if(escolaridadeInput.value === ""){
        erroEscolaridade.innerText = 'Digite o nivel escolar';
        erroEscolaridade.style.color = '#e90505';
        
    };
    if(estadoCivilInput.value === ""){
        erroEstadoCivil.innerText = 'Selecione o estado civil';
        erroEstadoCivil.style.color = '#e90505';
       
    };
    if(maeInput.value === ""){
        erroMae.innerText = 'Digite um nome';
        erroMae.style.color = '#e90505';
       
    };
    if(paiInput.value === ""){
        erroPai.innerText = 'Digite um nome';
        erroPai.style.color = '#e90505';
        return;
    };
    
  
   btnConfirm.addEventListener('click', function(){
    modalSucess.style.display = 'none';
    document.querySelector('.cabecalho').style.display = 'block';
    document.querySelector('.contentTable').style.display = 'flex';
    document.querySelector('#back').style.backgroundColor = '#E5E5E5';
    location.reload()

   })


    if (cadastrar()) {
        modalPaciente.style.display = 'none';
        modalSucess.style.display = 'flex'
        document.querySelector('.cabecalho').style.display = 'block';
        document.querySelector('.contentTable').style.display = 'flex';
        document.querySelector('#back').style.backgroundColor = '#E5E5E5';
        setTimeout(function () {
            formSend.submit();
        }, 2000);
    } else {
        console.log("Por favor, corrija os erros no formulário.");
    }

});


