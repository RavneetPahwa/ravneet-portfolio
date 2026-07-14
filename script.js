// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll progress trace: the EKG line fills as the page scrolls
const tracePath = document.getElementById('trace-path');
function updateTrace(){
  const h = document.documentElement;
  const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
  const x = Math.min(100, Math.max(0, scrolled * 100));
  tracePath.setAttribute('d', `M0,1.5 L${x},1.5`);
}
document.addEventListener('scroll', updateTrace, { passive: true });
updateTrace();

// Rotate the three role titles in the hero, one at a time
const rotator = document.getElementById('title-rotator');
if (rotator) {
  const items = Array.from(rotator.children);
  let idx = 0;
  items.forEach((li, i) => { li.style.display = i === 0 ? 'inline-flex' : 'none'; });
  if (items.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setInterval(() => {
      items[idx].style.display = 'none';
      idx = (idx + 1) % items.length;
      items[idx].style.display = 'inline-flex';
    }, 2600);
  } else {
    items.forEach(li => { li.style.display = 'inline-flex'; });
  }
}

// Mobile nav (simple toggle — links list becomes a dropdown)
const burger = document.getElementById('burger');
const links = document.querySelector('.nav__links');
if (burger && links) {
  burger.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
    links.style.cssText = open
      ? 'display:flex; position:absolute; top:64px; left:0; right:0; flex-direction:column; background:#F7F9FB; padding:16px 24px; border-bottom:1px solid #DDE3E8;'
      : '';
  });
}
