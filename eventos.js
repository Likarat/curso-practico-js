const h1 = document.querySelector('h1');
const calculo1 = document.getElementById("calculo1");
const calculo2 = document.getElementById("calculo2");
const boton = document.getElementById("btncalcular")
const resul = document.getElementById("respuesta")
console.log ({ calculo1  , calculo2, boton});

function btn (){
let resultado = parseInt(calculo1.value) + parseInt(calculo2.value);
resul.innerText = 'el resultado de la suma de ' + calculo1.value + ' + ' + calculo2.value + ' es: ' + resultado;
console.log('el resultado de la suma de ' + calculo1.value + ' + ' + calculo2.value + ' es: ' + resultado);
}
