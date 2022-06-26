import MenuMobile from './modules/MenuMobile.js';
import Slide from './modules/slide.js';

const Menu = new MenuMobile('[data-nav]', '[data-btn]', 'aberto', '[data-header]');
Menu.init();

const slide = new Slide(1, '[data-slides] li', '[data-navSlide] .label', '[data-slides] input[type=radio]', '[data-leftBtn]', '[data-rightBtn]');
