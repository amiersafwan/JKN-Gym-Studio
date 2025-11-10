window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("bg-black", "shadow");
  } else {
    navbar.classList.remove("bg-black", "shadow");
  }
});