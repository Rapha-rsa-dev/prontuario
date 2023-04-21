// async function listerUser(users) {
//     return fetch('http://localhost:3000/login', {
//       method: 'POST',
//       headers: {
  
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//       },
//       body: JSON.stringify(users),
//     });
//   }
  
  
//    async function listar() {
    
//     const nomeUser = nameInput.value;
//     const emailUser = emailInput1.value;
//     const senhaUser = passwordInput2.value;
    
   
  
//     const dadosUser = {
//       nomeUser,
//       emailUser,
//       senhaUser
  
//     };
    
  
//     await listerUser(dadosUser);
    
//   };






//   async function listerUser(users) {
//     return fetch('http://localhost:3000/login', {
//       method: 'POST',
//       headers: {
  
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//       },
//       body: JSON.stringify(users),
//     });
//   }
  
  
//    async function listar() {
    
//     const nomeUser = nameInput.value;
//     const emailUser = emailInput1.value;
//     const senhaUser = passwordInput2.value;
//     const validatePass = passwordInput3.value;
    
//     if (senhaUser !== validadePass) {
//       console.log("As senhas não são iguais!");
//       return false;
//     }
  
//     const dadosUser = {
//       nomeUser,
//       emailUser,
//       senhaUser
  
//     };
    
  
//     await listerUser(dadosUser);
   
    
//   };
  
//   finalizar.addEventListener('click', (e) => {
//     e.preventDefault();
//     if (listar()) {
//       console.log("Formulário enviado com sucesso!");
//     } else {
//       console.log("Por favor, corrija os erros no formulário.");
//     }
//   });


  
// finalizar.addEventListener('click', (e) => {
//     e.preventDefault();
//     if (listar()) {
//       modal.style.display = 'block';
//       modalEdit.innerHTML = '<p> Cadastro realizado com sucesso.</p>';
//       modal.addEventListener('click', fecharModal);

      
//       setTimeout(function () {
//         formCadastro.submit();
        
//       }, 2000)
//     } else {
//       console.log("Por favor, corrija os erros no formulário.");
//     }
//   });
// if (isValidPassword(passwordInput2.value, passwordInput3.value)) {
      
     
//     return;
    

//   } else {
//     modal.style.display = 'block';
//     modalEdit.innerHTML = '<p> Ops! As senhas precisam ser iguais.</p>';
//     modal.addEventListener('click', fecharModal);
    
    
//   }