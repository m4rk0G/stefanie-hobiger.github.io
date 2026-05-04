document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll(".offer-category").forEach((block) => {
    const button = block.querySelector(".category-toggle");
    if (!button) return;

    button.addEventListener("click", () => {
      const willOpen = !block.classList.contains("is-open");

      document.querySelectorAll(".offer-category.is-open").forEach((openBlock) => {
        openBlock.classList.remove("is-open");
        const openButton = openBlock.querySelector(".category-toggle");
        if (openButton) openButton.setAttribute("aria-expanded", "false");
      });

      if (willOpen) {
        block.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
});
