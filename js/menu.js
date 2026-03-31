(function () {
  "use strict";

  function expandCategory(categoryEl) {
    if (!categoryEl) return;
    var header = categoryEl.querySelector(".menu-category__header");
    var content = categoryEl.querySelector(".menu-category__content");
    if (!header || !content) return;
    header.setAttribute("aria-expanded", "true");
    content.classList.add("open");
  }

  function expandFromHash() {
    var id = window.location.hash.replace(/^#/, "");
    if (!id) return;
    var el = document.getElementById(id);
    if (!el) return;
    if (el.classList.contains("menu-category")) {
      expandCategory(el);
    }
    requestAnimationFrame(function () {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function initMenuAccordion() {
    var headers = document.querySelectorAll("main .menu-category__header");

    headers.forEach(function (header) {
      header.addEventListener("click", function () {
        var isExpanded = header.getAttribute("aria-expanded") === "true";
        var content = header.nextElementSibling;

        // Toggle current section
        header.setAttribute("aria-expanded", String(!isExpanded));

        if (!isExpanded) {
          content.classList.add("open");
        } else {
          content.classList.remove("open");
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initMenuAccordion();
    expandFromHash();
  });

  window.addEventListener("hashchange", expandFromHash);
})();
