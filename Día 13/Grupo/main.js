var evaluarLetra = document.getElementById("#calcular");

var input = document.input;

var asiertos = 6;

var espacio = document.getElementById("palabra");

var palabras = ["casa", "perro", "gato", "elefante"];

var palTapada = "";

var palabra = palabras[Math.floor(Math.random() * palabras.length)];

var palabraConGuiones = palabra.replace(/./g, "_ ");

var calcular = document.querySelector("#calcular");

var palabrasAcertadas = [];

String.prototype.replaceAt = function (index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};

for (let index = 0; index < palabra.length; index++) {
  palTapada += "_ ";
}
espacio.innerHTML = palTapada;

calcular.addEventListener("click", () => {
  const letra = document.getElementById("letra").value;

  for (const i in palabra) {
    if (letra == palabra[i]) {
      if (!palabrasAcertadas.includes(letra)) {
        palabraConGuiones = palabraConGuiones.replaceAt(i * 2, letra);
      } else {
        palabrasAcertadas.push(letra);
        alert("letra ya encontrada");
      }
    }
  }
  if (!palabra.includes(letra)) {
    asiertos--;
    document.getElementById("asierto").innerHTML =
      "aciertos restantes: " + asiertos;
  }

  espacio.innerHTML = palabraConGuiones;

  if (asiertos === 0) {
    calcular.disabled = calcular.disabled ? false : true;
  }
  if (!palabraConGuiones.includes("_")) {
    alert("Felisitacion, Ganaste");
  }
});
