document.addEventListener("DOMContentLoaded", () => {

  // 1. SCROLL SUAVE
  document.querySelectorAll('nav ul li a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute('href'));
      if (destino) window.scrollTo({ top: destino.offsetTop - 65, behavior: 'smooth' });
    });
  });

  // 2. LIGHTBOX CON GALERÍAS POR CATEGORÍA
  const galeriasPorCategoria = {
    editorial: [
      'https://i.postimg.cc/nhrbc6fX/IMG-7742.jpg',
      'https://i.postimg.cc/wjM8TSYh/IMG-7788.jpg',
      'https://i.postimg.cc/3xN5JPQp/IMG-7840.jpg',
      'https://i.postimg.cc/FHz5s2X0/IMG-7858.jpg',
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
    ],
    xv: [
      'https://i.postimg.cc/dVw3HQdL/IMG-3799.jpg',
      'https://i.postimg.cc/pLRrGV8V/IMG-3802.jpg',
      'https://i.postimg.cc/HkdnZW5L/IMG-3806.jpg',
      'https://i.postimg.cc/W1TzWprb/IMG-3808.jpg',
      'https://i.postimg.cc/sgmXtF9Q/IMG-3810.jpg',
      'https://i.postimg.cc/y8jdwqXZ/IMG-3817.jpg',
      'https://i.postimg.cc/x15CWryL/IMG-3822.jpg',
      'https://i.postimg.cc/y8jdwqXF/IMG-3829.jpg',
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
      'https://i.postimg.cc/bJDwDZX9/IMG-3909.jpg',
      'https://i.postimg.cc/hjztzXFr/IMG-3915.jpg'
    ],
    bodas: [
      'https://i.postimg.cc/tCXG8srP/IMG-0045.jpg',
      'https://i.postimg.cc/BQqfRjhM/IMG-0080.jpg',
      'https://i.postimg.cc/X7V6tr2T/IMG-0087.jpg',
      'https://i.postimg.cc/SNybHnZv/IMG-0125.jpg',
      'https://i.postimg.cc/rF827Dn6/IMG-0145.jpg',
      'https://i.postimg.cc/c4XGWd2q/IMG-0300.jpg',
      'https://i.postimg.cc/SNDb4m3K/IMG-0608.jpg'
    ],
    bautizos: [
      'https://i.postimg.cc/8kfx3hBJ/IMG-2596.jpg',
      'https://i.postimg.cc/J7HSgbcN/IMG-2623.jpg',
      'https://i.postimg.cc/jqnB9zQQ/IMG-2624.jpg',
      'https://i.postimg.cc/WpqxKM6w/IMG-2688.jpg',
      'https://i.postimg.cc/QNKvPpkf/IMG-2698.jpg',
      'https://i.postimg.cc/L6dGMnNV/IMG-2718.jpg',
      'https://i.postimg.cc/5NcDM6nK/IMG-2721.jpg',
      'https://i.postimg.cc/YqcTwhbR/IMG-3304.jpg',
      'https://i.postimg.cc/c4qPNrXF/IMG-3306.jpg'
    ],
    retratos: [
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
      'https://i.postimg.cc/Hn1dr39D/IMG-4092.jpg',
      'https://i.postimg.cc/VvPmJ4WL/IMG-4102.jpg',
      'https://i.postimg.cc/D03nS5Pz/IMG-4111.jpg',
      'https://i.postimg.cc/2yNr1T7y/IMG-4113.jpg',
      'https://i.postimg.cc/vTwb4Xt4/IMG-4119.jpg',
      'https://i.postimg.cc/XqK3dFsY/IMG-4122.jpg',
      'https://i.postimg.cc/tJdyWPBJ/IMG-4126.jpg',
      'https://i.postimg.cc/Fzbm3cT7/IMG-4129.jpg',
      'https://i.postimg.cc/PJbhYZSD/IMG-4130.jpg',
      'https://i.postimg.cc/9Xyc65ch/IMG-4137.jpg',
      'https://i.postimg.cc/FF0hM5hr/IMG-4138.jpg',
      'https://i.postimg.cc/MZ1zC2zT/IMG-4141.jpg',
      'https://i.postimg.cc/SQcmBFmQ/IMG-4149.jpg',
      'https://i.postimg.cc/jdKRKgjj/IMG-4154.jpg',
      'https://i.postimg.cc/BQsJsYvB/IMG-4158.jpg',
      'https://i.postimg.cc/J4mRm6hq/IMG-4162.jpg',
      'https://i.postimg.cc/J4mRm6hP/IMG-4165.jpg',
      'https://i.postimg.cc/sgsx6fWN/IMG-4166.jpg',
      'https://i.postimg.cc/90Cs3kBM/IMG-4375-4.jpg',
      'https://i.postimg.cc/qq4WfFGg/IMG-4378.jpg',
      'https://i.postimg.cc/vTbCRKvV/IMG-4381.jpg',
      'https://i.postimg.cc/gjm197K3/IMG-4383.jpg',
      'https://i.postimg.cc/Rh42rYTQ/IMG-4383-2.jpg',
      'https://i.postimg.cc/vThkGvP1/IMG-4386.jpg',
      'https://i.postimg.cc/nr2gn1dQ/IMG-4387.jpg',
      'https://i.postimg.cc/VvgpzF7t/IMG-4392.jpg',
      'https://i.postimg.cc/0jnF9Ctm/IMG-4396.jpg',
      'https://i.postimg.cc/fyCpMvHf/IMG-4397.jpg',
      'https://i.postimg.cc/d36pJ9W6/IMG-4399.jpg',
      'https://i.postimg.cc/MH5NzYst/IMG-4403.jpg',
      'https://i.postimg.cc/3N1V3ZLt/IMG-4409.jpg',
      'https://i.postimg.cc/VvgpzF7G/IMG-4412.jpg',
      'https://i.postimg.cc/3N1V3ZLP/IMG-4430.jpg',
      'https://i.postimg.cc/ryNvG88F/IMG-4431.jpg',
      'https://i.postimg.cc/C57Xw4v3/IMG-4432.jpg',
      'https://i.postimg.cc/v8tp7QQQ/IMG-4434.jpg'
    ]
  };

  let imagenesActuales = [];
  let indiceActual = 0;

  // ELIMINAR CUALQUIER LIGHTBOX PREVIO POR SEGURIDAD
  const viejoLightbox = document.getElementById('lightbox');
  if(viejoLightbox) viejoLightbox.remove();

  // CREAR EL NUEVO LIGHTBOX DINÁMICAMENTE
  const modalLightbox = document.createElement('div');
  modalLightbox.classList.add('lightbox-modal');
  modalLightbox.style.cssText = "display: none; position: fixed; inset: 0; z-index: 999999; justify-content: center; align-items: center; background: rgba(0,0,0,0.96); opacity: 0; transition: opacity 0.3s ease;";
  modalLightbox.innerHTML = `
    <span class="cerrar-modal" style="position: absolute; top: 20px; right: 30px; color: white; font-size: 40px; cursor: pointer; z-index: 10001;">&times;</span>
    <span class="cargando" style="position: absolute; color: white; font-size: 1.2rem; display: none;">Cargando...</span>
    <img src="" alt="Imagen ampliada" style="max-width: 90%; max-height: 85vh; border-radius: 5px; box-shadow: 0 0 40px rgba(0,0,0,0.5); object-fit: contain;"/>
    <span class="flecha-izq" style="position: absolute; left: 20px; top: 50%; color: white; font-size: 40px; cursor: pointer; z-index: 10001; background: rgba(0,0,0,0.5); padding: 10px; border-radius: 8px;">&#10094;</span>
    <span class="flecha-der" style="position: absolute; right: 20px; top: 50%; color: white; font-size: 40px; cursor: pointer; z-index: 10001; background: rgba(0,0,0,0.5); padding: 10px; border-radius: 8px;">&#10095;</span>
    <div class="contador-modal" style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); color: white; font-size: 1rem; background: rgba(0,0,0,0.5); padding: 5px 15px; border-radius: 20px;"></div>
  `;
  document.body.appendChild(modalLightbox);

  const imgModal      = modalLightbox.querySelector('img');
  const cerrarModalBtn = modalLightbox.querySelector('.cerrar-modal');
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

  // ABRIR GALERÍA AL HACER CLIC
  document.querySelectorAll('.galeria-trigger').forEach(item => {
    item.addEventListener('click', () => {
      const cat = item.dataset.categoria;
      imagenesActuales = galeriasPorCategoria[cat] || [item.dataset.src || item.querySelector('img').src];
      abrirLightbox(0);
    });
  });

  // EVENTOS DEL LIGHTBOX
  cerrarModalBtn.addEventListener('click', cerrarLightbox);
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
    xv: galeriasPorCategoria.xv,
    graduacion: galeriasPorCategoria.retratos,
    premium: galeriasPorCategoria.editorial
  };

  const planData = {
    xv: {
      title: 'Plan XV Años', price: '€60',
      detalles: 'Una sesión diseñada especialmente para celebrar tus quince con elegancia y emoción en múltiples locaciones.',
      incluye: ['2 Horas de cobertura','15 Fotografías editadas en alta resolución','Varias locaciones a elección','Dirección de poses profesional','Entrega en 72 horas'],
      terminos: ['50% de adelanto para reservar la fecha.','Reprogramación sin costo si avisas con 24h de anticipación.'],
      msg: 'Hola Gabriel, me interesa el Plan XV Años (€60). ¿Tienes disponibilidad?'
    },
    graduacion: {
      title: 'Plan Graduación', price: '€50',
      detalles: 'Captura el logro más importante hasta ahora con estilo, en dos locaciones y dos outfits distintos.',
      incluye: ['2 Horas de cobertura','15 Fotografías editadas en alta resolución','2 Locaciones a elección','2 Cambios de ropa','Dirección de poses profesional','Entrega en 72 horas'],
      terminos: ['50% de adelanto para reservar la fecha.','Reprogramación sin costo si avisas con 24h de anticipación.'],
      msg: 'Hola Gabriel, me interesa el Plan Graduación (€50). ¿Tienes disponibilidad?'
    },
    premium: {
      title: 'Sesión Premium', price: '€100',
      detalles: 'La experiencia fotográfica más completa: dirección creativa, múltiples locaciones y tres outfits para un resultado de nivel editorial.',
      incluye: ['3 Horas de cobertura','20 Fotografías editadas en alta resolución','Varias locaciones a elección','3 Cambios de ropa','Dirección creativa completa','Entrega en 48 horas'],
      terminos: ['50% de adelanto para reservar la fecha.','Reprogramación sin costo si avisas con 24h de anticipación.'],
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
      const key   = btn.dataset.plan;
      const plan  = planData[key];
      const fotos = fotosPorPlan[key] || [];
      if (!plan) return;
      modalTitle.textContent = `${plan.title} — ${plan.price}`;
      modalDetails.innerHTML = `
        <h4>Descripción</h4><p>${plan.detalles}</p>
        <h4>Incluye</h4>${plan.incluye.map(i => `<p>✓ ${i}</p>`).join('')}
        <h4>Términos</h4>
        <div class="terms-text">${plan.terminos.map(t => `<p>${t}</p>`).join('')}</div>
      `;
      modalWaBtn.href = `https://wa.me/584123590065?text=${encodeURIComponent(plan.msg)}`;
      
      // Llenar el marquee de fotos
      marqueeTrack.innerHTML = [...fotos, ...fotos]
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
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && planModal.classList.contains('active')) cerrarPlanModal(); });

});
