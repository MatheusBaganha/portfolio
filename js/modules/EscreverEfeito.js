export default class EscreverEfeito {
  constructor(escreverTexto) {
    this.escreverTextos = document.querySelectorAll(escreverTexto);
    //  escreverTextos é todos os textos que será escrito na tela

    // Mudança de contexto do this de ativaEscrever e ativação inicial no texto que deve ser escrito
    this.ativaEscrever = this.ativaEscrever.bind(this);
    this.ativaEscrever(this.escreverTexto);
  }

  escrever(elemento) {
    // Responsável pela animação de cada letra sendo escrita uma após a outra
    const textoArray = elemento.innerText.split('');
    // textoArray possui todas as letras do texto a ser escrevido

    // Limpa o texto do elemento para não mostrar nada na tela inicialmente
    elemento.innerHTML = '';

    // Coloca letra por letra na tela
    textoArray.forEach((letra, i) => { setTimeout(() => elemento.innerHTML += letra, 18 * i); });
  }

  ativaEscrever() {
    // Ativa o escrever para cada texto do escreverTextos
    this.escreverTextos.forEach((texto) => {
      this.escrever(texto);
    });
  }
}
