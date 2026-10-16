/**
 * GABRIEL EM | PORTAFOLIO VIDEÓGRAFO Y EDITOR
 * Reproductor modal garantizado en móviles/desktop, filtros y transiciones
 */

// FUNCIONES GLOBALES PARA APERTURA Y CIERRE INMEDIATOS (INLINE Y DELEGADO)
window.openVideoModal = function (card) {
  if (!card) return;
  const videoSrc = card.getAttribute("data-video");
  const title = card.getAttribute("data-title") || "Producción Audiovisual";
  const sub = card.getAttribute("data-sub") || "";

  const videoModal = document.getElementById("video-lightbox");
  const player = document.getElementById("lightbox-player");
  const caption = document.getElementById("video-lightbox-caption");

  if (videoSrc && videoModal && player) {
    player.src = videoSrc;
    player.currentTime = 0;
    player.muted = false;

    videoModal.classList.add("active");
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    if (caption) {
      caption.innerHTML = `<strong>${title}</strong>${sub ? `<br><span>${sub}</span>` : ""}`;
    }

    const playPromise = player.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // En móviles, si el navegador bloquea audio inicial sin gesto, iniciar silenciado
        player.muted = true;
        player.play();
      });
    }
  }
};

window.closeVideoModal = function () {
  const videoModal = document.getElementById("video-lightbox");
  const player = document.getElementById("lightbox-player");
  if (videoModal) {
    videoModal.classList.remove("active");
  }
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
  if (player) {
    try {
      player.pause();
      player.src = "";
    } catch (e) {}
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. TELÓN DE TRANSICIÓN SUAVE ENTRE PÁGINAS & APERTURA DE OBTURADOR
  const curtain = document.getElementById("page-curtain");
  if (curtain) {
    curtain.classList.remove("active");
    curtain.style.pointerEvents = "none";
  }

  const shutterOverlay = document.getElementById("camera-shutter");
  if (shutterOverlay) {
    shutterOverlay.classList.remove("closing", "opening");
    shutterOverlay.classList.add("shutter-entrance");

    setTimeout(() => {
      shutterOverlay.classList.remove("shutter-entrance");
      shutterOverlay.style.pointerEvents = "none";
    }, 1800);
  }

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

  // 3. EVENT LISTENERS PARA CERRAR EL MODAL
  const videoModal = document.getElementById("video-lightbox");
  const closeBtn = document.getElementById("video-lightbox-close");

  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      window.closeVideoModal();
    });
  }

  if (videoModal) {
    videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal) {
        window.closeVideoModal();
      }
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      window.closeVideoModal();
    }
  });

  // 4. TRANSICIÓN CON OBTURADOR DE PALETAS AL NAVEGAR HACIA OTRA PÁGINA
  document.querySelectorAll(".page-transition-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const href = btn.getAttribute("href");
      if (href && href !== "#" && !href.startsWith("#")) {
        e.preventDefault();
        const shutter = document.getElementById("camera-shutter");
        if (shutter) {
          shutter.classList.remove("shutter-entrance", "opening");
          shutter.classList.add("closing");
        }
        if (curtain) {
          curtain.style.pointerEvents = "auto";
          curtain.classList.add("active");
        }
        setTimeout(() => {
          window.location.href = href;
        }, 620);
      }
    });
  });
});
