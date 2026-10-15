document.addEventListener("DOMContentLoaded", () => {
  const typewriterEl = document.getElementById("typewriter");
  const loadingBar = document.querySelector(".loading-bar");
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");
  const mainHeader = document.getElementById("main-header");
  const body = document.body;

  let introFinished = false;
  let typeTimeout = null;
  let barInterval = null;

  function initInteractions() {
    // 1. Interacción en los Reels de video: clic para mutear / desmutear
    document.querySelectorAll(".reel-card").forEach(card => {
      const video = card.querySelector("video");
      if (!video) return;

      card.addEventListener("click", () => {
        video.muted = !video.muted;
        const dot = card.querySelector(".reel-dot");
        if (dot) {
          dot.style.background = video.muted ? "#ff3b30" : "#34c759";
          dot.style.boxShadow = video.muted ? "0 0 6px #ff3b30" : "0 0 8px #34c759";
        }
      });
    });

    // 2. Timecode animado para DaVinci Resolve a 24 FPS reales
    const tcElement = document.getElementById("davinci-tc");
    if (tcElement) {
      let frame = 12;
      let sec = 0;
      setInterval(() => {
        frame++;
        if (frame >= 24) {
          frame = 0;
          sec++;
          if (sec >= 20) {
            sec = 0;
          }
        }
        const sStr = String(sec).padStart(2, "0");
        const fStr = String(frame).padStart(2, "0");
        tcElement.textContent = `01:00:${sStr}:${fStr}`;
      }, 1000 / 24);
    }

    // 3. Transición cinemática fluida hacia las páginas de portafolio
    const curtain = document.getElementById("page-curtain");
    document.querySelectorAll(".page-transition-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const href = btn.getAttribute("href");
        if (href && href !== "#" && href !== "") {
          e.preventDefault();
          if (curtain) curtain.classList.add("active");
          setTimeout(() => {
            window.location.href = href;
          }, 320);
        }
      });
    });
  }

  // SI YA SE VIO LA INTRO EN ESTA SESIÓN: OMITIR COMPLETAMENTE
  if (sessionStorage.getItem("introSeen") === "true") {
    introFinished = true;
    if (loadingScreen) loadingScreen.style.display = "none";
    if (mainContent) {
      mainContent.classList.add("visible");
      mainContent.style.opacity = "1";
      mainContent.style.visibility = "visible";
    }
    if (mainHeader) {
      mainHeader.classList.add("visible");
      mainHeader.style.opacity = "1";
      mainHeader.style.visibility = "visible";
    }
    body.style.overflow = "auto";
    initInteractions();
    return;
  }

  // FUNCIÓN PARA REVELAR CONTENIDO Y REGISTRAR EN SESSIONSTORAGE
  function revealContentImmediately() {
    if (introFinished) return;
    introFinished = true;
    sessionStorage.setItem("introSeen", "true");
    if (typeTimeout) clearTimeout(typeTimeout);
    if (barInterval) clearInterval(barInterval);

    if (loadingScreen) {
      loadingScreen.style.opacity = "0";
      loadingScreen.style.pointerEvents = "none";
    }
    setTimeout(() => {
      if (loadingScreen) loadingScreen.style.display = "none";
      if (mainContent) mainContent.classList.add("visible");
      if (mainHeader) mainHeader.classList.add("visible");
      body.style.overflow = "auto";
    }, 400);
  }

  // Permitir saltar intro haciendo clic en la pantalla o con Escape / Espacio
  if (loadingScreen) {
    loadingScreen.addEventListener("click", revealContentImmediately);
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" || e.key === " ") {
        revealContentImmediately();
      }
    });
  }

  const text = "Iniciando portafolio...\nGracias por confiar en mi trabajo\npara tu próximo momento/proyecto.";
  let i = 0;

  // Esperar a que la Mac se abra
  typeTimeout = setTimeout(() => {
    typeText();
  }, 2400);

  // Efecto de máquina de escribir
  function typeText() {
    if (introFinished) return;
    if (i < text.length) {
      if (text.charAt(i) === "\n") {
        typewriterEl.innerHTML += "<br>";
      } else {
        typewriterEl.innerHTML += text.charAt(i);
      }
      i++;
      typeTimeout = setTimeout(typeText, 45);
    } else {
      typeTimeout = setTimeout(startLoadingBar, 300);
    }
  }

  // Animación de carga y Zoom Reveal
  function startLoadingBar() {
    if (introFinished) return;
    let progress = 0;
    barInterval = setInterval(() => {
      if (introFinished) return;
      progress += Math.random() * 9 + 3;

      if (progress >= 100) {
        progress = 100;
        clearInterval(barInterval);

        // SECUENCIA DE ZOOM REVEAL
        setTimeout(() => {
          if (introFinished) return;
          const screen = document.querySelector(".laptop-screen");
          if (screen) {
            screen.style.opacity = "0";
            screen.style.transition = "opacity 0.3s ease";
          }

          const glass = document.querySelector(".glass-panel");
          if (glass) glass.classList.add("hide-glass");

          const laptop = document.querySelector(".css-laptop");
          if (laptop) laptop.classList.add("zoom-into-screen");

          // Mostrar el contenido principal y el logo
          setTimeout(() => {
            if (introFinished) return;
            introFinished = true;
            sessionStorage.setItem("introSeen", "true");
            if (loadingScreen) loadingScreen.style.display = "none";
            if (mainContent) mainContent.classList.add("visible");
            if (mainHeader) mainHeader.classList.add("visible");
            body.style.overflow = "auto";
          }, 1200);

        }, 500);
      }
      if (loadingBar) loadingBar.style.width = progress + "%";
    }, 110);
  }

  // Inicializar interacciones
  initInteractions();
});
