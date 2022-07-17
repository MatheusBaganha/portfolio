import MenuMobile from './modules/MenuMobile.js';
import Slider from './modules/slider.js';
import ScrollSuave from './modules/ScrollSuave.js';
import AnimaScroll from './modules/AnimaScroll.js';


const Menu = new MenuMobile('[data-nav]', '[data-btn]', 'aberto', '[data-header]');
Menu.init();

const slider = new Slider(1, '[data-slides] li', '[data-navSlide] .label', '[data-slides] input[type=radio]', '[data-leftBtn]', '[data-rightBtn]');

const scrollSuave = new ScrollSuave('[data-links] a[href^="#"]');

const animaScroll = new AnimaScroll('[data-anime]', 'animar');
