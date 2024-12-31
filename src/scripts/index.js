import { createCanvas } from './create-canvas.js';
import { createFooterCanvas } from './create-footer-canvas.js';
import { createMobileMenuToggle } from './create-mobile-menu-toggle.js';
import { initHeaderScroll } from './init-header-scroll.js';

// Вызываем функции после загрузки документа
document.addEventListener('DOMContentLoaded', () => {
  // createCanvas();
  createMobileMenuToggle();
  createCanvas();
  createFooterCanvas();
  initHeaderScroll();
});
