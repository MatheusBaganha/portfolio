import MenuMobile from './modules/MenuMobile.js';
import AnimaScroll from './modules/AnimaScroll.js';
import ScrollSuave from './modules/ScrollSuave.js';
import Slider from './modules/slider.js';

const Menu = new MenuMobile('[data-nav]', '[data-btn]', 'aberto', '[data-header]');
Menu.init();

const scrollSuave = new ScrollSuave('[data-links] a[href^="#"]');

const animaScroll = new AnimaScroll('[data-anime]', 'animar');

const slider = new Slider(1, '[data-slides] li', '[data-navSlide] .label', '[data-slides] input[type=radio]', '[data-leftBtn]', '[data-rightBtn]');
