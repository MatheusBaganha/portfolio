export default class Slider {
  constructor(count, slides, labels, inputs, leftBtn, rightBtn) {
    this.count = count;
    this.slides = document.querySelectorAll(slides);
    this.labels = Array.from(document.querySelectorAll(labels));
    this.inputs = document.querySelectorAll(inputs);
    this.leftBtn = document.querySelector(leftBtn);
    this.rightBtn = document.querySelector(rightBtn);

    // Bind para utilizar em callback
    this.handleActive = this.handleActive.bind(this);
    this.previousBtn = this.previousBtn.bind(this);
    this.nextBtn = this.nextBtn.bind(this);

    // Função ativada já quando carrega pagina para mostrar ativo inicial
    this.addEvents();
    this.showActive();

    // Faz o loop entre ativos e atualiza eles
    setInterval(() => {
      this.nextImage();
      this.showActive();
    }, 5000);
  }

  // Mostra qual item está ativo na tela
  showActive() {
    this.inputs.forEach((input, index) => {
      if (!input.checked) {
        this.labels[index].style.backgroundColor = '';
      } else {
        this.labels[index].style.backgroundColor = '#7562E0';
      }
      return this;
    });
  }

  addEvents() {
    // Evento nas label para atualizar o ativo ao clicar
    this.labels.forEach((label) => {
      label.addEventListener('click', this.handleActive);
    });

    this.leftBtn.addEventListener('click', this.previousBtn);
    this.rightBtn.addEventListener('click', this.nextBtn);
  }

  // Faz o ativo mudar ao clique, tira a cor de todos e mantém apenas no target
  handleActive({ target }) {
    this.labels.forEach((label) => {
      label.style.backgroundColor = '';
    });
    target.style.backgroundColor = '#7562E0';
  }

  // Faz o slide ir para a proxima imagem, e caso esteja no final, volta para o incio
  nextImage() {
    this.count++;
    if (this.count > this.slides.length) {
      this.count = 1;
    } else if (this.count < 1) {
      this.count = this.slides.length;
    }

    document.getElementById(`radio${this.count}`).checked = true;
  }

  // Move slider para o conteúdo anterior, é necessário dois count--, pois o nextImage adiciona 1
  previousBtn() {
    this.count--;
    this.count--;
    this.nextImage();
    this.showActive();
  }

  // Move slider para o conteúdo posterior e atualiza o seu ativo
  nextBtn() {
    this.nextImage();
    this.showActive();
  }
}
