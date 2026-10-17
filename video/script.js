/**
 * GABRIEL EM | PORTAFOLIO FILMMAKING & EDICIÓN DE VIDEOS
 * Lógica interactiva: Apertura de obturador, DaVinci Timecode,
 * Saludo multilingüe, Carpeta 3D y Reproductor TikTok en Smartphone.
 */

// BASE DE DATOS DE VIDEOS POR CATEGORÍA
const VIDEO_DATABASE = {
  reels: [
    {
      src: "assets/Reels/VIDEO LOMAS FINAL.mp4",
      poster: "assets/Reels/VIDEO LOMAS FINAL_poster.webp",
      tag: "Reels • Inmobiliaria",
      title: "Inmobiliaria Lomas",
      sub: "Color grade cinematográfico y ritmo dinámico"
    },
    {
      src: "assets/Reels/VIDEO MA.mp4",
      poster: "assets/Reels/VIDEO MA_poster.webp",
      tag: "Reels • Marca",
      title: "Campaña Motion MA",
      sub: "Transiciones de impacto & sound design"
    },
    {
      src: "assets/Reels/Video Villa el Faro.mp4",
      poster: "assets/Reels/Video Villa el Faro_poster.webp",
      tag: "Reels • Turismo",
      title: "Villa El Faro",
      sub: "Tomas aéreas y narrativa visual"
    },
    {
      src: "assets/Reels/video turismo.mp4",
      poster: "assets/Reels/video turismo_poster.webp",
      tag: "Reels • Destino",
      title: "Destino Turístico",
      sub: "Ritmo envolvente y vibrante"
    },
    {
      src: "assets/Reels/crudo promo la factoria.mp4",
      poster: "assets/Reels/crudo promo la factoria_poster.webp",
      tag: "Reels • Comercial",
      title: "Promo La Factoría",
      sub: "Visual comercial optimizado para retención"
    }
  ],
  eventos: [
    {
      src: "assets/Eventos/TALENTO MGTA SHOW MUNDIAL.mp4",
      poster: "assets/Eventos/TALENTO MGTA SHOW MUNDIAL_poster.webp",
      tag: "Eventos • Show en Vivo",
      title: "Talento Margarita Show",
      sub: "Iluminación de escenario y montaje multicámara"
    },
    {
      src: "assets/Eventos/Katherin y Valeria.mp4",
      poster: "assets/Eventos/Katherin y Valeria_poster.webp",
      tag: "Eventos • Social",
      title: "Katherin & Valeria",
      sub: "Cobertura de momentos emotivos y celebración"
    }
  ]
};

// ESTADO GLOBAL DEL REPRODUCTOR
let currentCategory = "reels";
let isGlobalMuted = true;
let currentActiveVideo = null;
let currentActiveTitle = "Inmobiliaria Lomas";

// FUNCIÓN PARA COTIZAR EL VIDEO ACTIVO DESDE EL BOTÓN EXTERNO
window.quoteActiveVideo = function () {
  const title = currentActiveTitle || (currentCategory === "reels" ? "Reel / Formato Vertical" : "Evento Social / Cobertura");
  const phone = "584146860112";
  const message = `Hola Gabriel, estuve viendo tu galería de videos en la sección de ${currentCategory.toUpperCase()} y me encantó el estilo de "${title}". Me gustaría cotizar un proyecto similar para mi marca.`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

document.addEventListener("DOMContentLoaded", () => {

  // -------------------------------------------------------------
  // 1. OBTURADOR DE CÁMARA & TELÓN DE TRANSICIÓN ENTRE PÁGINAS
  // -------------------------------------------------------------
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
    }, 1500);
  }

  window.addEventListener("pageshow", () => {
    if (curtain) {
      curtain.classList.remove("active");
      curtain.style.pointerEvents = "none";
    }
  });

  // TRANSICIÓN DE SALIDA AL HACER CLIC EN ENLACES DE OTRA PÁGINA
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
        }, 750);
      }
    });
  });

  // -------------------------------------------------------------
  // 2. TIMECODE DINÁMICO TIPO DAVINCI RESOLVE
  // -------------------------------------------------------------
  const timecodeEl = document.getElementById("davinci-tc");
  if (timecodeEl) {
    let hours = 1;
    let minutes = 0;
    let seconds = 14;
    let frames = 24;

    setInterval(() => {
      frames++;
      if (frames >= 24) {
        frames = 0;
        seconds++;
        if (seconds >= 60) {
          seconds = 0;
          minutes++;
          if (minutes >= 60) {
            minutes = 0;
            hours = (hours % 23) + 1;
          }
        }
      }
      const pad = (n) => String(n).padStart(2, "0");
      timecodeEl.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`;
    }, 41); // ~24 FPS
  }

  // -------------------------------------------------------------
  // 3. SALUDO MULTILINGÜE DINÁMICO ("Hola, mi nombre es Gabriel")
  // -------------------------------------------------------------
  const greetingEl = document.getElementById("multilingual-greeting");
  if (greetingEl) {
    const greetings = [
      "¡Hola! Mi nombre es Gabriel",
      "Hi! My name is Gabriel",
      "Bonjour! Je m'appelle Gabriel",
      "Ciao! Mi chiamo Gabriel",
      "Olá! O meu nome é Gabriel",
      "Hallo! Ich heiße Gabriel"
    ];
    let greetIndex = 0;

    setInterval(() => {
      greetingEl.style.opacity = "0";
      greetingEl.style.transform = "translateY(6px)";

      setTimeout(() => {
        greetIndex = (greetIndex + 1) % greetings.length;
        greetingEl.textContent = greetings[greetIndex];
        greetingEl.style.opacity = "1";
        greetingEl.style.transform = "translateY(0)";
      }, 350);
    }, 2800);
  }

  // -------------------------------------------------------------
  // 4. ANIMACIONES DE REVELADO AL HACER SCROLL (REVEAL-ON-SCROLL)
  // -------------------------------------------------------------
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // -------------------------------------------------------------
  // 5. APERTURA DE LA CARPETA 📂 AL SCROLLEAR A LA GALERÍA
  // -------------------------------------------------------------
  const folderStage = document.getElementById("folderStage");
  const gallerySection = document.getElementById("galeria");

  if (gallerySection && folderStage) {
    const folderObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          folderStage.classList.add("folder-opened");
        }
      });
    }, {
      threshold: 0.1
    });

    folderObserver.observe(gallerySection);

    const checkFolderVisible = () => {
      const rect = gallerySection.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        folderStage.classList.add("folder-opened");
      }
    };
    window.addEventListener("scroll", checkFolderVisible, { passive: true });
    checkFolderVisible();
  }

  // -------------------------------------------------------------
  // 6. RELOJ DEL SMARTPHONE (HORA REAL)
  // -------------------------------------------------------------
  const phoneClockEl = document.getElementById("phoneClock");
  if (phoneClockEl) {
    const updatePhoneClock = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      phoneClockEl.textContent = `${h}:${m}`;
    };
    updatePhoneClock();
    setInterval(updatePhoneClock, 30000);
  }

  // -------------------------------------------------------------
  // 7. MOTOR DEL REPRODUCTOR TIKTOK EN EL SMARTPHONE
  // -------------------------------------------------------------
  const tiktokFeed = document.getElementById("tiktokFeed");
  const phoneAudioToggle = document.getElementById("phoneAudioToggle");
  const audioIcon = document.getElementById("audioIcon");
  const audioText = document.getElementById("audioText");
  const phoneProgressBar = document.getElementById("phoneProgressBar");
  const phoneCategoryLabel = document.getElementById("phoneCategoryLabel");
  const tabReels = document.getElementById("tab-reels");
  const tabEventos = document.getElementById("tab-eventos");
  const btnPhonePrev = document.getElementById("btnPhonePrev");
  const btnPhoneNext = document.getElementById("btnPhoneNext");

  // RENDERIZADOR DE SLIDES DE VIDEO
  function renderTikTokFeed(category) {
    if (!tiktokFeed) return;
    currentCategory = category;

    // Actualizar indicador en el teléfono
    if (phoneCategoryLabel) {
      phoneCategoryLabel.textContent = category.toUpperCase();
    }

    // Detener videos previos
    tiktokFeed.querySelectorAll("video").forEach(v => {
      try {
        v.pause();
        v.currentTime = 0;
      } catch (e) {}
    });

    const videos = VIDEO_DATABASE[category] || [];
    let html = "";

    videos.forEach((item, index) => {
      html += `
        <div class="tiktok-slide" data-index="${index}" data-title="${item.title}">
          <video class="phone-video-player" playsinline loop ${isGlobalMuted ? "muted" : ""} preload="${index === 0 ? "auto" : "metadata"}" poster="${item.poster || ""}">
            <source src="${item.src}" type="video/mp4">
          </video>
          <div class="video-tap-overlay">
            <div class="play-pause-icon">▶</div>
          </div>
          <div class="tiktok-video-overlay">
            <span class="overlay-tag">${item.tag}</span>
            <h3 class="overlay-title">${item.title}</h3>
            <p class="overlay-sub">${item.sub}</p>
          </div>
        </div>
      `;
    });

    tiktokFeed.innerHTML = html;
    tiktokFeed.scrollTop = 0;

    // Reasociar eventos a las nuevas diapositivas
    bindSlideEvents();

    // Iniciar el primer video
    setTimeout(() => {
      const firstSlide = tiktokFeed.querySelector('.tiktok-slide[data-index="0"]');
      if (firstSlide) {
        playSlideVideo(firstSlide);
      }
    }, 200);
  }

  // REPRODUCIR VIDEO DEL SLIDE ACTIVO
  function playSlideVideo(slide) {
    if (!slide) return;

    currentActiveTitle = slide.getAttribute("data-title") || "Producción Audiovisual";

    // Pausar cualquier otro video que esté reproduciéndose
    tiktokFeed.querySelectorAll(".tiktok-slide").forEach(s => {
      if (s !== slide) {
        const v = s.querySelector("video");
        if (v) {
          try {
            v.pause();
          } catch (e) {}
        }
        s.classList.remove("active", "is-paused");
      }
    });

    slide.classList.add("active");
    slide.classList.remove("is-paused");

    const video = slide.querySelector("video");
    if (video) {
      video.muted = isGlobalMuted;
      currentActiveVideo = video;

      // Vincular barra de progreso
      video.ontimeupdate = () => {
        if (video.duration && phoneProgressBar) {
          const pct = (video.currentTime / video.duration) * 100;
          phoneProgressBar.style.width = `${pct}%`;
        }
      };

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Si el navegador bloquea autoplay sin gesto de usuario, forzar muted y reintentar
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    }
  }

  // BIND DE EVENTOS A CADA SLIDE DEL FEED
  function bindSlideEvents() {
    const slides = tiktokFeed.querySelectorAll(".tiktok-slide");

    // 1. Detección de slide visible al scrollear (IntersectionObserver dentro del feed)
    const feedObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          playSlideVideo(entry.target);
        }
      });
    }, {
      root: tiktokFeed,
      threshold: 0.65
    });

    slides.forEach(slide => {
      feedObserver.observe(slide);

      // 2. Tap para pausar/reanudar
      const tapOverlay = slide.querySelector(".video-tap-overlay");
      const video = slide.querySelector("video");

      if (tapOverlay && video) {
        tapOverlay.addEventListener("click", () => {
          if (video.paused) {
            video.play();
            slide.classList.remove("is-paused");
          } else {
            video.pause();
            slide.classList.add("is-paused");
          }
        });
      }
    });
  }

  // -------------------------------------------------------------
  // 8. BOTÓN DE AUDIO / VOLUMEN EN EL TELÉFONO
  // -------------------------------------------------------------
  if (phoneAudioToggle) {
    phoneAudioToggle.addEventListener("click", () => {
      isGlobalMuted = !isGlobalMuted;

      if (isGlobalMuted) {
        audioIcon.textContent = "🔇";
        audioText.textContent = "Mudo";
        phoneAudioToggle.classList.remove("active-audio");
        phoneAudioToggle.title = "Activar sonido";
      } else {
        audioIcon.textContent = "🔊";
        audioText.textContent = "Sonido On";
        phoneAudioToggle.classList.add("active-audio");
        phoneAudioToggle.title = "Silenciar";
      }

      // Aplicar al video actualmente activo y a todos
      tiktokFeed.querySelectorAll("video").forEach(v => {
        v.muted = isGlobalMuted;
      });

      if (currentActiveVideo && !isGlobalMuted) {
        currentActiveVideo.play().catch(() => {});
      }
    });
  }



  // -------------------------------------------------------------
  // 10. SELECTOR DE CATEGORÍA (REELS / EVENTOS)
  // -------------------------------------------------------------
  if (tabReels && tabEventos) {
    tabReels.addEventListener("click", () => {
      if (currentCategory === "reels") return;
      tabReels.classList.add("active");
      tabEventos.classList.remove("active");
      renderTikTokFeed("reels");
    });

    tabEventos.addEventListener("click", () => {
      if (currentCategory === "eventos") return;
      tabEventos.classList.add("active");
      tabReels.classList.remove("active");
      renderTikTokFeed("eventos");
    });
  }

  // INICIALIZAR FEED CON "REELS"
  renderTikTokFeed("reels");

});
