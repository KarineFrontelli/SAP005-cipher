import cipher from './cipher.js';

let criptografe = document.getElementById("criptografe")

function botaoCriptar() {
  let mensagem1 = document.getElementById("msg1").value.toUpperCase();
  let offset = Number(document.getElementById("offset").value);

  let textoCifrado = cipher.encode(offset, mensagem1);
  document.getElementById("msg1").value = textoCifrado;
}
criptografe.addEventListener("click", botaoCriptar)



let decriptar = document.getElementById("decriptar")

function botaoDecriptar() {
  let mensagem2 = document.getElementById("msg2").value.toUpperCase();
  let offset = Number(document.getElementById("offset").value);

  let textoDecifrado = cipher.decode(offset, mensagem2);
  document.getElementById("msg2").value = textoDecifrado
}
decriptar.addEventListener("click", botaoDecriptar)
