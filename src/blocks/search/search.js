import scrollLock from 'scroll-lock';
import { menuToggle } from "../../js/libs/menuToggle";

(() => {
	const search = document.querySelector('.search');
	if(!search) return;
	
	const toggles = document.querySelectorAll('button.controls__button_search, .header__button_search, button.search__close');

	const sidebar = menuToggle(search, toggles, {
		scrollLock: scrollLock,
		omitToClose: '.modal',
		class: 'opened'
	});
	
	// открытие и закрытие меню, свайпом на мобильных устройствах
	search.addEventListener('swiped-right', (e) => sidebar.menuClose(e));
	// чтобы не перекрывались с главным меню
	document.querySelector('button.header__toggle')?.addEventListener('click', (e) => sidebar.menuClose(e));

})();