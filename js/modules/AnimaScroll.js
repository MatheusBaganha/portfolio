export default class AnimaScroll {
  constructor(animateContents, classAnimate) {
    this.animateContents = document.querySelectorAll(animateContents);
    this.classAnimate = classAnimate;

    this.animateOnScroll = this.animateOnScroll.bind(this);

    this.animateOnScroll();
    this.addEvents();
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

  animateOnScroll() {
    const windowTop = window.scrollY + ((window.innerHeight * 3) / 4);
    this.animateContents.forEach((content) => {
      if (windowTop > (content.offsetTop)) {
        content.classList.add(this.classAnimate);
      }
    });
  }

  addEvents() {
    if (this.animateContents.length) {
      window.addEventListener('scroll', this.debounce(this.animateOnScroll, 200));
    }
  }
}
