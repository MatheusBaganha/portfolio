export default function menuMobile() {
  const navToggle = document.querySelector('[data-nav]');
  const btnMenu = document.querySelector('[data-btn]');
  const header = document.querySelector('[data-header]');

  function handleToggle(event) {
    if (event.type === 'touchstart') event.preventDefault();
    [navToggle, header].forEach((item) => {
      item.classList.toggle('aberto');
    });

    const active = navToggle.classList.contains('aberto');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
  }

  btnMenu.addEventListener('touchstart', handleToggle);
  btnMenu.addEventListener('click', handleToggle);
}
