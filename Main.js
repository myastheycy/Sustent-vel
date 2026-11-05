const curiosidades = [
    "A pegada de carbono considera emissões de gases de efeito estufa associadas às atividades humanas.",
    "O plástico produzido a partir da cana-de-açúcar pode ter origem renovável, mas não é necessariamente biodegradável.",
    "Pilhas e baterias devem ser encaminhadas a pontos de coleta específicos.",
    "A economia circular busca aproveitar os materiais pelo maior tempo possível.",
    "A logística reversa permite que produtos e embalagens retornem ao ciclo produtivo.",
    "Consertar objetos e reutilizar materiais também são atitudes sustentáveis.",
    "Economizar água e energia ajuda a preservar os recursos naturais."
];

let indice = 0;

function novaCuriosidade() {
    indice = (indice + 1) % curiosidades.length;

    const texto = document.getElementById("curiosidade-texto");

    texto.style.opacity = "0";

    setTimeout(() => {
        texto.textContent = curiosidades[indice];
        texto.style.opacity = "1";
    }, 200);
}

document.addEventListener("DOMContentLoaded", () => {
    const texto = document.getElementById("curiosidade-texto");

    texto.style.transition = "opacity 0.3s ease";
});
