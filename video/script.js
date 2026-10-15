/**
 * GABRIEL EM | PORTAFOLIO VIDEÓGRAFO Y EDITOR
 * Script interactivo: Reproductor modal garantizado en móviles/desktop, filtros y transiciones
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

  // 2. FILTROS DE CATEGORÍA DE VIDEO
  const filterBtns = document.querySelectorAll(".filter-pill");
  const videoGroups = document.querySelectorAll(".video-group");
  const videoItems = document.querySelectorAll(".video-card-item");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      if (filter === "all") {
        videoGroups.forEach(g => (g.style.display = "block"));
        videoItems.forEach(item => (item.style.display = "flex"));
      } else {
        videoGroups.forEach(g => {
          const group = g.getAttribute("data-group");
          g.style.display = (group === filter) ? "block" : "none";
        });
        videoItems.forEach(item => {
          const cat = item.getAttribute("data-category") || "";
          item.style.display = (cat === filter || cat.includes(filter)) ? "flex" : "none";
        });
      }
    });
  });

  // 3. MODAL REPRODUCTOR DE VIDEO A PANTALLA COMPLETA
  const videoModal = document.getElementById("video-lightbox");
  const player = document.getElementById("lightbox-player");
  const caption = document.getElementById("video-lightbox-caption");
  const closeBtn = document.getElementById("video-lightbox-close");

  function openVideoModal(card) {
    const videoSrc = card.getAttribute("data-video");
    const title = card.getAttribute("data-title") || "Producción Audiovisual";
    const sub = card.getAttribute("data-sub") || "";

    if (videoSrc && videoModal && player) {
      player.src = videoSrc;
      player.currentTime = 0;
      player.muted = false; // Intentar audio encendido primero

      const playPromise = player.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Si el navegador bloquea autoplay con sonido, reproducir muteado para no fallar
          player.muted = true;
          player.play();
        });
      }

      if (caption) {
        caption.innerHTML = `<strong>${title}</strong>${sub ? `<br><span>${sub}</span>` : ""}`;
      }
      videoModal.classList.add("active");
      document.body.style.overflow = "hidden"; // Evita scroll de fondo
    }
  }

  function closeVideoModal() {
    if (videoModal) videoModal.classList.remove("active");
    document.body.style.overflow = ""; // Restaura scroll
    if (player) {
      player.pause();
      player.src = "";
    }
  }

  // Delegación de eventos en el contenedor principal: funciona 100% en móvil
  const container = document.querySelector(".portfolio-container");
  if (container) {
    container.addEventListener("click", (e) => {
      const card = e.target.closest("[data-video]");
      if (card) {
        e.preventDefault();
        openVideoModal(card);
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeVideoModal();
    });
  }

  if (videoModal) {
    videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal) closeVideoModal();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeVideoModal();
  });

  // 4. TRANSICIÓN CINEMÁTICA AL NAVEGAR HACIA OTRA PÁGINA
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
});
