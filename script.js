// ── LISTA DE FOTOS ──
// Reemplaza estos URLs con los links DIRECTOS de tus fotos de postimg
// (el link directo termina en .jpg, no en postimg.cc/xxxxx)
// Para obtenerlo: entra a cada link de postimg, clic derecho en la foto → "Copiar dirección de imagen"
const fotos = [
  "https://i.postimg.cc/nCSnMJ3J/foto1.jpg",   // ← Reemplaza con tu URL directa
  "https://i.postimg.cc/2V9C3D2g/foto2.jpg",
  "https://i.postimg.cc/7ftqbkKv/foto3.jpg",
  "https://i.postimg.cc/w7493p0S/foto4.jpg",
  "https://i.postimg.cc/qNt435F4/foto5.jpg",
  "https://i.postimg.cc/yDJsZbG1/foto6.jpg",
  "https://i.postimg.cc/CRZSqQ2K/foto7.jpg",
  "https://i.postimg.cc/dh7wyxf1/foto8.jpg",
  "https://i.postimg.cc/687tvmP2/foto9.jpg",
  "https://i.postimg.cc/gxfdqK93/foto10.jpg",
  "https://i.postimg.cc/yDwBXTq9/foto11.jpg",
  "https://i.postimg.cc/w1SHckK5/foto12.jpg",
  // Agrega todas las demás aquí...
];

const CELDAS = 12; // 4 columnas × 3 filas
const INTERVALO_MS = 3000; // cada cuánto cambia una foto (ms)

// ── CONSTRUIR EL COLLAGE ──
const collage = document.getElementById('collage');
const celdas = [];

// Mezclar array aleatoriamente
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

const fotosIniciales = shuffle(fotos);

for (let i = 0; i < CELDAS; i++) {
  const cell = document.createElement('div');
  cell.classList.add('collage-cell');

  const img = document.createElement('img');
  img.src = fotosIniciales[i % fotos.length];
  img.alt = '';

  cell.appendChild(img);
  collage.appendChild(cell);
  celdas.push({ cell, img, currentIndex: i % fotos.length });
}

// ── ANIMACIÓN DE CAMBIO CON FADE ──
let turno = 0;

function cambiarFoto() {
  const celda = celdas[turno % CELDAS];

  // Fade out
  celda.img.classList.add('fade-out');
  celda.img.classList.remove('fade-in');

  setTimeout(() => {
    // Cambiar imagen
    celda.currentIndex = (celda.currentIndex + CELDAS) % fotos.length;
    // Asegura que no repita la misma foto en celdas cercanas
    let nextIndex = (celda.currentIndex + Math.floor(Math.random() * fotos.length)) % fotos.length;
    celda.img.src = fotos[nextIndex];
    celda.currentIndex = nextIndex;

    // Fade in
    celda.img.classList.remove('fade-out');
    celda.img.classList.add('fade-in');
  }, 600);

  turno++;
}

// Iniciar ciclo
setInterval(cambiarFoto, INTERVALO_MS);
