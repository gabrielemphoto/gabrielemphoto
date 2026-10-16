/**
 * GABRIEL EM | PORTAFOLIO FOTOGRÁFICO DE AUTOR (EDICIÓN BLANCO Y NEGRO)
 * Carrete 35mm, Efecto Obturador en Espiral (Camera Iris), Visor Deslizante
 * y navegación garantizada en móviles y escritorio.
 */

// BASE DE DATOS DE LAS 6 COLECCIONES DE AUTOR (103 FOTOGRAMAS REALES DE GABRIEL)
const CARPETAS_DATA = {
  sesiones: {
    id: "sesiones",
    title: "Sesiones & Retratos Editoriales",
    subtitle: "Retratos personales, moda editorial, parejas y proyectos conceptuales",
    badge: "31 FOTOGRAMAS",
    cover: "assets/sesiones/IMG_7095.webp",
    photos: [
      { src: "assets/sesiones/IMG_7095.webp", title: "Retrato Editorial de Alta Gama", sub: "Sesiones • Dirección de Arte" },
      { src: "assets/sesiones/IMG_2119.webp", title: "Retrato Natural en Exteriores", sub: "Sesiones • Luz Natural" },
      { src: "assets/sesiones/IMG_2488.webp", title: "Composición & Estilismo", sub: "Sesiones • Tono Cálido" },
      { src: "assets/sesiones/IMG_4046.webp", title: "Retrato en Estudio • Mirada y Carácter", sub: "Sesiones • Iluminación de Estudio" },
      { src: "assets/sesiones/IMG_4058.webp", title: "Retrato Minimalista", sub: "Sesiones • Contraste y Forma" },
      { src: "assets/sesiones/IMG_4092.webp", title: "Sesión Conceptual", sub: "Sesiones • Expresión y Textura" },
      { src: "assets/sesiones/IMG_5508.webp", title: "Retrato de Moda Contemporánea", sub: "Sesiones • Dirección Editorial" },
      { src: "assets/sesiones/IMG_5526.webp", title: "Composición de Moda & Luz Suave", sub: "Sesiones • Paleta Atemporal" },
      { src: "assets/sesiones/IMG_5951.webp", title: "Retrato de Rostro y Enfoque", sub: "Sesiones • Alta Definición" },
      { src: "assets/sesiones/IMG_7173.webp", title: "Retrato Editorial en Estudio", sub: "Sesiones • Elegancia & Estilo" },
      { src: "assets/sesiones/IMG_7233.webp", title: "Sesión Personal de Autor", sub: "Sesiones • Iluminación Esculpida" },
      { src: "assets/sesiones/IMG_7251.webp", title: "Retrato de Carácter Profundo", sub: "Sesiones • Tono Atemporal" },
      { src: "assets/sesiones/IMG_7511.webp", title: "Retrato Espontáneo", sub: "Sesiones • Movimiento y Verdad" },
      { src: "assets/sesiones/IMG_7515.webp", title: "Encuadre Editorial", sub: "Sesiones • Silueta y Sombra" },
      { src: "assets/sesiones/IMG_7536.webp", title: "Retrato Clásico con Fondo Neutro", sub: "Sesiones • Estudio Fotográfico" },
      { src: "assets/sesiones/IMG_7561.webp", title: "Expresión & Confianza", sub: "Sesiones • Dirección de Mirada" },
      { src: "assets/sesiones/IMG_7569.webp", title: "Retrato de Moda en Locación", sub: "Sesiones • Textura Urbana" },
      { src: "assets/sesiones/IMG_7609.webp", title: "Luz de Atardecer & Calidez", sub: "Sesiones • Hora Dorada" },
      { src: "assets/sesiones/IMG_7660.webp", title: "Retrato Sensible", sub: "Sesiones • Enfoque Suave" },
      { src: "assets/sesiones/IMG_7973.webp", title: "Sesión en Estudio • Perfil", sub: "Sesiones • Iluminación de Precisión" },
      { src: "assets/sesiones/IMG_8065.webp", title: "Retrato de Actitud", sub: "Sesiones • Estilo Vanguardista" },
      { src: "assets/sesiones/IMG_8147.webp", title: "Composición de Rostro", sub: "Sesiones • Detalles & Mirada" },
      { src: "assets/sesiones/IMG_8156.webp", title: "Retrato Editorial de Moda", sub: "Sesiones • Dirección de Modelo" },
      { src: "assets/sesiones/IMG_8168.webp", title: "Luz Natural & Sombra Suave", sub: "Sesiones • Retrato Íntimo" },
      { src: "assets/sesiones/IMG_8237.webp", title: "Retrato de Belleza", sub: "Sesiones • Piel y Maquillaje" },
      { src: "assets/sesiones/IMG_8457.webp", title: "Sesión al Aire Libre", sub: "Sesiones • Conexión con el Entorno" },
      { src: "assets/sesiones/IMG_8462.webp", title: "Luz Dorada y Viento", sub: "Sesiones • Atmósfera Cinematográfica" },
      { src: "assets/sesiones/IMG_8678.webp", title: "Retrato Artístico", sub: "Sesiones • Fotografía de Autor" },
      { src: "assets/sesiones/IMG_8740.webp", title: "Mirada Atemporal", sub: "Sesiones • Revelado Clásico" },
      { src: "assets/sesiones/IMG_8812.webp", title: "Composición Editorial Final", sub: "Sesiones • Cierre de Colección" },
      { src: "assets/sesiones/madelein.webp", title: "Retrato Editorial • Madelein", sub: "Sesiones • Edición de Portada" }
    ]
  },

  quince: {
    id: "quince",
    title: "15 Años & Quinceañeras",
    subtitle: "Sesiones previas de gala en locación, recepción y momentos mágicos",
    badge: "9 FOTOGRAMAS",
    cover: "assets/quince-anos/IMG_3799.webp",
    photos: [
      { src: "assets/quince-anos/IMG_3799.webp", title: "Retrato Principal de Quinceañera", sub: "15 Años • Sesión Previa de Gala" },
      { src: "assets/quince-anos/IMG_3806.webp", title: "Detalles del Vestido & Elegancia", sub: "15 Años • Iluminación Suave" },
      { src: "assets/quince-anos/IMG_3810.webp", title: "Retrato de Princesa en Locación", sub: "15 Años • Atmósfera Soñada" },
      { src: "assets/quince-anos/IMG_3817.webp", title: "Sonrisa & Ilusión", sub: "15 Años • Momentos Espontáneos" },
      { src: "assets/quince-anos/IMG_3829.webp", title: "Retrato de Gala Completo", sub: "15 Años • Vestuario y Porte" },
      { src: "assets/quince-anos/IMG_3871.webp", title: "Composición de Ensueño", sub: "15 Años • Fotografía de Autor" },
      { src: "assets/quince-anos/IMG_7655.webp", title: "La Gran Noche de Celebración", sub: "15 Años • Cobertura de Evento" },
      { src: "assets/quince-anos/IMG_7670.webp", title: "El Vals & la Magia", sub: "15 Años • Emoción Familiar" },
      { src: "assets/quince-anos/IMG_7709.webp", title: "Brindis & Recuerdo Inolvidable", sub: "15 Años • Fiesta y Alegría" }
    ]
  },

  bautizos: {
    id: "bautizos",
    title: "Bautizos & Sacramentos",
    subtitle: "Ceremonias sagradas, bendición de la pila bautismal y emotivos recuerdos familiares",
    badge: "16 FOTOGRAMAS",
    cover: "assets/bautizos/Altar.webp",
    photos: [
      { src: "assets/bautizos/Altar.webp", title: "El Altar Sagrado & Preparación", sub: "Bautizos • Solemnidad en el Templo" },
      { src: "assets/bautizos/IMG_0283.webp", title: "La Unción Sagrada", sub: "Bautizos • El Rito Bautismal" },
      { src: "assets/bautizos/IMG_0287.webp", title: "La Pila Bautismal y el Agua Bendita", sub: "Bautizos • Momento del Sacramento" },
      { src: "assets/bautizos/IMG_0320.webp", title: "La Luz de la Fe • Cirio Bautismal", sub: "Bautizos • Padrinos y Luz" },
      { src: "assets/bautizos/IMG_0325.webp", title: "Bendición del Sacerdote", sub: "Bautizos • Rito Religioso" },
      { src: "assets/bautizos/IMG_2490.webp", title: "El Bebé en Brazos de Mamá", sub: "Bautizos • Ternura y Protección" },
      { src: "assets/bautizos/IMG_2547.webp", title: "Mirada Pura e Inocente", sub: "Bautizos • Retrato del Bebé" },
      { src: "assets/bautizos/IMG_2548.webp", title: "Detalle del Ropón Bautismal", sub: "Bautizos • Elegancia & Tradición" },
      { src: "assets/bautizos/IMG_2553.webp", title: "Familia Unida en la Fe", sub: "Bautizos • Amor Familiar" },
      { src: "assets/bautizos/IMG_2606.webp", title: "Retrato con los Padrinos", sub: "Bautizos • Compromiso Sagrado" },
      { src: "assets/bautizos/IMG_2630.webp", title: "Celebración en Familia", sub: "Bautizos • Alegría Compartida" },
      { src: "assets/bautizos/IMG_2632.webp", title: "Sonrisas y Complicidad", sub: "Bautizos • Instantes Espontáneos" },
      { src: "assets/bautizos/IMG_2735-2.webp", title: "La Paz del Sacramento", sub: "Bautizos • Serenidad y Gracia" },
      { src: "assets/bautizos/IMG_4477.webp", title: "Reunión Familiar Post-Ceremonia", sub: "Bautizos • Celebración Familiar" },
      { src: "assets/bautizos/IMG_4855.webp", title: "Detalles & Recuerdos del Bautizo", sub: "Bautizos • Momentos para Recordar" },
      { src: "assets/bautizos/IMG_4973.webp", title: "Bendición Final de la Familia", sub: "Bautizos • Recuerdo Perpetuo" }
    ]
  },

  comunion: {
    id: "comunion",
    title: "Primera Comunión",
    subtitle: "Retratos solemnes, fe, tradición, vestuario sagrado y recuerdos familiares",
    badge: "10 FOTOGRAMAS",
    cover: "assets/comunion/IMG_0001.webp",
    photos: [
      { src: "assets/comunion/IMG_0001.webp", title: "Primera Comunión • Retrato Solemne", sub: "Comunión • Altar y Devoción" },
      { src: "assets/comunion/IMG_0007.webp", title: "Vestuario Sagrado & Detalles", sub: "Comunión • Texturas y Pureza" },
      { src: "assets/comunion/IMG_0030.webp", title: "Retrato en Templo", sub: "Comunión • Iluminación Solemne" },
      { src: "assets/comunion/IMG_0097.webp", title: "Devoción y Fe", sub: "Comunión • Momento Espiritual" },
      { src: "assets/comunion/IMG_9833-2.webp", title: "Retrato de Gala Sagrada", sub: "Comunión • Composición Editorial" },
      { src: "assets/comunion/IMG_9835.webp", title: "Mirada Serena", sub: "Comunión • Retrato en Iglesia" },
      { src: "assets/comunion/IMG_9839.webp", title: "La Biblia y el Rosario", sub: "Comunión • Símbolos Sagrados" },
      { src: "assets/comunion/IMG_9921.webp", title: "La Bendición", sub: "Comunión • Tradición Familiar" },
      { src: "assets/comunion/IMG_9997.webp", title: "Retrato Familiar en el Templo", sub: "Comunión • Memoria Familiar" },
      { src: "assets/comunion/IMG_9998.webp", title: "Alegría del Sacramento", sub: "Comunión • Celebración" }
    ]
  },

  campanas: {
    id: "campanas",
    title: "Campañas & Foto de Producto",
    subtitle: "Dirección visual comercial, estilismo de producto y campañas de marca",
    badge: "19 FOTOGRAMAS",
    cover: "assets/campanas/IMG_4663.webp",
    photos: [
      { src: "assets/campanas/IMG_4663.webp", title: "Campaña Comercial • Estilismo", sub: "Campañas • Dirección de Arte" },
      { src: "assets/campanas/IMG_2094.webp", title: "Fotografía de Producto & Textura", sub: "Producto • Iluminación de Estudio" },
      { src: "assets/campanas/IMG_2153.webp", title: "Detalles y Acabados de Marca", sub: "Producto • Macro Comercial" },
      { src: "assets/campanas/IMG_2210.webp", title: "Bodegón Editorial", sub: "Producto • Composición Visual" },
      { src: "assets/campanas/IMG_4679.webp", title: "Campaña Lookbook", sub: "Campañas • Moda & Marca" },
      { src: "assets/campanas/IMG_4692.webp", title: "Composición de Moda & Accesorio", sub: "Campañas • Estilo Contemporáneo" },
      { src: "assets/campanas/IMG_4713.webp", title: "Fotografía Comercial en Estudio", sub: "Producto • Iluminación Esculpida" },
      { src: "assets/campanas/IMG_4722-Edit.webp", title: "Campaña Visual • Master Edit", sub: "Campañas • Retoque de Alta Gama" },
      { src: "assets/campanas/IMG_4725-Edit.webp", title: "Producto & Luz de Precisión", sub: "Producto • Acabado Premium" },
      { src: "assets/campanas/IMG_4745-Edit.webp", title: "Color & Forma Comercial", sub: "Campañas • Publicidad" },
      { src: "assets/campanas/IMG_6875.webp", title: "Estilismo Editorial de Moda", sub: "Campañas • Dirección Comercial" },
      { src: "assets/campanas/IMG_6905.webp", title: "Composición y Geometría", sub: "Producto • Líneas y Sombras" },
      { src: "assets/campanas/IMG_6917.webp", title: "Moda & Catálogo", sub: "Campañas • Colección de Temporada" },
      { src: "assets/campanas/IMG_6954.webp", title: "Campaña de Vestuario", sub: "Campañas • Dinamismo Visual" },
      { src: "assets/campanas/IMG_6961.webp", title: "Retrato Comercial", sub: "Campañas • Expresión de Marca" },
      { src: "assets/campanas/IMG_6986.webp", title: "Bodegón de Moda", sub: "Producto • Estilismo de Objeto" },
      { src: "assets/campanas/IMG_6989.webp", title: "Detalles de Confección", sub: "Producto • Texturas Claras" },
      { src: "assets/campanas/IMG_6995.webp", title: "Composición de Cierre", sub: "Campañas • Campaña Impresa" },
      { src: "assets/campanas/IMG_6996.webp", title: "Campaña Final • Editorial", sub: "Campañas • Portada Comercial" }
    ]
  },

  polas: {
    id: "polas",
    title: "Polas & Digitals de Modelos",
    subtitle: "Digitals oficiales de agencia, luz limpia y poses estándar para casting internacional",
    badge: "18 FOTOGRAMAS",
    cover: "assets/polas/IMG_0753-2.webp",
    photos: [
      { src: "assets/polas/IMG_0753-2.webp", title: "Polaroid de Rostro • Primer Plano", sub: "Polas • Digital Oficial de Agencia" },
      { src: "assets/polas/IMG_0759-2.webp", title: "Polaroid de Perfil Estricto", sub: "Polas • Estructura Facial" },
      { src: "assets/polas/IMG_0767-2.webp", title: "Polaroid de Perfil 3/4", sub: "Polas • Ángulo Editorial" },
      { src: "assets/polas/IMG_0794-2.webp", title: "Polaroid de Plano Medio", sub: "Polas • Expresión Neutra" },
      { src: "assets/polas/IMG_0836-2.webp", title: "Polaroid de Cuerpo Completo", sub: "Polas • Silueta y Proporción" },
      { src: "assets/polas/IMG_0853-2.webp", title: "Test de Poses para Casting", sub: "Polas • Dirección de Modelo" },
      { src: "assets/polas/IMG_0913-2.webp", title: "Polaroid Editorial en Estudio", sub: "Polas • Iluminación Neutra" },
      { src: "assets/polas/IMG_8243.webp", title: "Digital de Rostro • Mirada Frontal", sub: "Polas • Ficha de Presentación" },
      { src: "assets/polas/IMG_8260.webp", title: "Digital 3/4 • Expresión", sub: "Polas • Scouting de Modelo" },
      { src: "assets/polas/IMG_8297.webp", title: "Digital de Perfil Izquierdo", sub: "Polas • Proporciones Claras" },
      { src: "assets/polas/IMG_8308.webp", title: "Plano Entero • Ropa de Casting", sub: "Polas • Estándar Internacional" },
      { src: "assets/polas/IMG_8312.webp", title: "Test de Espalda y Silueta", sub: "Polas • Líneas Naturales" },
      { src: "assets/polas/IMG_8325.webp", title: "Digital con Sonrisa Natural", sub: "Polas • Rango de Expresión" },
      { src: "assets/polas/IMG_8352.webp", title: "Rostro Limpio • Sin Maquillaje", sub: "Polas • Piel y Facciones" },
      { src: "assets/polas/IMG_8359.webp", title: "Encuadre Cerrado de Ojos", sub: "Polas • Mirada y Fuerza" },
      { src: "assets/polas/IMG_8389.webp", title: "Retrato Neutro de Perfil", sub: "Polas • Casting de Alta Moda" },
      { src: "assets/polas/IMG_8418.webp", title: "Composición de Cuerpo Completo", sub: "Polas • Postura y Porte" },
      { src: "assets/polas/IMG_8419.webp", title: "Polaroid Final de Ficha", sub: "Polas • Conclusión de Digitals" }
    ]
  }
};

// ESTADO GLOBAL DEL VISOR
let currentFolderKey = "sesiones";
let currentPhotoIndex = 0;
let isShutterAnimating = false;

// APERTURA CON EFECTO OBTURADOR DE CÁMARA EN ESPIRAL
window.openShutterPortfolio = function (folderKey, startIndex = 0) {
  if (isShutterAnimating) return;
  const folder = CARPETAS_DATA[folderKey];
  if (!folder) return;

  isShutterAnimating = true;

  const shutterOverlay = document.getElementById("camera-shutter");
  if (shutterOverlay) {
    shutterOverlay.classList.add("closing");

    setTimeout(() => {
      // Cargar la carpeta y foto mientras las paletas están cerradas al centro
      window.openFolderDirect(folderKey, startIndex);

      shutterOverlay.classList.remove("closing");
      shutterOverlay.classList.add("opening");

      setTimeout(() => {
        shutterOverlay.classList.remove("opening");
        isShutterAnimating = false;
      }, 620);
    }, 280);
  } else {
    // Si no está disponible el overlay, abrir directo
    window.openFolderDirect(folderKey, startIndex);
    isShutterAnimating = false;
  }
};

// ALIAS GLOBAL PARA COMPATIBILIDAD
window.openFolder = window.openShutterPortfolio;

// APERTURA DIRECTA DEL VISOR MODAL (100% FIJADO AL VIEWPORT)
window.openFolderDirect = function (folderKey, startIndex = 0) {
  const folder = CARPETAS_DATA[folderKey];
  if (!folder) return;

  currentFolderKey = folderKey;
  currentPhotoIndex = Math.max(0, Math.min(startIndex, folder.photos.length - 1));

  const modal = document.getElementById("folder-lightbox");
  const folderNameEl = document.getElementById("lightbox-folder-name");

  if (folderNameEl) {
    folderNameEl.textContent = `[ 35MM ] ${folder.title.toUpperCase()}`;
  }

  renderModalPhoto();
  renderThumbnailsStrip();

  if (modal) {
    modal.classList.add("active");
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }
};

window.closeLightbox = function () {
  const modal = document.getElementById("folder-lightbox");
  if (modal) {
    modal.classList.remove("active");
  }
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
};

window.nextPhoto = function () {
  const folder = CARPETAS_DATA[currentFolderKey];
  if (!folder || !folder.photos || folder.photos.length === 0) return;
  currentPhotoIndex = (currentPhotoIndex + 1) % folder.photos.length;
  renderModalPhoto();
  updateActiveThumbnail();
};

window.prevPhoto = function () {
  const folder = CARPETAS_DATA[currentFolderKey];
  if (!folder || !folder.photos || folder.photos.length === 0) return;
  currentPhotoIndex = (currentPhotoIndex - 1 + folder.photos.length) % folder.photos.length;
  renderModalPhoto();
  updateActiveThumbnail();
};

window.goToPhoto = function (index) {
  const folder = CARPETAS_DATA[currentFolderKey];
  if (!folder || !folder.photos || index < 0 || index >= folder.photos.length) return;
  currentPhotoIndex = index;
  renderModalPhoto();
  updateActiveThumbnail();
};

// RENDERIZA LA FOTO ACTUAL EN EL MODAL
function renderModalPhoto() {
  const folder = CARPETAS_DATA[currentFolderKey];
  if (!folder || !folder.photos || folder.photos.length === 0) return;

  const photo = folder.photos[currentPhotoIndex];
  const imgEl = document.getElementById("lightbox-img");
  const captionEl = document.getElementById("lightbox-caption");
  const counterEl = document.getElementById("lightbox-counter");

  if (imgEl && photo) {
    imgEl.src = photo.src;
    imgEl.alt = photo.title || "Fotografía Gabriel EM";
  }

  if (captionEl && photo) {
    captionEl.innerHTML = `<strong>${photo.title}</strong><br><span>${photo.sub}</span>`;
  }

  if (counterEl) {
    const padCurrent = String(currentPhotoIndex + 1).padStart(2, "0");
    const padTotal = String(folder.photos.length).padStart(2, "0");
    counterEl.textContent = `FOTOGRAMA ${padCurrent} / ${padTotal}`;
  }
}

// RENDERIZA LA TIRA INFERIOR DE MINIATURAS
function renderThumbnailsStrip() {
  const stripEl = document.getElementById("lightbox-thumbs-strip");
  if (!stripEl) return;

  const folder = CARPETAS_DATA[currentFolderKey];
  if (!folder || !folder.photos) return;

  stripEl.innerHTML = "";
  folder.photos.forEach((photo, idx) => {
    const thumb = document.createElement("button");
    thumb.className = `modal-thumb-btn ${idx === currentPhotoIndex ? "active" : ""}`;
    thumb.setAttribute("aria-label", `Ir a fotograma ${idx + 1}`);
    thumb.onclick = (e) => {
      e.stopPropagation();
      window.goToPhoto(idx);
    };

    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.title;
    img.loading = "lazy";

    thumb.appendChild(img);
    stripEl.appendChild(thumb);
  });

  scrollThumbnailIntoView();
}

function updateActiveThumbnail() {
  const stripEl = document.getElementById("lightbox-thumbs-strip");
  if (!stripEl) return;

  const thumbs = stripEl.querySelectorAll(".modal-thumb-btn");
  thumbs.forEach((th, idx) => {
    if (idx === currentPhotoIndex) {
      th.classList.add("active");
    } else {
      th.classList.remove("active");
    }
  });

  scrollThumbnailIntoView();
}

function scrollThumbnailIntoView() {
  const stripEl = document.getElementById("lightbox-thumbs-strip");
  if (!stripEl) return;
  const activeThumb = stripEl.querySelector(".modal-thumb-btn.active");
  if (activeThumb) {
    activeThumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }
}

// DESPLAZAMIENTO SUAVE DEL CARRETE DE FOTOS 35MM
window.scrollFilmstrip = function (direction) {
  const reel = document.getElementById("filmstrip-track");
  if (reel) {
    const scrollAmount = reel.clientWidth * 0.75 * direction;
    reel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
};

// GESTIÓN DE EVENTOS DEL DOM
document.addEventListener("DOMContentLoaded", () => {
  // 1. TELÓN DE TRANSICIÓN SUAVE (DESBLOQUEO INMEDIATO)
  const curtain = document.getElementById("page-curtain");
  if (curtain) {
    curtain.classList.remove("active");
    curtain.style.pointerEvents = "none";
  }

  window.addEventListener("pageshow", () => {
    if (curtain) {
      curtain.classList.remove("active");
      curtain.style.pointerEvents = "none";
    }
  });

  // 2. FLECHAS DE TECLADO Y ESCAPE
  window.addEventListener("keydown", (e) => {
    const modal = document.getElementById("folder-lightbox");
    if (!modal || !modal.classList.contains("active")) return;

    if (e.key === "Escape") {
      window.closeLightbox();
    } else if (e.key === "ArrowRight") {
      window.nextPhoto();
    } else if (e.key === "ArrowLeft") {
      window.prevPhoto();
    }
  });

  // 3. SOPORTE DE GESTOS TÁCTILES (SWIPE EN MÓVILES)
  const modalStage = document.getElementById("lightbox-stage");
  if (modalStage) {
    let touchStartX = 0;
    let touchStartY = 0;

    modalStage.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    modalStage.addEventListener("touchend", (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {
        if (diffX < 0) {
          window.nextPhoto();
        } else {
          window.prevPhoto();
        }
      }
    }, { passive: true });
  }

  // 4. ARRASTRE CON EL MOUSE EN EL CARRETE 35MM (DRAG TO SCROLL EN ESCRITORIO)
  const reelTrack = document.getElementById("filmstrip-track");
  if (reelTrack) {
    let isDown = false;
    let startX;
    let scrollLeft;

    reelTrack.addEventListener("mousedown", (e) => {
      isDown = true;
      reelTrack.classList.add("dragging");
      startX = e.pageX - reelTrack.offsetLeft;
      scrollLeft = reelTrack.scrollLeft;
    });

    reelTrack.addEventListener("mouseleave", () => {
      isDown = false;
      reelTrack.classList.remove("dragging");
    });

    reelTrack.addEventListener("mouseup", () => {
      isDown = false;
      reelTrack.classList.remove("dragging");
    });

    reelTrack.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - reelTrack.offsetLeft;
      const walk = (x - startX) * 1.6;
      reelTrack.scrollLeft = scrollLeft - walk;
    });
  }

  // 5. ANIMACIONES DE REVELADO EDITORIAL AL ESCROLEAR (INTERSECTION OBSERVER)
  const revealElements = document.querySelectorAll(".reveal-on-scroll, .reveal-photo");
  if (revealElements.length > 0) {
    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.12
      });

      revealElements.forEach(el => revealObserver.observe(el));
    } else {
      // Fallback para navegadores antiguos
      revealElements.forEach(el => el.classList.add("revealed"));
    }
  }

  // 6. OBTURADOR DE CÁMARA A GRAN ESCALA: SE CIERRA DESDE LOS BORDES Y REVELA LA PÁGINA
  const shutterOverlay = document.getElementById("camera-shutter");
  if (shutterOverlay) {
    shutterOverlay.classList.add("closing");

    setTimeout(() => {
      shutterOverlay.classList.remove("closing");
      shutterOverlay.classList.add("opening");

      setTimeout(() => {
        shutterOverlay.classList.remove("opening");
      }, 680);
    }, 240);
  }

  // 7. TRANSICIÓN CON OBTURADOR DE PALETAS AL NAVEGAR HACIA OTRA PÁGINA
  document.querySelectorAll(".page-transition-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const href = btn.getAttribute("href");
      if (href && href !== "#" && !href.startsWith("#")) {
        e.preventDefault();
        const shutter = document.getElementById("camera-shutter");
        if (shutter) {
          shutter.classList.add("closing");
        }
        if (curtain) {
          curtain.style.pointerEvents = "auto";
          curtain.classList.add("active");
        }
        setTimeout(() => {
          window.location.href = href;
        }, 340);
      }
    });
  });

  // 8. BOTÓN VOLVER ARRIBA
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    backToTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
