const navLinksEls = document.querySelectorAll(".nav-link");

navLinksEls.forEach((navLinksEl) => {
  navLinksEl.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    navLinksEl.classList.add("active");
  });
});
