// Footer year (present on every page)
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

// ---- Scroll progress trace (home page only) ----
const tracePath = document.getElementById('trace-path');
if (tracePath) {
  function updateTrace(){
    const h = document.documentElement;
    const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    const x = Math.min(100, Math.max(0, scrolled * 100));
    tracePath.setAttribute('d', `M0,1.5 L${x},1.5`);
  }
  document.addEventListener('scroll', updateTrace, { passive: true });
  updateTrace();
}

// ---- Rotate the three role titles in the hero (home page only) ----
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

// ---- Mobile nav toggle ----
const burger = document.getElementById('burger');
const links = document.querySelector('.nav__links');
if (burger && links) {
  burger.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
    links.style.cssText = open
      ? 'display:flex; position:absolute; top:64px; left:0; right:0; flex-direction:column; background:#F7F9FB; padding:16px 24px; border-bottom:1px solid #DDE3E8; gap:14px;'
      : '';
  });
}

// ---- Command palette (all pages) ----
// Every page includes the same set of commands so Cmd/Ctrl+K works identically site-wide.
const COMMANDS = [
  { label: 'Go to Home', tag: 'Page', action: () => location.href = 'index.html' },
  { label: 'Go to Projects', tag: 'Page', action: () => location.href = 'projects.html' },
  { label: 'Go to Stack', tag: 'Page', action: () => location.href = 'stack.html' },
  { label: 'Go to About', tag: 'Page', action: () => location.href = 'about.html' },
  { label: 'Go to Contact', tag: 'Page', action: () => location.href = 'contact.html' },
  { label: 'Download Résumé', tag: 'Action', action: () => location.href = 'assets/Ravneet_Singh_Pahwa_Resume.pdf' },
  { label: 'Email Ravneet', tag: 'Action', action: () => location.href = 'mailto:ravneet.pahwa@gmail.com' },
  { label: 'Open LinkedIn', tag: 'Link', action: () => window.open('https://www.linkedin.com/in/ravneetpahwa/', '_blank') },
  { label: 'Open GitHub', tag: 'Link', action: () => window.open('https://github.com/RavneetPahwa', '_blank') },
];

const overlay = document.getElementById('cmdk-overlay');
const input = document.getElementById('cmdk-input');
const list = document.getElementById('cmdk-list');

function renderCommands(filter = '') {
  if (!list) return;
  const q = filter.trim().toLowerCase();
  const matches = COMMANDS.filter(c => c.label.toLowerCase().includes(q));
  list.innerHTML = '';
  if (matches.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'cmdk__empty';
    empty.textContent = 'No matching commands.';
    list.appendChild(empty);
    return;
  }
  matches.forEach((c, i) => {
    const item = document.createElement('div');
    item.className = 'cmdk__item' + (i === 0 ? ' is-active' : '');
    item.innerHTML = `<span>${c.label}</span><span class="cmdk__tag">${c.tag}</span>`;
    item.addEventListener('click', () => { c.action(); closePalette(); });
    list.appendChild(item);
  });
}

function openPalette() {
  if (!overlay) return;
  overlay.classList.add('is-open');
  input.value = '';
  renderCommands();
  setTimeout(() => input.focus(), 10);
}
function closePalette() {
  if (!overlay) return;
  overlay.classList.remove('is-open');
}

if (overlay) {
  document.addEventListener('keydown', (e) => {
    const isK = e.key === 'k' || e.key === 'K';
    if ((e.metaKey || e.ctrlKey) && isK) { e.preventDefault(); openPalette(); }
    if (e.key === 'Escape') closePalette();
  });
  document.querySelectorAll('[data-cmdk-open]').forEach(btn => btn.addEventListener('click', openPalette));
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closePalette(); });
  input.addEventListener('input', () => renderCommands(input.value));
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const active = list.querySelector('.cmdk__item');
      if (active) active.click();
    }
  });
}
