const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
event.preventDefault();

const peso = document.getElementById('peso').value;
const altura = document.getElementById('altura').value;

const imc = (peso / (altura * altura)).toFixed(2);

const value = document.getElementById('value');
let description = '';

value.classList.add('atencao');

document.getElementById('infos').classList.remove('hidden');

if (imc < 18.5) {
    description = 'Cuidado! Você está abaixo peso!';
} else if (imc <= 25) {
    description = 'Legal! Você está no seu peso ideal!';
    value.classList.remove('atencao');
    value.classList.add('ideal');
} else if ( imc  <= 30) { 
    description = 'Cuidado! Você está com sobrepeso!';
} else if ( imc <=35) {
    description = ' Muito cuidado! Você está com obesidade moderada!'
} else if ( imc <= 40) {
    description = 'Cuidado sua obesidade está severa!'
} else {
    description = 'Você está com obesidade morbida! Procure seu médico!'
}

value.textContent = imc;
document.getElementById('description').textContent = description;

});
