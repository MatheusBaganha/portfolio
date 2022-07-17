export default class ScrollSuave {
  constructor(linksInternos) {
    this.linksInternos = document.querySelectorAll(linksInternos);

    this.addEvents();
  }

  handleScroll(event) {
    event.preventDefault();
    const link = event.target;
    const id = link.getAttribute('href');
    const sectionTop = document.querySelector(id).offsetTop;

    window.scroll({
      top: sectionTop + 48,
      behavior: 'smooth',
    });
  }

  addEvents() {
    this.linksInternos.forEach((item) => {
      item.addEventListener('click', this.handleScroll);
    });
  }
}
