import { createCanvas } from './create-canvas.js';
import { createFooterCanvas } from './create-footer-canvas.js';
import { createMobileMenuToggle } from './create-mobile-menu-toggle.js';
import { initHeaderScroll } from './init-header-scroll.js';

// Вызываем функции после загрузки документа
document.addEventListener('DOMContentLoaded', () => {
  createMobileMenuToggle();
  createCanvas();
  createFooterCanvas();
  initHeaderScroll();
});

const services = document.querySelector('.services');

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: services,
    start: 'top center',
    end: 'bottom center',
    scrub: 2,
    ease: 'none',
  },
  defaults: {
    ease: 'none',
  },
});

tl.from('.services__secondary-list', {
  paddingTop: '350px',
})
  .from(
    '.services__list-item--second-child',
    {
      y: '350px',
    },
    '<'
  )
  .from(
    '.services__list-item--third-child',
    {
      y: '100px',
    },
    '<'
  );

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
