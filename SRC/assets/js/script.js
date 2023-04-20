

const formulario = document.querySelector('.conteiner-login');
const cadastreSe = document.querySelector('#singIn');
const subscrever = document.querySelector('#subscribe');
const btncdastreSe = document.querySelector('#cadastreSe');
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
  } else {
    passwordInput.type = 'password';
    mostrarSenhaBtn.textContent = 'Mostrar';
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
 let isValidPassword = function isValidPassword(passwordInput2,passwordInput3){
        if(passwordInput2 === passwordInput3){
          return true;
        }
          
          return false;
          
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

  let contemMaiuscula = false;
  let contemEspecial = false;
  let especiais = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  for (let i = 0; i < senha.length; i++) {
    let caractere = senha.charAt(i);
    
    if (caractere >= 'A' && caractere <= 'Z') {
      contemMaiuscula = true;
    
    } else if (especiais.test(caractere)) {
      contemEspecial = true;
    }
  }
  if (!contemMaiuscula  || !contemEspecial) {
    return false;
  }

  return true;
}


formulario.addEventListener("submit", (event) => {
  event.preventDefault();
   
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

//tela cadastro
const formCadastro = document.querySelector('.conteiner-login2')
const nameInput = document.querySelector('#name1');
const emailInput1 = document.querySelector('#email1');
const btnProsseguir = document.querySelector('#prosseguir');
const passwordInput2 = document.querySelector('#senha2');
const passwordInput3 = document.querySelector('#senha3');
const mostrarSenhaBtn2 = document.querySelector('#ocultar2');
const mostrarSenhaBtn3 = document.querySelector('#ocultar3');
const finalizar = document.querySelector('#prosseguir2');
const requisito1 = document.querySelector('#requisito1');
const requisito2 = document.querySelector('#requisito2');
const requisito3 = document.querySelector('#requisito3');

// export default (formulario,formCadastro,nameInput,emailInput1,passwordInput2);


formCadastro.addEventListener('submit', (event) => {
  event.preventDefault();
 
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
  

   btnProsseguir.addEventListener('click', seguir)
  function seguir(){
    subscrever.style.display = 'none';
    continueCadastro.style.display = 'flex';
  }
        
    

    
    formCadastro.addEventListener('submit', event =>{
      event.preventDefault();

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
          
      
      if (isValidPassword (passwordInput2.value, passwordInput3.value)){
        modal.style.display = 'block';
        modalEdit.innerHTML = '<p> Cadastro realizado com sucesso.</p>'
        modal.addEventListener('click', fecharModal);
      formCadastro.submit()
      
      }else{
            modal.style.display = 'block';
            modalEdit.innerHTML = '<p> Ops! As senhas precisam ser iguais.</p>'
            modal.addEventListener('click', fecharModal);
            return;
        }
         
      
    })
    
})

 
    
  
passwordInput2.addEventListener('input', function () {
  const senha = passwordInput2.value;
  const temPeloMenos8Caracteres = senha.length >= 8;
  const temPeloMenosUmaMaiuscula = /[A-Z]/.test(senha);
  const temPeloMenosUmCaractere = /[!@#$%¨&*()_+-=][^0-9][^A-Z][^a-z]{1,}/.test(senha);

  


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

