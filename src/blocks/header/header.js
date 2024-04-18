import scrollLock from 'scroll-lock';
import { menuToggle } from "../../js/libs/menuToggle";

(() => {
	const header = document.querySelector('.header');
	if(!header) return;
	
	const navi = header.querySelector('.header__navi');
	const toggles = header.querySelectorAll('.header__toggle');
	
	const menu = menuToggle(navi, toggles, {
		scrollLock: scrollLock,
		omitToClose: '.modal',
		class: 'opened'
	});
	
	// открытие и закрытие меню, свайпом на мобильных устройствах
	// чтобы не перекрывались с сайдбаром
	navi.addEventListener('swiped-left', (e) => menu.menuClose(e));
	document.querySelector('button.controls__button_search')?.addEventListener('click', (e) => menu.menuClose(e));

})();