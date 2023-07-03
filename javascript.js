function toggleScrollToTop() {
  const scrollToTopButton = document.querySelector(".scroll-to-top");
  if (window.scrollY > 300) {
    scrollToTopButton.classList.add("active");
  } else {
    scrollToTopButton.classList.remove("active");
  }
}

// Funzione per animare lo scroll verso l'alto
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Aggiungiamo un event listener per lo scroll della pagina
window.addEventListener("scroll", toggleScrollToTop);

// Aggiungiamo un event listener per il click sul pulsante "scroll-to-top"
const scrollToTopButton = document.querySelector(".scroll-to-top");
scrollToTopButton.addEventListener("click", scrollToTop);

