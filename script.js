
var lampada = document.getElementById('luz');
var ligar = document.getElementById('ligar');
var desligar = document.getElementById('desligar');
var quebrar = document.getElementById('quebrar');


function acende() {
    lampada.src = 'lampada-acesa.jpg'
}
function apagar() {
    lampada.src = 'lampada-apagada.jpg'
}
function curto() {
    lampada.src = 'lampada-quebrada.jpg'
    
}

ligar.addEventListener('click', acende);
desligar.addEventListener('click', apagar);
quebrar.addEventListener('click', curto);