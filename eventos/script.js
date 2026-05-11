document.addEventListener("DOMContentLoaded", () => {

  // 1. SCROLL SUAVE
  document.querySelectorAll('nav ul li a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute('href'));
      if (destino) window.scrollTo({ top: destino.offsetTop - 65, behavior: 'smooth' });
    });
  });

  // 2. LIGHTBOX
  const imagenesGaleria = document.querySelectorAll('.galeria-trigger');
  let imagenesActuales = [];
  let indiceActual = 0;

  const modalLightbox = document.createElement('div');
  modalLightbox.classList.add('lightbox-modal');
  modalLightbox.innerHTML = `
    <span class="cerrar-modal">×</span>
    <span class="cargando">Cargando...</span>
    <img src="" alt="Imagen ampliada"/>
    <span class="flecha-izq">❮</span>
    <span class="flecha-der">❯</span>
    <div class="contador-modal"></div>
  `;
  document.body.appendChild(modalLightbox);

  const imgModal      = modalLightbox.querySelector('img');
  const cerrarModal   = modalLightbox.querySelector('.cerrar-modal');
  const flechaIzq     = modalLightbox.querySelector('.flecha-izq');
  const flechaDer     = modalLightbox.querySelector('.flecha-der');
  const contadorModal = modalLightbox.querySelector('.contador-modal');
  const cargando      = modalLightbox.querySelector('.cargando');

  function abrirLightbox(index) {
    indiceActual = index;
    cargando.style.display = 'block';
    imgModal.style.opacity = '0';
    modalLightbox.style.display = 'flex';
    setTimeout(() => { modalLightbox.style.opacity = '1'; }, 10);
    imgModal.src = imagenesActuales[indiceActual];
    imgModal.onload = () => { cargando.style.display = 'none'; imgModal.style.opacity = '1'; };
    contadorModal.textContent = `${indiceActual + 1} / ${imagenesActuales.length}`;
    document.body.style.overflow = 'hidden';
  }

  function cerrarLightbox() {
    modalLightbox.style.opacity = '0';
    setTimeout(() => { modalLightbox.style.display = 'none'; }, 300);
    document.body.style.overflow = '';
  }

  imagenesGaleria.forEach((item, i) => {
    imagenesActuales.push(item.dataset.src || item.querySelector('img').src);
    item.addEventListener('click', () => abrirLightbox(i));
  });

  cerrarModal.addEventListener('click', cerrarLightbox);
  modalLightbox.addEventListener('click', e => { if (e.target === modalLightbox) cerrarLightbox(); });
  flechaIzq.addEventListener('click', () => { indiceActual = (indiceActual - 1 + imagenesActuales.length) % imagenesActuales.length; abrirLightbox(indiceActual); });
  flechaDer.addEventListener('click', () => { indiceActual = (indiceActual + 1) % imagenesActuales.length; abrirLightbox(indiceActual); });
  document.addEventListener('keydown', e => {
    if (modalLightbox.style.display === 'flex') {
      if (e.key === 'ArrowLeft')  flechaIzq.click();
      if (e.key === 'ArrowRight') flechaDer.click();
      if (e.key === 'Escape')     cerrarLightbox();
    }
  });

  // 3. ACORDEÓN
  document.querySelectorAll('.accordion-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const item    = btn.closest('.accordion-item');
      const content = item.querySelector('.accordion-content');
      const isOpen  = item.classList.contains('active');
      document.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.accordion-content').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // 4. DATOS DE PLANES CON FOTOS POR CATEGORÍA
  const fotosPorPlan = {
    xv: [
      'https://i.postimg.cc/dVw3HQdL/IMG-3799.jpg',
      'https://i.postimg.cc/pLRrGV8V/IMG-3802.jpg',
      'https://i.postimg.cc/HkdnZW5L/IMG-3806.jpg',
      'https://i.postimg.cc/W1TzWprb/IMG-3808.jpg',
      'https://i.postimg.cc/sgmXtF9Q/IMG-3810.jpg',
      'https://i.postimg.cc/y8jdwqXZ/IMG-3817.jpg',
      'https://i.postimg.cc/x15CWryL/IMG-3822.jpg',
      'https://i.postimg.cc/bJDwDZX9/IMG-3909.jpg',
      'https://i.postimg.cc/hjztzXFr/IMG-3915.jpg',
      'https://i.postimg.cc/52g0Zcq3/IMG-3834.jpg',
      'https://i.postimg.cc/3wwRhLnf/IMG-3836.jpg',
      'https://i.postimg.cc/q77Rrmjm/IMG-3838.jpg',
      'https://i.postimg.cc/MGGTwsdL/IMG-3856.jpg',
      'https://i.postimg.cc/g00JpMN1/IMG-3865.jpg',
      'https://i.postimg.cc/HLPLkQhh/IMG-3871.jpg',
      'https://i.postimg.cc/3wbwxgqN/IMG-3874.jpg',
      'https://i.postimg.cc/7LQLZgRk/IMG-3881.jpg',
      'https://i.postimg.cc/ZqDq5rQR/IMG-3884.jpg',
      'https://i.postimg.cc/qRhvhNfh/IMG-3891.jpg',
      'https://i.postimg.cc/pThLhmNK/IMG-3901.jpg',
      'https://i.postimg.cc/y8jdwqXF/IMG-3829.jpg'
    ],
    graduacion: [
      'https://i.postimg.cc/y6RN73Xw/IMG-4044.jpg',
      'https://i.postimg.cc/XN5vnBk3/IMG-4046.jpg',
      'https://i.postimg.cc/ZKh5nYwV/IMG-4051.jpg',
      'https://i.postimg.cc/Gh1mt3Xc/IMG-4054.jpg',
      'https://i.postimg.cc/WbP1zp5S/IMG-4057.jpg',
      'https://i.postimg.cc/SN7NM0P7/IMG-4058.jpg',
      'https://i.postimg.cc/hPbPdFwB/IMG-4062.jpg',
      'https://i.postimg.cc/GmXLXFdK/IMG-4067.jpg',
      'https://i.postimg.cc/FHTrTyNn/IMG-4071.jpg',
      'https://i.postimg.cc/vmDQk4ZK/IMG-4072.jpg',
      'https://i.postimg.cc/nLMHgXhy/IMG-4080.jpg',
      'https://i.postimg.cc/vmjQsG14/IMG-4083.jpg',
      'https://i.postimg.cc/XJCnNtFP/IMG-4087.jpg',
      'https://i.postimg.cc/Xq64rxc1/IMG-4089.jpg',
      'https://i.postimg.cc/Hn1dr39D/IMG-4092.jpg'
    ],
    premium: [
      'https://i.postimg.cc/nhrbc6fX/IMG-7742.jpg',
      'https://i.postimg.cc/wjM8TSYh/IMG-7788.jpg',
      'https://i.postimg.cc/3xN5JPQp/IMG-7840.jpg',
      'https://i.postimg.cc/FHz5s2X0/IMG-7858.jpg',
      'https://i.postimg.cc/NjFqfWvx/IMG-7893.jpg',
      'https://i.postimg.cc/52ydNZWP/IMG-7960.jpg',
      'https://i.postimg.cc/FH6tfDh0/IMG-7973.jpg',
      'https://i.postimg.cc/JzFwyPR3/IMG-8059.jpg',
      'https://i.postimg.cc/nhW8s0n0/IMG-8066.jpg',
      'https://i.postimg.cc/VkhySDzp/IMG-8083-Mi-exportansion-2.jpg',
      'https://i.postimg.cc/Gmf0BqbN/IMG-8103.jpg',
      'https://i.postimg.cc/RZYr3Xv2/IMG-8123.jpg',
      'https://i.postimg.cc/VkhySDzx/IMG-8199.jpg',
      'https://i.postimg.cc/MpLkcdWw/IMG-8217.jpg',
      'https://i.postimg.cc/6Q4kCnQS/IMG-8237.jpg',
      'https://i.postimg.cc/FKkM03KM/IMG-8247.jpg',
      'https://i.postimg.cc/HL8qbXLf/IMG-8272.jpg'
    ]
  };

  const planData = {
    xv: {
      title: 'Plan XV Años',
      price: '€60',
      detalles: 'Una sesión diseñada especialmente para celebrar tus quince con elegancia y emoción en múltiples locaciones.',
      incluye: [
        '2 Horas de cobertura',
        '15 Fotografías editadas en alta resolución',
        'Varias locaciones a elección',
        'Dirección de poses profesional',
        'Entrega en 72 horas'
      ],
      terminos: [
        '50% de adelanto para reservar la fecha.',
        'Reprogramación sin costo si avisas con 24h de anticipación.'
      ],
      msg: 'Hola Gabriel, me interesa el Plan XV Años (€60). ¿Tienes disponibilidad?'
    },
    graduacion: {
      title: 'Plan Graduación',
      price: '€50',
      detalles: 'Captura el logro más importante hasta ahora con estilo, en dos locaciones y dos outfits distintos.',
      incluye: [
        '2 Horas de cobertura',
        '15 Fotografías editadas en alta resolución',
        '2 Locaciones a elección',
        '2 Cambios de ropa',
        'Dirección de poses profesional',
        'Entrega en 72 horas'
      ],
      terminos: [
        '50% de adelanto para reservar la fecha.',
        'Reprogramación sin costo si avisas con 24h de anticipación.'
      ],
      msg: 'Hola Gabriel, me interesa el Plan Graduación (€50). ¿Tienes disponibilidad?'
    },
    premium: {
      title: 'Sesión Premium',
      price: '€100',
      detalles: 'La experiencia fotográfica más completa: dirección creativa, múltiples locaciones y tres outfits para un resultado de nivel editorial.',
      incluye: [
        '3 Horas de cobertura',
        '20 Fotografías editadas en alta resolución',
        'Varias locaciones a elección',
        '3 Cambios de ropa',
        'Dirección creativa completa',
        'Entrega en 48 horas'
      ],
      terminos: [
        '50% de adelanto para reservar la fecha.',
        'Reprogramación sin costo si avisas con 24h de anticipación.'
      ],
      msg: 'Hola Gabriel, me interesa la Sesión Premium (€100). ¿Tienes disponibilidad?'
    }
  };

  const planModal      = document.getElementById('plan-modal');
  const closePlanModal = document.getElementById('close-plan-modal');
  const modalTitle     = document.getElementById('modal-plan-title');
  const modalDetails   = document.getElementById('modal-plan-details');
  const modalWaBtn     = document.getElementById('modal-wa-btn');
  const marqueeTrack   = document.getElementById('marquee-track');

  document.querySelectorAll('.open-plan-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const key  = btn.dataset.plan;
      const plan = planData[key];
      const fotos = fotosPorPlan[key] || [];
      if (!plan) return;

      modalTitle.textContent = `${plan.title} — ${plan.price}`;
      modalDetails.innerHTML = `
        <h4>Descripción</h4>
        <p>${plan.detalles}</p>
        <h4>Incluye</h4>
        ${plan.incluye.map(i => `<p>✓ ${i}</p>`).join('')}
        <h4>Términos</h4>
        <div class="terms-text">
          ${plan.terminos.map(t => `<p>${t}</p>`).join('')}
        </div>
      `;
      modalWaBtn.href = `https://wa.me/584123590065?text=${encodeURIComponent(plan.msg)}`;

      // Construir marquee con fotos reales del plan (duplicadas para loop)
      const fotosDobles = [...fotos, ...fotos];
      marqueeTrack.innerHTML = fotosDobles
        .map(src => `<img src="${src}" alt="" loading="lazy"/>`)
        .join('');

      planModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function cerrarPlanModal() {
    planModal.classList.remove('active');
    document.body.style.overflow = '';
  }
  closePlanModal.addEventListener('click', cerrarPlanModal);
  planModal.addEventListener('click', e => { if (e.target === planModal) cerrarPlanModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && planModal.classList.contains('active')) cerrarPlanModal();
  });

});
