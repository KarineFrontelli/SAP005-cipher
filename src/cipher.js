const tamanhoDoAlfabeto = 26;
let codigo1Letra = 65;

const cipher = {
  encode: function encode(offset, string) {
    if (offset == null || !string) {
      throw new TypeError("Erro");
    } else {
      let resultadoCifrado = ""
      for (let i = 0; i < string.length; i++) {
        const cifrar = string.charCodeAt(i);
        let codificado = ((cifrar - codigo1Letra + offset) % tamanhoDoAlfabeto) + codigo1Letra;
        if (cifrar <= 64 || cifrar >= 91) {
          codificado = cifrar;
        }
        resultadoCifrado += String.fromCharCode(codificado);
      }
      return resultadoCifrado
    }
  },

  decode: function decode(offset, string) {
    if (offset == null || !string) {
      throw new TypeError("Erro");
    } else {
      let resultadoCifrado2 = ""
      for (let i = 0; i < string.length; i++) {
        const decifrar = string.charCodeAt(i);
        let decodificado = ((decifrar + codigo1Letra - offset) % tamanhoDoAlfabeto) + codigo1Letra;
        if (decifrar <= 64 || decifrar >= 91) {
          decodificado = decifrar;
        }
        resultadoCifrado2 += String.fromCharCode(decodificado);
      }
      return resultadoCifrado2
    }
  }
}
export default cipher;

