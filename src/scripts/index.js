import { createCanvas } from './create-canvas.js';
import { createMobileMenuToggle } from './create-mobile-menu-toggle.js';

// Вызываем функции после загрузки документа
document.addEventListener('DOMContentLoaded', () => {
  // createCanvas();
  createMobileMenuToggle();
  createCanvas();
});
