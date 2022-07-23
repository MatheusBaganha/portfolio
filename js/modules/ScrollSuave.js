export default class ScrollSuave {
  constructor(linksInternos) {
    // Seleciona todos os links internos da pagina
    this.linksInternos = document.querySelectorAll(linksInternos);

    // Ativa os eventos já inicialmente
    this.addEvents();
  }

  handleScroll(event) {
    //  Previne o comportamento padrão do link, pega o nome do # de href do link
    event.preventDefault();
    const link = event.target;
    const id = link.getAttribute('href');

    //  Pega o tamanho de cada section em relação ao topo baseada no id do link
    const sectionTop = document.querySelector(id).offsetTop;

    window.scroll({
      // +48 para alinhar de forma mais centralizada o conteudo
      top: sectionTop + 48,
      behavior: 'smooth',
    });
  }

  addEvents() {
    // Adiciona eventos de click para cada link interno
    this.linksInternos.forEach((item) => {
      item.addEventListener('click', this.handleScroll);
    });
  }
}
