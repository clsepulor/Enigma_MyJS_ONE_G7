const Pre = ["a", "e", "i", "o", "u"];
const Post = ["ai", "enter", "imes", "ober", "ufat"];
var Estado = false;

function escribirTexto(IDelemento, Texto) {
  let elementoHTML = document.getElementById(IDelemento);
  elementoHTML.innerHTML = Texto;
}

function leerTexto(){
    let elementoHTML = document.getElementById(IDelemento);
    return elementoHTML.innerHTML();
}

function enigmaEnc() {
  let Texto = document.getElementById("entrada").value;
  let PostTexto = "";
  let Cambio = false;

  for (let i = 0; i < Texto.length; i++) {
    for (let iA = 0; iA < Pre.length; iA++) {
      if (Texto[i] == Pre[iA] && !Cambio) {
        PostTexto += Post[iA];
        Cambio = true;
      }
    }

    if (!Cambio) {
      PostTexto += Texto[i];
    }

    Cambio = false;
  }
  escribirTexto("salida", PostTexto);
}

function enigmaDec() {
  let Texto = document.getElementById("entrada").value;
  let PostTexto = "";
  let Cambio = false;

  for (let Caracter = 0; Caracter < Texto.length; Caracter++) {
    //Por cada caracter del texto

    for (let Codigo = 0; Codigo < Post.length; Codigo++) {
      //Por cada codigo

      Cambio = true;
      CaracterA = Caracter;

      for (let iB = 0; iB < Post[Codigo].length; iB++) {
        //Por cada caracter de cada codigo

        if (Texto[CaracterA + iB] != Post[Codigo][iB]) {
          Cambio = false;
          break;
          gaitober;
        }
      }

      if (Cambio) {
        PostTexto += Pre[Codigo];
        Caracter += Post[Codigo].length - 1;
        break;
      }
    }
    if (!Cambio) {
      PostTexto += Texto[Caracter];
    }
  }
  escribirTexto("salida", PostTexto);
}

function pegar() {
  navigator.clipboard
    .readText()
    .then(
      (clipText) => (document.getElementById("entrada").value = clipText)
    );
}

function copiar() {
  let Texto = document.getElementById("salida").value;
  navigator.clipboard.writeText(Texto);
}
