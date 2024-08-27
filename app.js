const Pre = ["a", "e", "i", "o", "u"];
const Post = ["ai", "enter", "imes", "ober", "ufat"];

function enigmaEnc() {
  let Texto = leerTexto("entrada");
  if (Texto == false) {
    return;
  }
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
  let Texto = leerTexto("entrada");
  if (Texto == false) {
    return;
  }
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
    .then((clipText) => (document.getElementById("entrada").value = clipText));
}

function copiar() {
  let Texto = document.getElementById("salida").value;
  navigator.clipboard.writeText(Texto);
}

function escribirTexto(IDelemento, Texto) {
  let elementoHTML = document.getElementById(IDelemento);
  elementoHTML.innerHTML = Texto;
}

function leerTexto(IDelemento) {
  let elementoHTML = document.getElementById(IDelemento).value;
  let PostTexto = elementoHTML.split("");
  let Cambio = false;
  let letra = "";
  for (let i = 0; i < elementoHTML.length; i++) {
    letra = PostTexto[i].charCodeAt(0);
    if ((letra < 97 || letra > 122) && letra != 32) {
      if (!Cambio) {
        alert(
          "Caracter invalido\n\nRecuerda que no se pueden utilizar letras mayusculas ni carateres especiales.\nSe transformaran las letras mayusculas en minusculas y se eliminaran caracteres especiales"
        );
        Cambio = true;
      }
      letra += 32;
      PostTexto[i] = String.fromCharCode(letra);
      if ((letra < 97 || letra > 122) && letra != 32) {
        PostTexto[i] = "";
      }
    }
  }
  document.getElementById("entrada").value = PostTexto.join("");
  if (Cambio) {
    return false;
  }
  return elementoHTML;
}
