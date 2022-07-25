export default class MenuMobile {
  constructor(nav, btn, cssClass, ...item) {
    // Obrigatórios para o funcionamento da classe.
    this.navToggle = document.querySelector(nav);
    this.btnMenu = document.querySelector(btn);
    this.class = cssClass;

    // Header é opcional, caso queira mudar alguma coisa no elemento.
    this.header = document.querySelector(item);

    //  Todos os eventos devem ser colocados aqui.
    this.events = ['touchstart', 'click'];

    //  Mudança de contexto do this de menuToggle.
    this.menuToggle = this.menuToggle.bind(this);
  }

  // Toggle no nav e header e chama metodo para os aria-elements.
  menuToggle() {
    [this.navToggle, this.header].forEach((item) => {
      if (item.classList.contains(this.class)) {
        item.classList.remove(this.class);
      } else {
        item.classList.add(this.class);
      }
    });

    this.handleAccessibility();
    return this;
  }

  //  Lida com os aria-elements baseado se tem a classe aberto ou não.
  handleAccessibility() {
    const active = this.navToggle.classList.contains('aberto');
    this.btnMenu.setAttribute('aria-expanded', active);
    if (active) {
      this.btnMenu.setAttribute('aria-label', 'Fechar Menu');
    } else {
      this.btnMenu.setAttribute('aria-label', 'Abrir Menu');
    }

    return this;
  }

  //  Adiciona os eventos e previne o padrão, é necessário que esteja em callback para previnir.
  handleEvents() {
    this.events.forEach((event) => {
      this.btnMenu.addEventListener(event, (e) => {
        e.preventDefault();
        this.menuToggle();
      }, { passive: false });
    });

    return this;
  }

  //  Ativa as classes necessárias para inicializar a classe caso exista btnMenu e navToggle.
  init() {
    if (this.btnMenu && this.navToggle) {
      this.handleEvents();
    }

    return this;
  }
  // Todos os métodos retornam this para caso queira linkar algum método com outro por algum motivo.
}
