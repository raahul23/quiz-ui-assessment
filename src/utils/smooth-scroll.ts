// src/utils/smooth-scroll.ts
// Intercept anchor clicks and scroll to target with header offset.
// Import this module once (in main.tsx).

function getHeaderHeight(): number {
  const header = document.querySelector('header');
  if (!header) return 0;
  // Use the header height + small extra spacing
  return Math.ceil(header.getBoundingClientRect().height) + 12;
}

function handleAnchorClick(e: MouseEvent) {
  const anchor = e.currentTarget as HTMLAnchorElement;
  const href = anchor.getAttribute('href') ?? '';
  if (!href.startsWith('#')) return;
  const id = href.slice(1);
  const target = document.getElementById(id);
  if (!target) return;

  e.preventDefault();

  const headerOffset = getHeaderHeight();
  const targetTop = Math.round(target.getBoundingClientRect().top + window.scrollY);
  const scrollTo = Math.max(0, targetTop - headerOffset);

  window.scrollTo({
    top: scrollTo,
    behavior: 'smooth',
  });

  // update URL hash without jumping
  history.pushState(null, '', '#' + id);
}

export function initSmoothScroll() {
  // Attach once
  if (typeof window === 'undefined') return;
  // Delegate for links that start with #
  const anchors = Array.from(document.querySelectorAll('a[href^="#"]')) as HTMLAnchorElement[];

  anchors.forEach((a) => {
    // ignore empty or just "#"
    const href = a.getAttribute('href') ?? '';
    if (href === '#' || href === '') return;
    a.addEventListener('click', handleAnchorClick);
  });

  // Also handle links added later (e.g. dynamic) via event delegation on document:
  document.addEventListener('click', (ev) => {
    const target = ev.target as HTMLElement | null;
    if (!target) return;
    const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
    if (!anchor) return;
    const href = anchor.getAttribute('href') ?? '';
    if (href === '#' || href === '') return;
    // If it's already handled above by the anchors list, ignore (prevents double)
    // But to be safe, call handler:
    handleAnchorClick.call(anchor, ev as MouseEvent);
  });
}
