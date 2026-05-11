// ====== COLLAGE EN BLOQUES ======
const fotosHorizontales = [
  "https://i.postimg.cc/4xtpZgRS/IMG-0045.jpg", "https://i.postimg.cc/GmYvrCnN/IMG-0052.jpg", "https://i.postimg.cc/Sx8cqhbH/IMG-0059.jpg",
  "https://i.postimg.cc/Bv0HnVJw/IMG-0080.jpg", "https://i.postimg.cc/Bv0HnVJy/IMG-0083.jpg", "https://i.postimg.cc/jjbPSFRB/IMG-0125.jpg",
  "https://i.postimg.cc/wMvhdR9y/IMG-0168.jpg", "https://i.postimg.cc/Bb6xGPJF/IMG-0177.jpg", "https://i.postimg.cc/NFM1w2Q6/IMG-0206.jpg",
  "https://i.postimg.cc/6q3dN4BY/IMG-0208.jpg", "https://i.postimg.cc/zfrKGcJ8/IMG-0216.jpg", "https://i.postimg.cc/DzTLwM2z/IMG-0291.jpg",
  "https://i.postimg.cc/N0cmjzg5/IMG-0300.jpg", "https://i.postimg.cc/hGBTt5SJ/IMG-0322.jpg", "https://i.postimg.cc/Jh5JD5nr/IMG-0326.jpg",
  "https://i.postimg.cc/jj4Nw45C/IMG-0349.jpg", "https://i.postimg.cc/5yR899tm/IMG-0509.jpg", "https://i.postimg.cc/MGmRMmTM/IMG-0608.jpg",
  "https://i.postimg.cc/QMJ59Jt7/IMG-1146.jpg", "https://i.postimg.cc/vmt9gtB9/IMG-1188.jpg", "https://i.postimg.cc/N0kT9kM7/IMG-1260.jpg",
  "https://i.postimg.cc/SsQ9WY21/IMG-1289.jpg", "https://i.postimg.cc/V6stj0rg/IMG-1294.jpg", "https://i.postimg.cc/Y92F1LGV/IMG-2471.jpg",
  "https://i.postimg.cc/NFM1w2Q2/IMG-2596.jpg", "https://i.postimg.cc/RhFczJvV/IMG-2596-(2).jpg", "https://i.postimg.cc/Wz3MPqs2/IMG-2612.jpg",
  "https://i.postimg.cc/nzTv5GfX/IMG-2721-(2).jpg", "https://i.postimg.cc/1tMpTr1x/IMG-2732.jpg", "https://i.postimg.cc/MTty4mJJ/IMG-2749.jpg",
  "https://i.postimg.cc/PxfDmvpB/IMG-3327.jpg", "https://i.postimg.cc/mDVQqyW4/IMG-5151-(1).jpg", "https://i.postimg.cc/0jB755Nf/IMG-6231-HDR.jpg",
  "https://i.postimg.cc/vH4Wqnq8/IMG-6234-HDR.jpg", "https://i.postimg.cc/MKnyPBPx/IMG-6246-HDR.jpg", "https://i.postimg.cc/hPX9ymyB/IMG-6249-HDR.jpg",
  "https://i.postimg.cc/m2PQX9Xx/IMG-6252-HDR.jpg", "https://i.postimg.cc/158pCFW2/IMG-6263-HDR.jpg", "https://i.postimg.cc/02zpWSt4/IMG-6273-HDR.jpg",
  "https://i.postimg.cc/DySqjGCj/IMG-6276-HDR.jpg", "https://i.postimg.cc/qMN8bKmL/IMG-6279-HDR.jpg", "https://i.postimg.cc/05WY0nC3/IMG-6291-HDR.jpg",
  "https://i.postimg.cc/2814cWHG/IMG-6299-HDR.jpg", "https://i.postimg.cc/9X8dYbB8/IMG-6306-HDR.jpg", "https://i.postimg.cc/ryn1Nj9Q/IMG-6312-HDR.jpg",
  "https://i.postimg.cc/h4yL1s0b/IMG-6329-HDR.jpg", "https://i.postimg.cc/3xp27TQg/IMG-6437.jpg", "https://i.postimg.cc/136DPQ16/IMG-6442.jpg",
  "https://i.postimg.cc/fT1Y6bpK/IMG-6456.jpg", "https://i.postimg.cc/pX3Kgd48/IMG-6597.jpg", "https://i.postimg.cc/ZKX61q2C/IMG-6623.jpg",
  "https://i.postimg.cc/Gh6vZpV3/IMG-6651.jpg", "https://i.postimg.cc/5ND8ZtTb/IMG-6663.jpg", "https://i.postimg.cc/fT1Y6bpN/IMG-6719.jpg",
  "https://i.postimg.cc/MTZByfMC/IMG-7289.jpg", "https://i.postimg.cc/bJYnQSSc/IMG-7327.jpg", "https://i.postimg.cc/XJN5wBB3/IMG-7354.jpg",
  "https://i.postimg.cc/wxfXQ2kD/IMG-7742.jpg", "https://i.postimg.cc/tRS3NkzV/IMG-7840.jpg", "https://i.postimg.cc/tRS3Nkzs/IMG-7858.jpg",
  "https://i.postimg.cc/2yKnjj6N/IMG-7893.jpg", "https://i.postimg.cc/B6ZFxPP4/IMG-8078.jpg", "https://i.postimg.cc/4ySp44dC/IMG-8083-Mi-exportansion-2.jpg",
  "https://i.postimg.cc/qRBK866k/IMG-8112.jpg", "https://i.postimg.cc/ydfZn6c2/IMG-8114.jpg", "https://i.postimg.cc/0QZp301s/IMG-8123.jpg",
  "https://i.postimg.cc/VvVXssNx/IMG-8217.jpg", "https://i.postimg.cc/brB1YYvK/IMG-8247.jpg", "https://i.postimg.cc/0jB755Nc/IMG-8272.jpg"
];

const fotosVerticales = [
  "https://i.postimg.cc/SRMx8mr7/IMG-0087.jpg", "https://i.postimg.cc/Wzk1rsn7/IMG-0145.jpg", "https://i.postimg.cc/MHQpRzDh/IMG-1235.jpg",
  "https://i.postimg.cc/fyGkgVyD/IMG-1878.jpg", "https://i.postimg.cc/906zND02/IMG-1897.jpg", "https://i.postimg.cc/XqRXDrJR/IMG-1958.jpg",
  "https://i.postimg.cc/C53d6R1Q/IMG-1982.jpg", "https://i.postimg.cc/T1zhHKwN/IMG-1986.jpg", "https://i.postimg.cc/HnqjPrxZ/IMG-2013.jpg",
  "https://i.postimg.cc/L8BhN6Mx/IMG-2468.jpg", "https://i.postimg.cc/XqGp8fVH/IMG-2488-(1).jpg", "https://i.postimg.cc/4xbnBNTB/IMG-2619.jpg",
  "https://i.postimg.cc/6pLTY5Nc/IMG-2624.jpg", "https://i.postimg.cc/2SfVQLgX/IMG-2624-(2).jpg", "https://i.postimg.cc/fRhJcS1K/IMG-2630.jpg",
  "https://i.postimg.cc/4xTm6Hjc/IMG-2638.jpg", "https://i.postimg.cc/x1ScvNB3/IMG-2639.jpg", "https://i.postimg.cc/Mp8v7fgy/IMG-2643.jpg",
  "https://i.postimg.cc/bNnZS9Vb/IMG-2658.jpg", "https://i.postimg.cc/fTdVSfqS/IMG-2663.jpg", "https://i.postimg.cc/ZKNWvxsn/IMG-2683.jpg",
  "https://i.postimg.cc/fTdVSfqR/IMG-2688.jpg", "https://i.postimg.cc/dtChZjNv/IMG-2688-(2).jpg", "https://i.postimg.cc/TYbK5JNX/IMG-2689.jpg",
  "https://i.postimg.cc/TYbK5J7z/IMG-2698.jpg", "https://i.postimg.cc/44qK3SPf/IMG-2698-(2).jpg", "https://i.postimg.cc/J7vyh2xm/IMG-2706.jpg",
  "https://i.postimg.cc/05F6NBnq/IMG-2718.jpg", "https://i.postimg.cc/MZNcGFDN/IMG-2718-(2).jpg", "https://i.postimg.cc/FF8fKBZD/IMG-2726.jpg",
  "https://i.postimg.cc/1R2gzjHT/IMG-2744.jpg", "https://i.postimg.cc/wxZtBGV4/IMG-2752.jpg", "https://i.postimg.cc/C53d6R5L/IMG-2765.jpg",
  "https://i.postimg.cc/XqRXDrqN/IMG-2776.jpg", "https://i.postimg.cc/3Nvxp3B6/IMG-3304.jpg", "https://i.postimg.cc/F1XsVwC5/IMG-3306.jpg",
  "https://i.postimg.cc/c6G4BPkN/IMG-3314.jpg", "https://i.postimg.cc/8sgPmxXS/IMG-3317.jpg", "https://i.postimg.cc/z3YXF42D/IMG-3318.jpg",
  "https://i.postimg.cc/JtC45SYz/IMG-3799.jpg", "https://i.postimg.cc/6QWqSJWV/IMG-3802.jpg", "https://i.postimg.cc/nzMKQSWp/IMG-3806.jpg",
  "https://i.postimg.cc/gJBx8SPw/IMG-3808.jpg", "https://i.postimg.cc/XX67kt1X/IMG-3810.jpg", "https://i.postimg.cc/G9nhx6gH/IMG-3817.jpg",
  "https://i.postimg.cc/nMfcGNSs/IMG-3822.jpg", "https://i.postimg.cc/WtcbwxYq/IMG-3829.jpg", "https://i.postimg.cc/T2pQy1zZ/IMG-3834.jpg",
  "https://i.postimg.cc/66yz7qkk/IMG-3836.jpg", "https://i.postimg.cc/mZtVchxs/IMG-3838.jpg", "https://i.postimg.cc/sfvKB1Fy/IMG-3856.jpg",
  "https://i.postimg.cc/xjcgkqr0/IMG-3865.jpg", "https://i.postimg.cc/wx7Ft3Kj/IMG-3871.jpg", "https://i.postimg.cc/G3HzB90H/IMG-3874.jpg",
  "https://i.postimg.cc/66yz7Ts8/IMG-3881.jpg", "https://i.postimg.cc/QtnF14r9/IMG-3884.jpg", "https://i.postimg.cc/Pf9y1hhZ/IMG-3891.jpg",
  "https://i.postimg.cc/J7vxjmmZ/IMG-3901.jpg", "https://i.postimg.cc/y6tj0BBL/IMG-3909.jpg", "https://i.postimg.cc/7Pd9SDDB/IMG-3915.jpg",
  "https://i.postimg.cc/RVtRR8VX/IMG-4044.jpg", "https://i.postimg.cc/CL8NNtLP/IMG-4046.jpg", "https://i.postimg.cc/L6PTT78F/IMG-4051.jpg",
  "https://i.postimg.cc/3w8N658B/IMG-4054.jpg", "https://i.postimg.cc/XvjqhSj7/IMG-4057.jpg", "https://i.postimg.cc/QM8CPG8C/IMG-4058.jpg",
  "https://i.postimg.cc/CL8NNtxM/IMG-4062.jpg", "https://i.postimg.cc/ncmkk5hr/IMG-4067.jpg", "https://i.postimg.cc/vZdvSz4y/IMG-4071.jpg",
  "https://i.postimg.cc/VkcFHRJN/IMG-4072.jpg", "https://i.postimg.cc/sgRJ0cMM/IMG-4080.jpg", "https://i.postimg.cc/6pNh108C/IMG-4083.jpg",
  "https://i.postimg.cc/wjdkbV15/IMG-4087.jpg", "https://i.postimg.cc/2SFxpZWv/IMG-4089.jpg", "https://i.postimg.cc/RZQTrHtd/IMG-4092.jpg",
  "https://i.postimg.cc/YCfxcWFy/IMG-4102.jpg", "https://i.postimg.cc/8zBb86v9/IMG-4111.jpg", "https://i.postimg.cc/Hk4tGy51/IMG-4113.jpg",
  "https://i.postimg.cc/mrLyTg3J/IMG-4119.jpg", "https://i.postimg.cc/xdf391y0/IMG-4122.jpg", "https://i.postimg.cc/SKSfmx7Q/IMG-4126.jpg",
  "https://i.postimg.cc/7LHnqZML/IMG-4129.jpg", "https://i.postimg.cc/QM8Jjdkt/IMG-4130.jpg", "https://i.postimg.cc/R0SLvZQ6/IMG-4137.jpg",
  "https://i.postimg.cc/bvy9qwH2/IMG-4138.jpg", "https://i.postimg.cc/mrmNkW8k/IMG-4141.jpg", "https://i.postimg.cc/wBwcMY07/IMG-4149.jpg",
  "https://i.postimg.cc/QMfkCZ09/IMG-4154.jpg", "https://i.postimg.cc/FKTgzXDk/IMG-4158.jpg", "https://i.postimg.cc/250FyN2Q/IMG-4162.jpg",
  "https://i.postimg.cc/0NVdj1cG/IMG-4165.jpg", "https://i.postimg.cc/W456zcX5/IMG-4166.jpg", "https://i.postimg.cc/y8XWvYzM/IMG-4375.jpg",
  "https://i.postimg.cc/YCfjbqHK/IMG-4383-2.jpg", "https://i.postimg.cc/3xCWnJTH/IMG-4396.jpg", "https://i.postimg.cc/52qjnNVb/IMG-4399.jpg",
  "https://i.postimg.cc/zGS30Xrq/IMG-4409.jpg", "https://i.postimg.cc/qvXgjMTv/IMG-4430.jpg", "https://i.postimg.cc/QdkV0x3V/IMG-4432.jpg"
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const collageEl = document.getElementById('collage');
if (collageEl) {
  const FILAS = 3;
  const patronFila = ['V', 'H', 'V', 'H', 'V'];
  const INTERVALO = 2500; // Lo hicimos un poco más lento para que la transición se aprecie
  const celdas = [];
  
  let fotosH = shuffle(fotosHorizontales);
  let fotosV = shuffle(fotosVerticales);

  for (let r = 0; r < FILAS; r++) {
    for (let i = 0; i < patronFila.length; i++) {
      const cell = document.createElement('div');
      const tipo = patronFila[i]; 
      
      cell.classList.add('collage-cell', `cell-${tipo.toLowerCase()}`);

      const imgInicial = tipo === 'H' ? fotosH.pop() : fotosV.pop();
      if (fotosH.length === 0) fotosH = shuffle(fotosHorizontales);
      if (fotosV.length === 0) fotosV = shuffle(fotosVerticales);

      const imgA = document.createElement('img');
      imgA.classList.add('layer-a', 'visible'); // A empieza visible
      imgA.src = imgInicial;
      imgA.alt = '';

      const imgB = document.createElement('img');
      imgB.classList.add('layer-b', 'hidden'); // B empieza oculta
      imgB.alt = '';

      cell.appendChild(imgA);
      cell.appendChild(imgB);
      collageEl.appendChild(cell);

      celdas.push({
        imgA, imgB,
        tipo,
        activeLayer: 'a',
        fotosUsadas: new Set([imgInicial])
      });
    }
  }

  function fotoAleatoria(usadas, tipo) {
    const arrayBase = tipo === 'H' ? fotosHorizontales : fotosVerticales;
    const disponibles = arrayBase.filter(f => !usadas.has(f));
    const pool = disponibles.length > 0 ? disponibles : arrayBase;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function cambiarCelda(idx) {
    const c = celdas[idx];
    const arrayLength = c.tipo === 'H' ? fotosHorizontales.length : fotosVerticales.length;
    
    const nueva = fotoAleatoria(c.fotosUsadas, c.tipo);
    c.fotosUsadas.add(nueva);
    if (c.fotosUsadas.size > Math.floor(arrayLength / 2)) c.fotosUsadas.clear();

    if (c.activeLayer === 'a') {
      c.imgB.src = nueva;
      c.imgB.onload = () => {
        // Crossfade: Mostrar B, ocultar A
        c.imgB.classList.remove('hidden');
        c.imgB.classList.add('visible');
        c.imgA.classList.remove('visible');
        c.imgA.classList.add('hidden');
        c.activeLayer = 'b';
      };
    } else {
      c.imgA.src = nueva;
      c.imgA.onload = () => {
        // Crossfade: Mostrar A, ocultar B
        c.imgA.classList.remove('hidden');
        c.imgA.classList.add('visible');
        c.imgB.classList.remove('visible');
        c.imgB.classList.add('hidden');
        c.activeLayer = 'a';
      };
    }
  }

  celdas.forEach((_, idx) => {
    setTimeout(() => {
      setInterval(() => cambiarCelda(idx), INTERVALO * celdas.length);
    }, idx * 1000); // Entran en cascada cada segundo
  });
}
