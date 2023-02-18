const h1 = document.querySelector('h1');
const calculo1 = document.getElementById("calculo1");
const calculo2 = document.getElementById("calculo2");
const boton = document.getElementById("btncalcular")
const resul = document.getElementById("respuesta")
const form = document.querySelector('#formulario')

form.addEventListener('submit',btn);


//boton.addEventListener('click',btn);

function btn (event){
	event.preventDefault();
	let resultado = parseInt(calculo1.value) + parseInt(calculo2.value);
	resul.innerText = 'el resultado de la suma de ' + calculo1.value + ' + ' + calculo2.value + ' es: ' + resultado;
	console.log('el resultado de la suma de ' + calculo1.value + ' + ' + calculo2.value + ' es: ' + resultado);
}

