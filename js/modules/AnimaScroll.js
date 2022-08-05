export default class AnimaScroll {
  constructor(animateContents, classAnimate) {
    // animateContents são todos os containers que devem ser animados
    this.animateContents = document.querySelectorAll(animateContents);
    // classAnimate será o nome da classe css que irá fazer a animação
    this.classAnimate = classAnimate;

    this.animateOnScroll = this.animateOnScroll.bind(this);

    //  Animação e eventos adicionados já inicialmente para que não fique com tela preta
    this.addEvents();
    this.animateOnScroll();
  }

  debounce(callback, delay) {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        callback(...args);
        timer = null;
      }, delay);
    };
  }
  //  Debounce será usado toda vez que uma função se
  //  repete a cada minima ação desnecessariamente

  animateOnScroll() {
    // Espera até chegar a quase 1/4 da tela em relação ao container para ativar
    // e dar a classe de animação
    const windowTop = window.scrollY + ((window.innerHeight * 3) / 4);
    this.animateContents.forEach((content) => {
      if (windowTop > (content.offsetTop)) {
        content.classList.add(this.classAnimate);
      }
    });
  }

  addEvents() {
    // Se existir conteudo para ser animado, adicione o evento
    if (this.animateContents.length) {
      window.addEventListener('scroll', this.debounce(this.animateOnScroll, 200));
    }
  }
}
