export default class menuMobile {
  constructor(nav, btn, ...item) {
    this.navToggle = document.querySelector(nav);
    this.btnMenu = document.querySelector(btn);
    this.header = document.querySelector(item);

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(event) {
    if (event.type === 'touchstart') {
      event.preventDefault();
    }

    [this.navToggle, this.header].forEach((item) => {
      item.classList.toggle('aberto');
    });
    this.handleAccessibility(event);
    return this;
  }

  handleAccessibility(event) {
    const active = this.navToggle.classList.contains('aberto');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }

    return this;
  }

  handleEvents() {
    this.btnMenu.addEventListener('touchstart', this.handleToggle);
    this.btnMenu.addEventListener('click', this.handleToggle);

    return this;
  }

  init() {
    this.handleEvents();
    this.handleToggle(this.btnMenu);

    return this;
  }
}
