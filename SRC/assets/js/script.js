const formulario = document.querySelector('.sing')
const cadastreSe = document.querySelector('#singIn');
const telaLogin = document.querySelector('#conteinerLogin');
const subscrever = document.querySelector('#subscribe');
const btncdastreSe = document.querySelector('#cadastreSe');
const btnProsseguir = document.querySelector('#prosseguir');
const continueCadastro = document.querySelector('#continue');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#senha');
const modal = document.querySelector('#modal');
const modalEdit = document.querySelector('#editModal')
const mostrarSenhaBtn = document.querySelector('#ocultar');

mostrarSenhaBtn.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    mostrarSenhaBtn.textContent = 'Ocultar';
    // mostrarSenhaBtn.setAttribute("src", '/src/assets/img/eyeVisivel.png')
  } else {
    passwordInput.type = 'password';
    mostrarSenhaBtn.textContent = 'Mostrar';
    // mostrarSenhaBtn.setAttribute("src", '/src/assets/img/eyeClose.png')
  }
});


btncdastreSe.addEventListener("click", cadastro);

function cadastro() {
  cadastreSe.style.display = 'none';
  subscrever.style.display = 'flex';
};


let fecharModal = function fecharModal() {
  modal.style.display = 'none';
}
let isValidEmail = function isValidEmail(email) {

  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  );
  if (emailRegex.test(email)) {
    return true;
  };
  return false;
};
let validarSenha = function validarSenha(senha) {

  if (senha.length < 8) {
    return false;
  }

  let contemMinuscula = false;
  let contemMaiuscula = false;
  let contemEspecial = false;
  let especiais = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  for (let i = 0; i < senha.length; i++) {
    let caractere = senha.charAt(i);
    if (caractere >= 'a' && caractere <= 'z') {
      contemMinuscula = true;
    } else if (caractere >= 'A' && caractere <= 'Z') {
      contemMaiuscula = true;
    
    } else if (especiais.test(caractere)) {
      contemEspecial = true;
    }
  }
  if (!contemMinuscula || !contemMaiuscula  || !contemEspecial) {
    return false;
  }

  return true;
}


formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(formulario);
  const data = Object.fromEntries(formData);

  fetch("http://localhost:3000/login", {
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
     
       
    },
    body: JSON.stringify(data)
  }).then(Response => Response.json())
  .then(data => console.log(data))
  .catch(error => console.error())
console.log(formData)

// let listaUser = JSON.parse('https:/localhost:3000/log' || '[]' )

const addLog = async () => {
  const login = {
    
    "Email": document.getElementById('email').value,
    "Senhar": document.getElementById('senha').value,
    
  }
  addLog = JSON.parse(login || '[]')

  await formData(login)
}


   
  if (emailInput.value === "" || !isValidEmail(emailInput.value)) {
    modal.style.display = 'block';
    modalEdit.innerHTML = '<p> Ops! Digite um e-mail valido.</p>'
    modal.addEventListener('click', fecharModal);
    return;

  }
  if (!validarSenha(passwordInput.value, 8)) {
    modal.style.display = 'block';
    modalEdit.innerHTML = '<p> Ops! A sua senha deve conter no minimo 8 digitos, um caracter especial e uma letra maiúscula.</p>'
    modal.addEventListener('click', fecharModal);
    return;
  }



  formulario.submit();
});

const formCadastro = document.querySelector('#form1');
const nameInput = document.querySelector('#name1');
const emailInput1 = document.querySelector('#email1');


formCadastro.addEventListener('submit', (e) => {
  e.preventDefault();
 
 

  if (nameInput.value === "") {
    modal.style.display = 'block';
    modalEdit.innerHTML = '<p> Ops! Digite seu nome.</p>'
    modal.addEventListener('click', fecharModal);

    return;
  }

  if (emailInput1.value === "" || !isValidEmail(emailInput1.value)) {
    modal.style.display = 'block';
    modalEdit.innerHTML = '<p> Ops! Digite um e-mail valido.</p>'
    modal.addEventListener('click', fecharModal);
    return;
  }




  btnProsseguir.addEventListener("click", next);
  function next() {
    subscrever.style.display = 'none';
    continueCadastro.style.display = 'flex';
    formCadastro.submit
  }
  
    
  

})

const formEnviar = document.querySelector('#form2');
const passwordInput2 = document.querySelector('#senha2');
const passwordInput3 = document.querySelector('#senha3');
const mostrarSenhaBtn2 = document.querySelector('#ocultar2');
const mostrarSenhaBtn3 = document.querySelector('#ocultar3');
const finalizar = document.querySelector('#prosseguir2');
const requisito1 = document.querySelector('#requisito1');
const requisito2 = document.querySelector('#requisito2');
const requisito3 = document.querySelector('#requisito3');

passwordInput2.addEventListener('input', function () {
  const senha = passwordInput2.value;
  const temPeloMenos8Caracteres = senha.length >= 8;
  const temPeloMenosUmaMaiuscula = /[A-Z]/.test(senha);
  const temPeloMenosUmCaractere = /[!@#*$%¨&().+-_^~:]/.test(senha);

  if (temPeloMenos8Caracteres) {
    requisito1.style.color = 'green';
  } else {
    requisito1.style.color = 'red';
  }

  if (temPeloMenosUmaMaiuscula) {
    requisito3.style.color = 'green';
  } else {
    requisito3.style.color = 'red';
  }

  if (temPeloMenosUmCaractere) {
    requisito2.style.color = 'green';
  } else {
    requisito2.style.color = 'red';
  }
});


mostrarSenhaBtn2.addEventListener('click', () => {
  if (passwordInput2.type === 'password') {
    passwordInput2.type = 'text';
    mostrarSenhaBtn2.textContent = 'Ocultar';
    // mostrarSenhaBtn2.setAttribute("src", "/src/assets/img/eyeVisivel.png")
  } else {
    passwordInput2.type = 'password';
    mostrarSenhaBtn2.textContent = 'Mostrar';
    //mostrarSenhaBtn2.setAttribute("src", "/src/assets/img/eyeClose.png")
  }
});
mostrarSenhaBtn3.addEventListener('click', () => {
  if (passwordInput3.type === 'password') {
    passwordInput3.type = 'text';
    mostrarSenhaBtn3.textContent = 'Ocultar';
   // mostrarSenhaBtn3.setAttribute("src", "/src/assets/img/eyeVisivel.png")
  } else {
    passwordInput3.type = 'password';
    mostrarSenhaBtn3.textContent = 'Mostrar';
   // mostrarSenhaBtn3.setAttribute("src", "/src/assets/img/eyeClose.png")
  }
});

formEnviar.addEventListener('submit', (e) => {
  e.preventDefault();


  if (!validarSenha(passwordInput2.value, 8)) {
    modal.style.display = 'block';
    modalEdit.innerHTML = '<p> Ops! A sua senha deve conter no minimo 8 digitos, um caracter especial e uma letra maiúscula.</p>'
    modal.addEventListener('click', fecharModal);
    return;
  }
  if (!validarSenha(passwordInput3.value, 8)) {
    modal.style.display = 'block';
    modalEdit.innerHTML = '<p> Ops! Repita a sua senha.</p>'
    modal.addEventListener('click', fecharModal);
    return;
  }


  finalizar.addEventListener("click",  () => {

    if (passwordInput2.value === passwordInput3.value) {

      return true;
    }
     
      
   
  })
  
  
   finalizar.addEventListener('click', close);
  function close() {
    if(passwordInput2.value != passwordInput3.value){
      modal.style.display = 'block';
      modalEdit.innerHTML = '<p> Ops! As senhas devem ser iguais, digite novamente.</p>'
      modal.addEventListener('click', fecharModal);
      return;
    }else{
   
     formEnviar.submit()
    }

    
  }
  

})








