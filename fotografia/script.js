document.addEventListener("DOMContentLoaded", () => {
  // 1. FILTROS DE CATEGORÍA
  const filterBtns = document.querySelectorAll(".filter-pill");
  const photoCards = document.querySelectorAll(".photo-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      photoCards.forEach(card => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // 2. LIGHTBOX MODAL PARA FOTOGRAFÍAS
  const lightbox = document.getElementById("photo-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close");

  photoCards.forEach(card => {
    card.addEventListener("click", () => {
      const src = card.getAttribute("data-src");
      if (src) {
        lightboxImg.src = src;
        lightboxCaption.innerHTML = `<strong>${card.getAttribute("data-title")}</strong><br><span>${card.getAttribute("data-sub")}</span>`;
        lightbox.classList.add("active");
      }
    });
  });

  function closeLightbox() {
    if (lightbox) lightbox.classList.remove("active");
  }

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  // 3. TRANSICIÓN CINEMÁTICA AL NAVEGAR HACIA OTRA PÁGINA
  const curtain = document.getElementById("page-curtain");
  document.querySelectorAll(".page-transition-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const href = btn.getAttribute("href");
      if (href && href !== "#") {
        e.preventDefault();
        if (curtain) curtain.classList.add("active");
        setTimeout(() => {
          window.location.href = href;
        }, 320);
      }
    });
  });
});
