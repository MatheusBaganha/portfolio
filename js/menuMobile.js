export default class menuMobile {
  constructor(nav, btn, ...item) {
    this.navToggle = document.querySelector(nav);
    this.btnMenu = document.querySelector(btn);
    this.header = document.querySelector(item);
    this.events = ['touchstart', 'click'];

    this.menuToggle = this.menuToggle.bind(this);
  }

  menuToggle(event) {
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
    this.events.forEach((event) => {
      this.btnMenu.addEventListener(event, this.menuToggle);
    });

    return this;
  }

  init() {
    if (this.btnMenu && this.navToggle) {
      this.handleEvents();
      this.menuToggle();
    }

    return this;
  }
}
