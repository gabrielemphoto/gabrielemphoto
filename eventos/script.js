document.addEventListener("DOMContentLoaded", () => {

  // 1. SCROLL SUAVE
  const enlacesMenu = document.querySelectorAll('nav ul li a[href^="#"]');
  enlacesMenu.forEach(enlace => {
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
    imgModal.onload = () => {
      cargando.style.display = 'none';
      imgModal.style.opacity = '1';
    };
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

  // 4. MODAL PLANES
  const planData = {
    basico: {
      title: 'Sesión Básica',
      price: '$50',
      detalles: 'Ideal para contenido de redes sociales, retratos rápidos o mini sesiones.',
      incluye: ['1 Hora de cobertura', '20 Fotografías editadas en alta resolución', '1 Locación a elección', 'Entrega en 48–72 horas'],
      terminos: ['50% de adelanto para reservar la fecha.', 'Reprogramación sin costo si avisas con 24h de anticipación.'],
      msg: 'Hola Gabriel, me interesa la Sesión Básica ($50). ¿Tienes disponibilidad?'
    },
    premium: {
      title: 'Paquete Premium',
      price: '$150',
      detalles: 'El paquete más completo para sesiones de impacto, eventos o contenido de marca personal.',
      incluye: ['3 Horas de cobertura', '50 Fotografías editadas en alta resolución', 'Múltiples locaciones', 'Asesoramiento y dirección de cámara', 'Entrega express en 48 horas'],
      terminos: ['50% de adelanto para reservar la fecha.', 'Reprogramación sin costo si avisas con 24h de anticipación.'],
      msg: 'Hola Gabriel, me interesa el Paquete Premium ($150). ¿Tienes disponibilidad?'
    }
  };

  const planModal      = document.getElementById('plan-modal');
  const closePlanModal = document.getElementById('close-plan-modal');
  const modalTitle     = document.getElementById('modal-plan-title');
  const modalDetails   = document.getElementById('modal-plan-details');
  const modalWaBtn     = document.getElementById('modal-wa-btn');
  const marqueeTrack   = document.getElementById('marquee-track');

  // Duplicar marquee para loop infinito
  if (marqueeTrack) marqueeTrack.innerHTML += marqueeTrack.innerHTML;

  document.querySelectorAll('.open-plan-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const plan = planData[btn.dataset.plan];
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
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && planModal.classList.contains('active')) cerrarPlanModal(); });

});
