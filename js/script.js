import MenuMobile from './modules/MenuMobile.js';
import Slider from './modules/Slider.js';

const Menu = new MenuMobile('[data-nav]', '[data-btn]', 'aberto', '[data-header]');
Menu.init();

const slider = new Slider(1, '[data-slides] li', '[data-navSlide] .label', '[data-slides] input[type=radio]', '[data-leftBtn]', '[data-rightBtn]');
