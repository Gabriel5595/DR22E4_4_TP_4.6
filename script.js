const frutas1 = ["laranja", "banana", "maçã"];
const frutas2 = ["melão", "melancia", "abacaxi"];

const todasAsFrutas = frutas1.concat(frutas2);
console.log(todasAsFrutas);

const div = document.getElementsByTagName("div")[0];
div.innerText = todasAsFrutas;