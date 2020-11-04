import cipher from './cipher.js';

let criptografe = document.getElementById("criptografe")

function botaoCriptar() {
  let mensagem1 = document.getElementById("msg1").value;
  let offset = Number(document.getElementById("offset").value);

  let textoCifrado = cipher.encode(offset, mensagem1);
  document.getElementById("resultado1").innerHTML = textoCifrado
}
criptografe.addEventListener("click", botaoCriptar)



let descriptar = document.getElementById("descriptar")

function botaoDescriptar() {
  let mensagem2 = document.getElementById("msg2").value;
  let offset = Number(document.getElementById("offset").value);

  let textoDecifrado = cipher.decode(offset, mensagem2);
  document.getElementById("resultado2").innerHTML = textoDecifrado
}
descriptar.addEventListener("click", botaoDescriptar)
