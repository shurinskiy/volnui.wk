import scrollLock from 'scroll-lock';
import { menuToggle } from "../../js/libs/menuToggle";

(() => {
	const aside = document.querySelector('.aside');
	if(!aside) return;
	
	const toggles = document.querySelectorAll('button.controls__button_search, button.aside__close');

	const sidebar = menuToggle(aside, toggles, {
		scrollLock: scrollLock,
		omitToClose: '.modal',
		class: 'opened'
	});
	
	// открытие и закрытие меню, свайпом на мобильных устройствах
	aside.addEventListener('swiped-right', (e) => sidebar.menuClose(e));
	// чтобы не перекрывались с главным меню
	document.querySelector('button.header__toggle')?.addEventListener('click', (e) => sidebar.menuClose(e));

})();
