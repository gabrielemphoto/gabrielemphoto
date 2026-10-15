/**
 * GABRIEL EM | PORTAFOLIO FOTOGRÁFICO
 * Script interactivo: Lightbox modal garantizado para táctil/móvil, filtros y animaciones
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. GESTIÓN DEL TELÓN DE TRANSICIÓN (DESBLOQUEO INMEDIATO)
  const curtain = document.getElementById("page-curtain");
  if (curtain) {
    curtain.classList.remove("active");
    curtain.style.pointerEvents = "none";
  }

  // DESBLOQUEO ADICIONAL ANTE RETORNO DE CACHÉ DE NAVEGADOR (BFCache)
  window.addEventListener("pageshow", () => {
    if (curtain) {
      curtain.classList.remove("active");
      curtain.style.pointerEvents = "none";
    }
  });

  // 2. SISTEMA DE FILTRADO POR CATEGORÍA
  const filterBtns = document.querySelectorAll(".filter-pill");
  const photoCards = document.querySelectorAll(".photo-card");

  function applyFilter(category) {
    filterBtns.forEach(b => {
      if (b.getAttribute("data-filter") === category) {
        b.classList.add("active");
      } else {
        b.classList.remove("active");
      }
    });

    photoCards.forEach(card => {
      const cardCat = card.getAttribute("data-category");
      if (category === "all" || cardCat === category) {
        card.style.display = "";
        card.style.opacity = "1";
      } else {
        card.style.display = "none";
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");
      applyFilter(filter);
    });
  });

  // 3. ACTIVADORES DE FILTRO DESDE LA SECCIÓN DE SERVICIOS
  document.querySelectorAll(".filter-trigger").forEach(row => {
    row.addEventListener("click", () => {
      const target = row.getAttribute("data-target-filter");
      if (target) {
        applyFilter(target);
        const gallerySection = document.getElementById("galeria");
        if (gallerySection) {
          gallerySection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // 4. LIGHTBOX MODAL FULLSCREEN (EVENT DELEGATION 100% FIABLE EN MÓVIL)
  const lightbox = document.getElementById("photo-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close");

  function openLightbox(card) {
    const src = card.getAttribute("data-src");
    const title = card.getAttribute("data-title") || "Fotografía Gabriel EM";
    const sub = card.getAttribute("data-sub") || "";

    if (src && lightbox && lightboxImg) {
      lightboxImg.src = src;
      lightboxCaption.innerHTML = `<strong>${title}</strong>${sub ? `<br><span>${sub}</span>` : ""}`;
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden"; // Evita scroll de fondo
    }
  }

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove("active");
      document.body.style.overflow = ""; // Restaura scroll
      setTimeout(() => {
        if (!lightbox.classList.contains("active") && lightboxImg) {
          lightboxImg.src = "";
        }
      }, 300);
    }
  }

  // Delegación de eventos sobre la grilla: captura clics y toques táctiles perfectamente
  const galleryGrid = document.getElementById("gallery-grid");
  if (galleryGrid) {
    galleryGrid.addEventListener("click", (e) => {
      const card = e.target.closest(".photo-card");
      if (card) {
        e.preventDefault();
        openLightbox(card);
      }
    });
  }

  // Cerrar lightbox con el botón X
  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeLightbox();
    });
  }

  // Cerrar lightbox haciendo clic fuera del contenido
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  // Cerrar lightbox con tecla Escape
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLightbox();
    }
  });

  // 5. NAVEGACIÓN CINEMÁTICA CON RETARDO SEGURO
  document.querySelectorAll(".page-transition-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const href = btn.getAttribute("href");
      if (href && href !== "#" && !href.startsWith("#")) {
        e.preventDefault();
        if (curtain) {
          curtain.style.pointerEvents = "auto";
          curtain.classList.add("active");
        }
        setTimeout(() => {
          window.location.href = href;
        }, 280);
      }
    });
  });

  // 6. BOTÓN VOLVER ARRIBA (SMOOTH SCROLL)
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    backToTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
