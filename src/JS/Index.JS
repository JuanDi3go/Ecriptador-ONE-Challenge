function EncriptarMensaje() {
  const mensajeIngresado = document.getElementById("Mensaje").value;

  let mensajeEcriptado = mensajeIngresado.replace("e", "enter");
  mensajeEcriptado = mensajeEcriptado.replace("i", "imes");
  mensajeEcriptado = mensajeEcriptado.replace("a", "ai");
  mensajeEcriptado = mensajeEcriptado.replace("o", "ober");
  mensajeEcriptado = mensajeEcriptado.replace("u", "ufat");

  let insertarMensaje = document.getElementsByClassName("container");

  insertarMensaje[0].innerHTML = `<p class="mensajeResponse"> ${mensajeEcriptado} </p> <button class="boton botonResultado" onclick="CopiarMensajeS()" >Copiar</button>`;
}

function DesencriptarMensaje() {
  const mensajeIngresado = document.getElementById("Mensaje").value;

  let mensajeEcriptado = mensajeIngresado.replace("ufat", "u");
  mensajeEcriptado = mensajeEcriptado.replace("ober", "o");
  mensajeEcriptado = mensajeEcriptado.replace("ai", "a");
  mensajeEcriptado = mensajeEcriptado.replace("imes", "i");
  mensajeEcriptado = mensajeEcriptado.replace("enter", "e");

  let insertarMensaje = document.getElementsByClassName("container");

  insertarMensaje[0].innerHTML = `<p class="mensajeResponse"> ${mensajeEcriptado} </p> <button class="boton botonResultado" onclick="CopiarMensajeS()" >Copiar</button>`;
}

function CopiarMensajeS() {
  const mensajeResult =
    document.getElementsByClassName("mensajeResponse")[0].innerHTML;

  navigator.clipboard.writeText(mensajeResult);
}
