const handleScrollButton = () => {
  // Déclaration des variables
  const scrollBtn = document.querySelector(".scrollBtn");
  const progressbar = document.querySelector(".progressbar");

  // Gestion d'apparition du bouton de scroll
  if (window.scrollY > 100) {
    scrollBtn.style.transform = "translateY(0)";
  } else {
    scrollBtn.style.transform = "translateY(110px)";
  }

  // Gestion de l'événement click sur le bouton de scroll
  scrollBtn.addEventListener("click", () => {
    scrollTo(0, 0);
  });

  // Gestion de l'événement scroll sur la fenêtre
  let scrollValue =
    ((window.scrollY + window.innerHeight) / document.body.offsetHeight) * 100;
  progressbar.style.backgroundImage = `conic-gradient(rgb(0, 140, 255) ${scrollValue}%, rgb(239, 239, 239) ${scrollValue}%)`;
};

window.onscroll = handleScrollButton;
window.onload = handleScrollButton;
window.onresize = handleScrollButton;
