export function createMobileMenuToggle() {
  const showDialog = () => {
    document.getElementById('mobile-toggle').classList.add('show');
    const body = document.body;
    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
  };
  const closeDialog = () => {
    document.getElementById('mobile-toggle').classList.remove('show');
    const body = document.body;
    body.style.height = '';
    body.style.overflowY = '';
  };

  const mobileMenu = document.getElementById('mobile-toggle');
  mobileMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('show')) {
      closeDialog();
    } else {
      showDialog();
    }
  });
}
