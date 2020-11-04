const tamanhoDoAlfabeto = 26;
let codigo1Letra = 65;

// Função criptar
const cipher = {
  encode: function encode(offset, string) {
    if (offset == null || !string){
      throw new TypeError("Erro");
    }else{
    let resultadoCifrado = ""
    for (let i = 0; i < string.length; i++) {
      const cifrar = string.charCodeAt(i);
      const codificado = ((cifrar - codigo1Letra + offset) % tamanhoDoAlfabeto) + codigo1Letra;
      resultadoCifrado += String.fromCharCode(codificado);
    }
    return resultadoCifrado
  }
  },
  //Função descriptar
  decode: function decode(offset, string) {
    if (offset == null || !string){
      throw new TypeError("Erro");
    }else{
      let resultadoCifrado2 = ""
      for (let i = 0; i < string.length; i++) {
        const decifrar = string.charCodeAt(i);
        const decodificado = ((decifrar + codigo1Letra - offset) % tamanhoDoAlfabeto) + codigo1Letra ;
        resultadoCifrado2 += String.fromCharCode(decodificado);
      }
      return resultadoCifrado2
    } 
  }
}
export default cipher;

