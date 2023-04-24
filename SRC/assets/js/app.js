const addNewPaciente = document.querySelector('.newPacientAdd');
const modalPaciente = document.querySelector('.modal-paciente');
const fecharModalPaciente = document.querySelector('#closeModal');


addNewPaciente.addEventListener('click', addPaciente);
fecharModalPaciente.addEventListener('click', closeModal);

function addPaciente(){
    modalPaciente.style.display = 'flex';
};
function closeModal(){
    modalPaciente.style.display = 'none';
};



    
  