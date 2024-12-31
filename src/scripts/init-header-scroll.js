export function initHeaderScroll() {
  const header = document.querySelector('.header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      header.classList.remove('header--isVisible');
    } else {
      // Scrolling up
      header.classList.add('header--isVisible');
    }

    lastScrollY = currentScrollY;
  });
}
