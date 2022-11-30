const verificarNaci = (nacionalid) => {
  nacionalidade = prompt("Qual sua nacionalidade");
  verificarNacional = nacionalidade.toLowerCase();
  if (
    verificarNacional === "brasileira" ||
    verificarNacional === "argentina" ||
    verificarNacional === "uruguai" ||
    verificarNacional === "chilena" ||
    verificarNacional === "colombiana" ||
    verificarNacional === "japonesa"
  ) {
    console.log(
      "A sua nacionalidade é ",
      verificarNacional[0].toUpperCase() + verificarNacional.substring(1) + ".")}
    else {console.log("Nacionalidade não encontrada!")}
}

verificarNaci()