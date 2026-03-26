(function () {
  "use strict";

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
  });
})();
