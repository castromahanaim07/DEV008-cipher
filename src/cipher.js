const cipher = {
  encode: function (desplazamiento,texto) {
    if (!texto.length || !desplazamiento) {
      throw new TypeError()
    }
    texto = texto.toUpperCase()
    let resultado = "";
    const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (texto) {
      for (let i = 0; i < texto.length; i++) {
        const posicion = (abecedario.indexOf(texto[i]) + Number(desplazamiento)) % 26

        resultado += abecedario[posicion];

      }
      return resultado;
    }
  },
  decode: function (desplazamiento,texto) {
    if (!texto.length || !desplazamiento) {
      throw new TypeError()
    }
    
    let resultado = "";
    const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


    if (texto) {
      for (let i = 0; i < texto.length; i++) {
        let posicion = ((abecedario.indexOf(texto[i]) - Number(desplazamiento)) % 26);
        if (posicion < 0) {
          posicion = 26 + posicion

        }
        resultado += abecedario[posicion];
      }
      return resultado;
    }
  },
};

export default cipher;