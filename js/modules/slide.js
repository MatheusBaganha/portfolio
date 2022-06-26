export default function initSlide() {
  let count = 1;

  const slides = document.querySelectorAll('[data-slides] li');
  const labels = Array.from(document.querySelectorAll('[data-navSlide] .label'))
  const inputs = document.querySelectorAll('[data-slides] input[type=radio]')


  // Mostra qual item está ativo na tela
  function showActive() {
    inputs.forEach((input, index) => {
      if(!input.checked) {
        labels[index].style.backgroundColor = '';
      } else {
        labels[index].style.backgroundColor = '#7562E0';
      }
    })

    labels.forEach((label) => {
      label.addEventListener('click', handleActive)
    });
  }  

  function handleActive(event) {
    labels.forEach((label) => {
      label.style.backgroundColor = '';
    })
    event.target.style.backgroundColor = '#7562E0';
  }

  // Função ativada já quando carrega pagina para mostrar ativo inicial
  showActive();

  // Faz o loop entre ativos e atualiza eles
  setInterval(() => {
    nextImage();
    showActive();
  }, 5000)


  // Faz o slide ir para a proxima imagem, e caso esteja no final, volta para o incio
  function nextImage() {
    count++
    if (count > slides.length) {
      count = 1;
    }
    document.getElementById('radio'+count).checked = true;
  }
}
