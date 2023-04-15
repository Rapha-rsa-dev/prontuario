const cadastreSe = document.querySelector ('#singIn');
const telaLogin = document.querySelector('#conteinerLogin');
const subscrever = document.querySelector('#subscribe');
const btncdastreSe  = document.querySelector('#cadastreSe');
const btnProsseguir = document.querySelector('#prosseguir');
const continueCadastro = document.querySelector('#continue');
const finalizar = document.querySelector('#prosseguir2');

btncdastreSe.addEventListener("click", cadastro);
btnProsseguir.addEventListener("click", next);
finalizar.addEventListener("click", close)


function cadastro (){
    cadastreSe.style.display = 'none';
   subscrever.style.display = 'flex';
};
function next (){
    subscrever.style.display = 'none';
    continueCadastro.style.display = 'flex';
};
function close (){
    continueCadastro.style.display = 'none';
    cadastreSe.style.display = 'flex';
}