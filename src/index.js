import cipher from './cipher.js';

window.addEventListener("load", inicio, true);
//funcion botones
function inicio() {
  const cifrar = document.getElementById("cifrar");

  cifrar.addEventListener("click", function () {
    const texto = document.getElementById("crear").value;
    const desplazamiento = document.getElementById("desplazamiento").value;
    document.getElementById("clave").value = cipher.cifrar(desplazamiento, texto);
  }, true);
  const descifrar = document.getElementById("descifrar");
  descifrar.addEventListener("click", function () {
    const texto = document.getElementById("crear").value;
    const desplazamiento = document.getElementById("desplazamiento").value;
    document.getElementById("clave").value = cipher.descifrar(desplazamiento, texto);
  }, true);
}
