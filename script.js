// 1. Referencias a los elementos
const html = document.documentElement;
const selectorColor = document.getElementById("selector-color");

// 2. Aplica un tema ("light" o "dark") y lo muestra en el selector
function aplicarTema(tema) {
  html.setAttribute("data-bs-theme", tema);
  selectorColor.value = tema;
}

// 3. Tema inicial: el guardado, o el del computador
const temaGuardado = localStorage.getItem("tema");
const prefiereOscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (temaGuardado) {
  aplicarTema(temaGuardado);
} else if (prefiereOscuro) {
  aplicarTema("dark");
} else {
  aplicarTema("light");
}

// 4. Cuando eliges "Claro" u "Oscuro" en el selector
selectorColor.addEventListener("change", function () {
  const temaNuevo = selectorColor.value;

  aplicarTema(temaNuevo);
  localStorage.setItem("tema", temaNuevo);
});