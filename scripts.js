const input = document.querySelector(".input-lista");
const button = document.querySelector(".button-lista");
const listaCompleta = document.querySelector(".lista");

let minhaLista = [];
function pegarValorInput() {
  minhaLista.push(input.value);
  input.value = "";
  mostrarTarefa();
}

function mostrarTarefa() {
  let novaLi = "";

  minhaLista.forEach((item) => {
    novaLi =
      novaLi +
      `
      <li class="itens-lista">
        <img src="img/checked.png" alt="check" />
        <p>${item}</p>
        <img src="img/trash.png" alt="Lixo" />
      </li>
    `;
  });

  listaCompleta.innerHTML = novaLi;
}
button.addEventListener("click", pegarValorInput);
