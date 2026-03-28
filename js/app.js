(function () {
  "use strict";

  /** Edit these values for your business. */
  window.PHONGON = {
    CONTACT: {
      phone: "(610) 290-7045",
      phoneTel: "+16102907045",
      email: "hello@phongonpa.com",
      addressLine: "87 E Germantown Pike, Norristown, PA",
      addressFull: "87 E Germantown Pike, Norristown, PA 19401",
      mapsEmbedQuery: "87+E+Germantown+Pike+Norristown+PA+19401",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=87+E+Germantown+Pike+Norristown+PA+19401",
      orderLinks: {
        clover: "https://www.clover.com/online-ordering/pho-ngon-norristown-township",
        uber: "https://www.ubereats.com/store/pho-ngon-87-e-germantown-pk/vKHW9PNwWQmEprlGkTU2MQ?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas",
        doordash: "https://order.online/store/-26176450/?delivery=true&hideModal=true&utm_source=gfo&rwg_token=AFd1xnEvRZX7yjm6wQbV_fSuQY7-WZ6fsj6sL76iRkSGOWG-qPV02-_nvPTRWFKKYeLtq0Z4F1JWzq8m3EISY8pOOoBrKhehaA%3D%3D",
        grubhub: "https://www.grubhub.com/restaurant/pho-ngon-87-e-germantown-pike-east-norriton-township/10623304?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&delivery=true&rwg_token=AFd1xnGfZbmyM-VWJyvRhkGTtx_XpyDJxZCTca0U7pus280aXefic-N2Nq062Cehq9OxaTSOxZPJxC7zjkAmawtwLAHOlAl2Jw%3D%3D",
      },
      social: {
        facebook: "https://www.facebook.com/p/Pho-Ngon-61552489067284/",
        instagram: "https://www.instagram.com",
        yelp: "https://www.yelp.com/biz/pho-ngon-norristown",
      },
      reviewUrl:
        "https://www.google.com/search?q=pho+ngon+east+norriton",
    },
    /** 0 = Sun … 6 = Sat */
    OPERATING_HOURS: {
      0: { open: "10:30 AM", close: "9:00 PM", closed: false }, // Sunday
      1: { open: "11:00 AM", close: "9:00 PM", closed: false }, // Monday
      2: { open: "11:00 AM", close: "9:00 PM", closed: false }, // Tuesday
      3: { open: "11:00 AM", close: "9:00 PM", closed: false }, // Wednesday
      4: { open: "11:00 AM", close: "9:00 PM", closed: false }, // Thursday
      5: { open: "10:30 AM", close: "9:00 PM", closed: false }, // Friday
      6: { open: "10:30 AM", close: "9:00 PM", closed: false }, // Saturday
    },
    hoursSummary: "Mon - Thu 11:00 AM - 9:00 PM | Fri - Sun 10:30 AM - 9:00 PM",
    /** Shown in footer brand column (replaces address + phone there) */
    footerTagline: "Authentic Vietnamese flavors, simmered with care.",
  };

  function todayHoursLabel() {
    var d = new Date().getDay();
    var row = PHONGON.OPERATING_HOURS[d];
    if (!row || row.closed) return "Closed today";
    return "Open Today until " + row.close;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  var NAV_LINKS = [
    { href: "index.html", label: "Home" },
    { href: "full-menu.html", label: "Menu" },
    { href: "gallery.html", label: "Gallery" },
    { href: "contact.html", label: "Contact" },
  ];

  // Check if page exists, return valid pages only
  var VALID_NAV_LINKS = [
    { href: "index.html", label: "Home" },
    { href: "full-menu.html", label: "Full Menu" },
    { href: "contact.html", label: "Contact" },
  ];

  function navItemsHtml(activeFile) {
    return NAV_LINKS.map(function (link) {
      var isActive = activeFile === link.href.split("/").pop();
      var cls = "nav__link" + (isActive ? " nav__link--active" : "");
      return (
        '<a class="' +
        cls +
        '" href="' +
        escapeHtml(link.href) +
        '">' +
        escapeHtml(link.label.toUpperCase()) +
        "</a>"
      );
    }).join("");
  }

  function injectTopBar() {
    var el = document.getElementById("top-bar-root");
    if (!el) return;
    var c = PHONGON.CONTACT;
    el.innerHTML =
      '<div class="top-bar">' +
      '<div class="top-bar__contact">' +
      '<a class="top-bar__item" href="tel:' +
      escapeHtml(c.phoneTel) +
      '" aria-label="Phone">' +
      '<span class="top-bar__icon" aria-hidden="true">' +
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>' +
      '<span class="top-bar__text">' +
      escapeHtml(c.phone) +
      "</span></a>" +
      '<a class="top-bar__item" href="mailto:' +
      escapeHtml(c.email) +
      '" aria-label="Email">' +
      '<span class="top-bar__icon" aria-hidden="true">' +
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>' +
      '<span class="top-bar__text">' +
      escapeHtml(c.email) +
      "</span></a>" +
      '<span class="top-bar__item top-bar__item--static" aria-label="Address">' +
      '<span class="top-bar__icon" aria-hidden="true">' +
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span>' +
      '<span class="top-bar__text top-bar__text--address">' +
      escapeHtml(c.addressLine) +
      "</span></span>" +
      "</div>" +
      '<div class="top-bar__hours">' +
      '<span class="top-bar__icon" aria-hidden="true">' +
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>' +
      '<span class="top-bar__text">' +
      escapeHtml(todayHoursLabel()) +
      "</span>" +
      "</div>" +
      "</div>";
  }

  function injectHeader() {
    var el = document.getElementById("site-header");
    if (!el) return;
    var active = window.PHONGON_ACTIVE_PAGE || "index.html";
    var c = PHONGON.CONTACT;
    // Keep mobile nav outside <header>: backdrop-filter creates a containing
    // block, so position:fixed children would not cover the viewport.
    el.innerHTML =
      '<header class="header">' +
      '<div class="header__inner">' +
      '<a class="header__logo" href="index.html">' +
      '<img src="images/pho-ngon-logo-norristown.png" alt="Pho Ngon Vietnamese Restaurant Norristown PA" class="header__logo-img" />' +
      '</a>' +
      '<button type="button" class="header__menu-btn" aria-expanded="false" aria-controls="mobile-nav" id="mobile-nav-toggle">' +
      '<span class="header__menu-bar"></span><span class="header__menu-bar"></span><span class="header__menu-bar"></span>' +
      '<span class="visually-hidden">Open menu</span></button>' +
      '<nav class="nav nav--desktop" aria-label="Main">' +
      navItemsHtml(active) +
      "</nav>" +
      '<a class="btn btn--primary header__cta" href="order.html">Order Online</a>' +
      "</div>" +
      "</header>" +
      '<nav class="nav nav--mobile" id="mobile-nav" hidden aria-label="Mobile main">' +
      '<button type="button" class="nav--mobile__close" id="mobile-nav-close" aria-label="Close menu">' +
      '<span class="nav--mobile__close-x" aria-hidden="true"></span>' +
      "</button>" +
      '<div class="nav--mobile__inner">' +
      navItemsHtml(active) +
      '<a class="btn btn--primary nav--mobile__cta" href="order.html">Order Online</a>' +
      '<div class="nav--mobile__contact">' +
      '<a href="tel:' + escapeHtml(c.phoneTel) + '" class="nav--mobile__contact-item">' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' +
      '<span>' + escapeHtml(c.phone) + '</span>' +
      '</a>' +
      '<a href="' + escapeHtml(c.mapsUrl) + '" target="_blank" rel="noopener" class="nav--mobile__contact-item nav--mobile__contact-item--address">' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' +
      '<span>' + escapeHtml(c.addressLine) + '</span>' +
      '</a>' +
      '</div>' +
      '<div class="nav--mobile__social">' +
      '<a href="' + escapeHtml(c.social.facebook) + '" target="_blank" rel="noopener">FACEBOOK</a>' +
      '<a href="' + escapeHtml(c.social.instagram) + '" target="_blank" rel="noopener">INSTAGRAM</a>' +
      "</div>" +
      "</div>" +
      "</nav>";
  }

  function injectFooter() {
    var el = document.getElementById("site-footer");
    if (!el) return;
    var c = PHONGON.CONTACT;
    var y = new Date().getFullYear();
    var accIcon =
      '<svg class="menu-category__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' +
      '<line x1="12" y1="5" x2="12" y2="19"></line>' +
      '<line class="menu-category__icon-horizontal" x1="5" y1="12" x2="19" y2="12"></line>' +
      "</svg>";
    el.innerHTML =
      '<footer class="footer">' +
      '<div class="footer__grid">' +
      '<div class="footer__col footer__col--brand">' +
      '<a href="index.html" class="footer__brand-name">Pho Ngon</a>' +
      '<p class="footer__muted">Vietnamese Cuisine</p>' +
      '<p class="footer__tagline">' +
      escapeHtml(PHONGON.footerTagline) +
      "</p>" +
      '<p><a href="mailto:' +
      escapeHtml(c.email) +
      '">' +
      escapeHtml(c.email) +
      "</a></p></div>" +
      '<div class="footer__accordion menu-category">' +
      '<button type="button" class="menu-category__header footer-accordion__header" aria-expanded="false" aria-controls="footer-panel-nav">' +
      '<span class="menu-category__title footer-accordion__title">Navigate</span>' +
      accIcon +
      "</button>" +
      '<div class="menu-category__content footer-accordion__content" id="footer-panel-nav">' +
      '<ul class="footer__list">' +
      '<li><a href="about.html">About</a></li>' +
      '<li><a href="full-menu.html">Full Menu</a></li>' +
      '<li><a href="gallery.html">Gallery</a></li>' +
      "</ul></div></div>" +
      '<div class="footer__accordion menu-category">' +
      '<button type="button" class="menu-category__header footer-accordion__header" aria-expanded="false" aria-controls="footer-panel-order">' +
      '<span class="menu-category__title footer-accordion__title">Order Online</span>' +
      accIcon +
      "</button>" +
      '<div class="menu-category__content footer-accordion__content" id="footer-panel-order">' +
      '<ul class="footer__list">' +
      '<li><a href="' +
      escapeHtml(c.orderLinks.uber) +
      '" target="_blank" rel="noopener">Uber Eats</a></li>' +
      '<li><a href="' +
      escapeHtml(c.orderLinks.doordash) +
      '" target="_blank" rel="noopener">DoorDash</a></li>' +
      '<li><a href="' +
      escapeHtml(c.orderLinks.grubhub) +
      '" target="_blank" rel="noopener">Grubhub</a></li>' +
      "</ul></div></div>" +
      '<div class="footer__accordion menu-category">' +
      '<button type="button" class="menu-category__header footer-accordion__header" aria-expanded="false" aria-controls="footer-panel-follow">' +
      '<span class="menu-category__title footer-accordion__title">Follow Us</span>' +
      accIcon +
      "</button>" +
      '<div class="menu-category__content footer-accordion__content" id="footer-panel-follow">' +
      '<ul class="footer__list">' +
      '<li><a href="' +
      escapeHtml(c.social.facebook) +
      '" target="_blank" rel="noopener">Facebook</a></li>' +
      '<li><a href="' +
      escapeHtml(c.social.instagram) +
      '" target="_blank" rel="noopener">Instagram</a></li>' +
      '<li><a href="' +
      escapeHtml(c.social.yelp) +
      '" target="_blank" rel="noopener">Yelp</a></li>' +
      "</ul></div></div>" +
      "</div>" +
      '<p class="footer__copy">&copy; ' +
      y +
      " Pho Ngon. All rights reserved.</p>" +
      "</footer>";
  }

  function syncMobileNavTop() {
    var header = document.querySelector("#site-header .header");
    var panel = document.getElementById("mobile-nav");
    if (!header || !panel || panel.hidden) return;
    var bottom = header.getBoundingClientRect().bottom;
    panel.style.top = Math.max(0, Math.round(bottom)) + "px";
  }

  function initMobileNav() {
    var btn = document.getElementById("mobile-nav-toggle");
    var closeBtn = document.getElementById("mobile-nav-close");
    var panel = document.getElementById("mobile-nav");
    if (!btn || !panel) return;

    var closeTimer;

    function onViewportChange() {
      syncMobileNavTop();
    }

    function openMenu() {
      clearTimeout(closeTimer);
      panel.classList.remove("nav--mobile--closing");
      panel.hidden = false;
      btn.setAttribute("aria-expanded", "true");
      document.body.classList.add("nav-open");
      syncMobileNavTop();
      window.addEventListener("scroll", onViewportChange, { passive: true });
      window.addEventListener("resize", onViewportChange);
    }

    function closeMenu() {
      if (panel.hidden) return;
      var done = false;
      function finish() {
        if (done) return;
        done = true;
        clearTimeout(closeTimer);
        panel.removeEventListener("animationend", onAnimEnd);
        panel.classList.remove("nav--mobile--closing");
        panel.hidden = true;
        panel.style.removeProperty("top");
        btn.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
        window.removeEventListener("scroll", onViewportChange);
        window.removeEventListener("resize", onViewportChange);
      }
      function onAnimEnd(ev) {
        if (ev.target !== panel) return;
        finish();
      }
      panel.classList.add("nav--mobile--closing");
      panel.addEventListener("animationend", onAnimEnd);
      closeTimer = setTimeout(finish, 500);
    }

    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      if (open) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        closeMenu();
      });
    }

    panel.addEventListener("click", function (ev) {
      var t = ev.target.closest("a[href]");
      if (!t || !panel.contains(t)) return;
      closeMenu();
    });

    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape" && btn.getAttribute("aria-expanded") === "true") {
        closeMenu();
        btn.focus();
      }
    });
  }

  function initFooterAccordion() {
    document.querySelectorAll(".footer .menu-category__header").forEach(function (header) {
      header.addEventListener("click", function () {
        if (window.matchMedia("(min-width: 541px)").matches) return;
        var isExpanded = header.getAttribute("aria-expanded") === "true";
        var content = header.nextElementSibling;
        if (!content) return;
        header.setAttribute("aria-expanded", String(!isExpanded));
        if (!isExpanded) {
          content.classList.add("open");
        } else {
          content.classList.remove("open");
        }
      });
    });
  }

  function initScrollAnimations() {
    function onIntersect(entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }

    /*
     * rootMargin must stay "0" on the bottom. A positive % (e.g. 18% or 42%)
     * expands the intersection root below the viewport, so many stacked
     * elements are treated as intersecting at once when the first one appears.
     */
    var observerOpts = {
      threshold: 0,
      rootMargin: "0px",
    };

    var observer = new IntersectionObserver(onIntersect, observerOpts);

    document
      .querySelectorAll(".animate-on-scroll, .animate-fade")
      .forEach(function (el) {
        observer.observe(el);
      });
  }

  function animateCounter(element, target, decimals) {
    var start = 0;
    var duration = 2000;
    var increment = target / (duration / 16);
    var current = start;
    var hasDecimals = decimals > 0;

    var timer = setInterval(function () {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = hasDecimals
        ? current.toFixed(decimals)
        : Math.floor(current) + "+";
    }, 16);
  }

  function initStatsCounter() {
    var statsObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = "true";
            var target = parseFloat(entry.target.dataset.count);
            var decimals = entry.target.dataset.count.includes(".") ? 1 : 0;
            animateCounter(entry.target, target, decimals);
          }
        });
      },
      { threshold: 0.5 }
    );

    var statNumbers = document.querySelectorAll(".stat__num[data-count]");
    statNumbers.forEach(function (el) {
      statsObserver.observe(el);
    });
  }

  function initDishCarousel() {
    var wrap = document.querySelector(".dish-carousel__wrap");
    var el = document.getElementById("specialty-dishes-carousel");
    if (!wrap || !el) return;
    var prev = wrap.querySelector(".dish-carousel__btn--prev");
    var next = wrap.querySelector(".dish-carousel__btn--next");
    if (!prev || !next) return;

    var mq = window.matchMedia("(max-width: 540px)");

    function scrollPage(direction) {
      var step = el.clientWidth;
      if (!step) return;
      el.scrollBy({ left: direction * step, behavior: "smooth" });
    }

    function updateArrows() {
      if (!mq.matches) {
        prev.disabled = false;
        next.disabled = false;
        return;
      }
      var maxScroll = el.scrollWidth - el.clientWidth;
      var left = el.scrollLeft;
      prev.disabled = left <= 0.5;
      next.disabled = left >= maxScroll - 0.5;
    }

    prev.addEventListener("click", function () {
      scrollPage(-1);
    });
    next.addEventListener("click", function () {
      scrollPage(1);
    });

    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", updateArrows);
    } else if (typeof mq.addListener === "function") {
      mq.addListener(updateArrows);
    }

    updateArrows();
  }

  document.addEventListener("DOMContentLoaded", function () {
    injectTopBar();
    injectHeader();
    injectFooter();
    initMobileNav();
    initFooterAccordion();
    initScrollAnimations();
    initStatsCounter();
    initDishCarousel();
  });
})();
