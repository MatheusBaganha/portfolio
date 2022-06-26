import MenuMobile from './modules/MenuMobile.js';
import slide from './modules/slide.js';

const Menu = new MenuMobile('[data-nav]', '[data-btn]', 'aberto', '[data-header]');
Menu.init();

slide();

