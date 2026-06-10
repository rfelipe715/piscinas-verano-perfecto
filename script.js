// Añade efecto ripple al hacer click en el agua
document.addEventListener('DOMContentLoaded',()=>{
  const water = document.getElementById('water');
  if(!water) return;

  water.addEventListener('click', e=>{
    const rect = water.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement('div');
    ripple.className = 'ripple';

    // tamaño proporcional
    const size = Math.max(rect.width, rect.height) * 0.4;
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (x - size/2) + 'px';
    ripple.style.top = (y - size/2) + 'px';

    water.appendChild(ripple);
    // remover después de la animación
    setTimeout(()=>{ ripple.remove(); }, 950);
  });
});
