const h1 = document.querySelector('h1');
const p = document.querySelector ('p');
const parrafito = document.getElementsByClassName(".parrafito");
const pid = document.getElementById('#id');
const input = document.querySelector("input");

console.log(input.value);
console.log ({ h1 , p , parrafito, pid, input, });

h1.innerText = 'cambbiado' ; 
h1.setAttribute("pantal" , "552")
console.log(h1.getAttribute ('pantalla'))
h1.classList.add("consola")
h1.classList.remove("consola")
input.value= "123456789"
document.createElement('img	')