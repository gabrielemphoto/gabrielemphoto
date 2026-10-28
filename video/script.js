/**
 * GABRIEL EM | PORTAFOLIO FILMMAKING & EDICIÓN DE VIDEOS
 * Lógica interactiva: Apertura de obturador, DaVinci Timecode,
 * Saludo multilingüe, Carpeta 3D y Reproductor TikTok en Smartphone.
 */

// BASE DE DATOS DE VIDEOS POR CATEGORÍA
const VIDEO_DATABASE = {
  reels: [
    {
      src: "assets/Reels/VIDEO MA.webm",
      mp4Fallback: "assets/Reels/VIDEO MA.mp4",
      poster: "assets/Reels/VIDEO MA_poster.webp",
      tag: "Reels • Marca",
      title: "Campaña Motion MA",
      sub: "Transiciones de impacto & sound design"
    },
    {
      src: "assets/Reels/1.webm",
      mp4Fallback: "assets/Reels/1.mp4",
      poster: "assets/Reels/1_poster.webp",
      tag: "Reels • Contenido",
      title: "Producción de Contenido",
      sub: "Creatividad y ritmo visual de alto impacto"
    },
    {
      src: "assets/Reels/crudo promo la factoria.webm",
      mp4Fallback: "assets/Reels/crudo promo la factoria.mp4",
      poster: "assets/Reels/crudo promo la factoria_poster.webp",
      tag: "Reels • Comercial",
      title: "Promo La Factoría",
      sub: "Visual comercial optimizado para retención"
    },
    {
      src: "assets/Reels/promocion español(1).webm",
      mp4Fallback: "assets/Reels/promocion español(1).mp4",
      poster: "assets/Reels/promocion español(1)_poster.webp",
      tag: "Reels • Promoción",
      title: "Spot Publicitario",
      sub: "Narrativa directa y dinámicas de conversión"
    },
    {
      src: "assets/Reels/video 1.webm",
      mp4Fallback: "assets/Reels/video 1.mp4",
      poster: "assets/Reels/video 1_poster.webp",
      tag: "Reels • Showcase",
      title: "Showcase Creativo",
      sub: "Edición de corte rápido y atmósfera visual"
    },
    {
      src: "assets/Reels/video turismo.webm",
      mp4Fallback: "assets/Reels/video turismo.mp4",
      poster: "assets/Reels/video turismo_poster.webp",
      tag: "Reels • Turismo",
      title: "Destino Turístico",
      sub: "Color grading y ritmo envolvente"
    }
  ],
  inmobiliaria: [
    {
      src: "assets/INMOBILIARIA/video inmobiliario 2.webm",
      mp4Fallback: "assets/INMOBILIARIA/video inmobiliario 2.mp4",
      poster: "assets/INMOBILIARIA/video inmobiliario 2_poster.webp",
      tag: "Inmobiliaria • Luxury",
      title: "Recorrido Inmobiliario",
      sub: "Tomas fluidas, iluminación y diseño de espacios"
    },
    {
      src: "assets/INMOBILIARIA/VIDEO LOMAS FINAL.webm",
      mp4Fallback: "assets/INMOBILIARIA/VIDEO LOMAS FINAL.mp4",
      poster: "assets/INMOBILIARIA/VIDEO LOMAS FINAL_poster.webp",
      tag: "Inmobiliaria • Residencial",
      title: "Inmobiliaria Lomas",
      sub: "Color grade cinematográfico y arquitectura"
    },
    {
      src: "assets/INMOBILIARIA/Video Villa el Faro.webm",
      mp4Fallback: "assets/INMOBILIARIA/Video Villa el Faro.mp4",
      poster: "assets/INMOBILIARIA/Video Villa el Faro_poster.webp",
      tag: "Inmobiliaria • Exclusivo",
      title: "Villa El Faro",
      sub: "Vistas panorámicas aéreas y estilo de vida"
    },
    {
      src: "assets/INMOBILIARIA/Video Luisana final2.webm",
      mp4Fallback: "assets/INMOBILIARIA/Video Luisana final2.mp4",
      poster: "assets/INMOBILIARIA/Video Luisana final2_poster.webp",
      tag: "Inmobiliaria • Showcase",
      title: "Propiedad Luisana",
      sub: "Presentación arquitectónica y detalles premium"
    },
    {
      src: "assets/INMOBILIARIA/Video Luisana Townhouses.webm",
      mp4Fallback: "assets/INMOBILIARIA/Video Luisana Townhouses.mp4",
      poster: "assets/INMOBILIARIA/Video Luisana Townhouses_poster.webp",
      tag: "Inmobiliaria • Townhouses",
      title: "Townhouses Exclusivos",
      sub: "Perspectiva espacial y estilo contemporáneo"
    },
    {
      src: "assets/INMOBILIARIA/Video terrenos .webm",
      mp4Fallback: "assets/INMOBILIARIA/Video terrenos .mp4",
      poster: "assets/INMOBILIARIA/Video terrenos _poster.webp",
      tag: "Inmobiliaria • Terrenos & Desarrollo",
      title: "Desarrollo de Terrenos",
      sub: "Planificación y tomas de gran escala"
    },
    {
      src: "assets/INMOBILIARIA/Edición  con IA Posada Guatamare.webm",
      mp4Fallback: "assets/INMOBILIARIA/Edición  con IA Posada Guatamare.mp4",
      poster: "assets/INMOBILIARIA/Edición  con IA Posada Guatamare_poster.webp",
      tag: "Inmobiliaria • Hospedaje & IA",
      title: "Posada Guatamare",
      sub: "Postproducción avanzada con IA y atmósfera cálida"
    },
    {
      src: "assets/INMOBILIARIA/VIDEO MANSION DE LUJO.webm",
      mp4Fallback: "assets/INMOBILIARIA/VIDEO MANSION DE LUJO.mp4",
      poster: "assets/INMOBILIARIA/VIDEO MANSION DE LUJO_poster.webp",
      tag: "Inmobiliaria • Mansión High-End",
      title: "Mansión de Lujo",
      sub: "Tour cinemático completo y máxima elegancia"
    }
  ],
  eventos: [
    {
      src: "assets/Eventos/TALENTO MGTA SHOW MUNDIAL.webm",
      mp4Fallback: "assets/Eventos/TALENTO MGTA SHOW MUNDIAL.mp4",
      poster: "assets/Eventos/TALENTO MGTA SHOW MUNDIAL_poster.webp",
      tag: "Eventos • Show en Vivo",
      title: "Talento Margarita Show",
      sub: "Iluminación de escenario y montaje multicámara"
    },
    {
      src: "assets/Eventos/Katherin y Valeria.webm",
      mp4Fallback: "assets/Eventos/Katherin y Valeria.mp4",
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
let currentActiveTitle = "Campaña Motion MA";

// FUNCIÓN PARA COTIZAR EL VIDEO ACTIVO DESDE EL BOTÓN EXTERNO
window.quoteActiveVideo = function () {
  const categoryNames = {
    reels: "Reels / Formato Vertical",
    inmobiliaria: "Producción Inmobiliaria",
    eventos: "Eventos y Cobertura"
  };
  const catName = categoryNames[currentCategory] || "Producción Audiovisual";
  const title = currentActiveTitle || catName;
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
  // 7. GALERÍA DE VIDEOS TIKTOK / SMARTPHONE MOCKUP INTERACTIVO
  // -------------------------------------------------------------
  const tiktokFeed = document.getElementById("tiktokFeed");
  const phoneMockup = document.getElementById("phoneMockup");
  const phoneAudioToggle = document.getElementById("phoneAudioToggle");
  const audioIcon = document.getElementById("audioIcon");
  const audioText = document.getElementById("audioText");
  const phoneProgressBar = document.getElementById("phoneProgressBar");
  const phoneCategoryLabel = document.getElementById("phoneCategoryLabel");
  const tabReels = document.getElementById("tab-reels");
  const tabEventos = document.getElementById("tab-eventos");
  const btnPhonePrev = document.getElementById("btnPhonePrev");
  const btnPhoneNext = document.getElementById("btnPhoneNext");
  const currentVideoNum = document.getElementById("currentVideoNum");
  const totalVideoNum = document.getElementById("totalVideoNum");

  let currentSlideIndex = 0;
  let isPointerDown = false;
  let pointerStartY = 0;
  let pointerMoved = false;
  let wheelLock = false;

  // ACTUALIZADOR DE CONTADOR DE VIDEOS PARA COMPUTADORA
  function updateDesktopCounter(curr, total) {
    if (currentVideoNum) {
      currentVideoNum.textContent = String(curr).padStart(2, "0");
    }
    if (totalVideoNum) {
      totalVideoNum.textContent = String(total).padStart(2, "0");
    }
  }

  // NAVEGACIÓN PROGRAMÁTICA ENTRE SLIDES (SUAVE Y PRECISA, SIN MOVER LA PÁGINA)
  function goToSlide(index) {
    if (!tiktokFeed) return;
    const slides = tiktokFeed.querySelectorAll(".tiktok-slide");
    if (!slides.length) return;

    // Asegurar índice dentro de rango
    const clampedIndex = Math.max(0, Math.min(index, slides.length - 1));
    const targetSlide = slides[clampedIndex];
    if (!targetSlide) return;

    currentSlideIndex = clampedIndex;

    // Desplazamiento exclusivo dentro del contenedor del teléfono (NO mueve la ventana de la página)
    const slideHeight = tiktokFeed.clientHeight || targetSlide.offsetHeight;
    tiktokFeed.scrollTo({
      top: clampedIndex * slideHeight,
      behavior: "smooth"
    });

    // Activar reproducción y título
    playSlideVideo(targetSlide);
    updateDesktopCounter(currentSlideIndex + 1, slides.length);
  }

  // RENDERIZADOR DE SLIDES DE VIDEO
  function renderTikTokFeed(category) {
    if (!tiktokFeed) return;
    currentCategory = category;
    currentSlideIndex = 0;

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
    updateDesktopCounter(1, videos.length);
    let html = "";

    videos.forEach((item, index) => {
      html += `
        <div class="tiktok-slide" data-index="${index}" data-title="${item.title}">
          <video class="phone-video-player" playsinline loop ${isGlobalMuted ? "muted" : ""} preload="${index === 0 ? "auto" : "metadata"}" poster="${item.poster || ""}">
            <source src="${item.src}" type="video/webm">
            ${item.mp4Fallback ? `<source src="${item.mp4Fallback}" type="video/mp4">` : ""}
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
    const idx = parseInt(slide.getAttribute("data-index") || "0", 10);
    currentSlideIndex = idx;

    const totalSlides = tiktokFeed.querySelectorAll(".tiktok-slide").length;
    updateDesktopCounter(currentSlideIndex + 1, totalSlides);

    // Pausar y reiniciar cualquier otro video para que al volver empiece desde el inicio
    tiktokFeed.querySelectorAll(".tiktok-slide").forEach(s => {
      if (s !== slide) {
        const v = s.querySelector("video");
        if (v) {
          try {
            v.pause();
            v.currentTime = 0;
          } catch (e) {}
        }
        s.classList.remove("active", "is-paused");
      }
    });

    slide.classList.add("active");
    slide.classList.remove("is-paused");

    const video = slide.querySelector("video");
    if (video) {
      try {
        video.currentTime = 0;
      } catch (e) {}
      if (phoneProgressBar) {
        phoneProgressBar.style.width = "0%";
      }
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

    // Detección de slide visible al scrollear (IntersectionObserver dentro del feed)
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

      // Tap / Click para pausar o reanudar
      const tapOverlay = slide.querySelector(".video-tap-overlay");
      const video = slide.querySelector("video");

      if (tapOverlay && video) {
        tapOverlay.addEventListener("click", () => {
          // Si se produjo un arrastre con el ratón, no alternar pausa
          if (pointerMoved) return;
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
  // 8. CONTROLES DE NAVEGACIÓN PARA COMPUTADORA (FLECHAS LATERALES)
  // -------------------------------------------------------------
  if (btnPhoneNext) {
    btnPhoneNext.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      goToSlide(currentSlideIndex + 1);
    });
  }

  if (btnPhonePrev) {
    btnPhonePrev.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      goToSlide(currentSlideIndex - 1);
    });
  }

  // -------------------------------------------------------------
  // 9. NAVEGACIÓN CON RUEDA DEL RATÓN (WHEEL) EN COMPUTADORA
  // -------------------------------------------------------------
  const handleWheelNavigation = (e) => {
    // Interceptar el scroll sobre el teléfono para avanzar/retroceder de video
    e.preventDefault();
    if (wheelLock) return;

    if (Math.abs(e.deltaY) > 20) {
      wheelLock = true;
      if (e.deltaY > 0) {
        goToSlide(currentSlideIndex + 1);
      } else {
        goToSlide(currentSlideIndex - 1);
      }
      setTimeout(() => {
        wheelLock = false;
      }, 450);
    }
  };

  if (tiktokFeed) {
    tiktokFeed.addEventListener("wheel", handleWheelNavigation, { passive: false });
  }

  // -------------------------------------------------------------
  // 10. NAVEGACIÓN POR ARRASTRE DE RATÓN (CLICK & DRAG VERTICAL)
  // -------------------------------------------------------------
  if (tiktokFeed) {
    tiktokFeed.addEventListener("mousedown", (e) => {
      if (e.target.closest("button") || e.target.closest("a")) return;
      isPointerDown = true;
      pointerMoved = false;
      pointerStartY = e.clientY;
    });

    window.addEventListener("mousemove", (e) => {
      if (!isPointerDown) return;
      if (Math.abs(e.clientY - pointerStartY) > 10) {
        pointerMoved = true;
      }
    });

    window.addEventListener("mouseup", (e) => {
      if (!isPointerDown) return;
      isPointerDown = false;
      const deltaY = e.clientY - pointerStartY;
      if (pointerMoved && Math.abs(deltaY) > 35) {
        if (deltaY < 0) {
          goToSlide(currentSlideIndex + 1);
        } else {
          goToSlide(currentSlideIndex - 1);
        }
      }
    });
  }

  // -------------------------------------------------------------
  // 11. NAVEGACIÓN POR TECLADO (FLECHAS ARRIBA / ABAJO)
  // -------------------------------------------------------------
  window.addEventListener("keydown", (e) => {
    if (!tiktokFeed) return;
    const rect = tiktokFeed.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (!isVisible) return;

    if (e.key === "ArrowDown" || e.key === "PageDown") {
      e.preventDefault();
      goToSlide(currentSlideIndex + 1);
    } else if (e.key === "ArrowUp" || e.key === "PageUp") {
      e.preventDefault();
      goToSlide(currentSlideIndex - 1);
    } else if (e.key === " " && (document.activeElement === document.body || document.activeElement === tiktokFeed)) {
      e.preventDefault();
      if (currentActiveVideo) {
        if (currentActiveVideo.paused) currentActiveVideo.play();
        else currentActiveVideo.pause();
      }
    }
  });

  // -------------------------------------------------------------
  // 12. BOTÓN DE AUDIO / VOLUMEN EN EL TELÉFONO
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
  // 13. SELECTOR DE CATEGORÍA DINÁMICO (REELS / INMOBILIARIA / EVENTOS)
  // -------------------------------------------------------------
  const categoryTabs = document.querySelectorAll(".cat-tab-btn");
  categoryTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const cat = tab.getAttribute("data-category");
      if (!cat || cat === currentCategory) return;

      categoryTabs.forEach(t => {
        t.classList.remove("active");
        const icon = t.querySelector(".tab-folder-icon");
        if (icon) icon.textContent = "📁";
      });

      tab.classList.add("active");
      const activeIcon = tab.querySelector(".tab-folder-icon");
      if (activeIcon) activeIcon.textContent = "📂";

      renderTikTokFeed(cat);
    });
  });

  // INICIALIZAR FEED CON "REELS"
  renderTikTokFeed("reels");

});
