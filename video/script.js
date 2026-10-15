document.addEventListener("DOMContentLoaded", () => {
  // 1. FILTROS DE CATEGORÍA DE VIDEO
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
      } else if (filter === "reels") {
        document.querySelector('[data-group="reels"]').style.display = "block";
        document.querySelector('[data-group="cine"]').style.display = "none";
      } else if (filter === "cine") {
        document.querySelector('[data-group="reels"]').style.display = "none";
        document.querySelector('[data-group="cine"]').style.display = "block";
      } else if (filter === "color") {
        videoGroups.forEach(g => (g.style.display = "block"));
        videoItems.forEach(item => {
          const cat = item.getAttribute("data-category") || "";
          item.style.display = cat.includes("color") ? "flex" : "none";
        });
      }
    });
  });

  // 2. MODAL REPRODUCTOR DE VIDEO A PANTALLA COMPLETA
  const videoModal = document.getElementById("video-lightbox");
  const player = document.getElementById("lightbox-player");
  const caption = document.getElementById("video-lightbox-caption");
  const closeBtn = document.getElementById("video-lightbox-close");

  document.querySelectorAll("[data-video]").forEach(card => {
    card.addEventListener("click", () => {
      const videoSrc = card.getAttribute("data-video");
      if (videoSrc) {
        player.src = videoSrc;
        player.muted = false; // Sonido activado al abrir en modal
        player.play();
        caption.innerHTML = `<strong>${card.getAttribute("data-title")}</strong><br><span>${card.getAttribute("data-sub")}</span>`;
        videoModal.classList.add("active");
      }
    });
  });

  function closeVideoModal() {
    if (videoModal) videoModal.classList.remove("active");
    if (player) {
      player.pause();
      player.src = "";
    }
  }

  if (closeBtn) closeBtn.addEventListener("click", closeVideoModal);
  if (videoModal) {
    videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal) closeVideoModal();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeVideoModal();
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
