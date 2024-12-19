const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");

  // Alterna entre os temas
  if (currentTheme === "dark") {
    rootHtml.setAttribute("data-theme", "light");
  } else {
    rootHtml.setAttribute("data-theme", "dark");
  }

  // Altera os cursores de acordo com o tema
  updateCursor(currentTheme === "dark" ? "light" : "dark");

  // Altera os ícones do botão de alternância
  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon-stars");
}

function updateCursor(theme) {
  // Definindo cursores para o tema light e dark
  if (theme === "dark") {
    document.documentElement.style.setProperty(
      '--cursor-default',
      "url('/assets/images/cursor/arrow.cur'), default"
    );
    document.documentElement.style.setProperty(
      '--cursor-button',
      "url('/assets/images/cursor/hand.cur'), pointer"
    );
  } else {
    document.documentElement.style.setProperty(
      '--cursor-default',
      "url('/assets/images/cursor/arrowDark.cur'), default"
    );
    document.documentElement.style.setProperty(
      '--cursor-button',
      "url('/assets/images/cursor/handDark.cur'), pointer"
    );
  }
}

// Aplicando o cursor inicial ao carregar a página
updateCursor(rootHtml.getAttribute("data-theme") === "dark" ? "dark" : "light");

// Adicionando o evento para alternar o tema
toggleTheme.addEventListener("click", changeTheme);

// Aplicando o cursor nos elementos
accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");

    accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
  });
});

menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// Alterando o cursor para os elementos interativos
document.querySelectorAll("button, a, .btn").forEach(item => {
  item.style.cursor = "var(--cursor-button)";
});

// Alterando o cursor para o corpo e outros elementos
document.querySelectorAll("body").forEach(item => {
  item.style.cursor = "var(--cursor-default)";
});

// Garantindo que o cursor também muda sobre o #toggleTheme
toggleTheme.addEventListener("mouseenter", () => {
  toggleTheme.style.cursor = "var(--cursor-button)";
});

toggleTheme.addEventListener("mouseleave", () => {
  toggleTheme.style.cursor = "var(--cursor-default)";
});
