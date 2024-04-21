import scrollLock from 'scroll-lock';
import { menuToggle } from "../../js/libs/menuToggle";

(() => {
	const header = document.querySelector('.header');
	if(!header) return;
	
	const navi = header.querySelector('.header__navi');
	const toggles = header.querySelectorAll('.header__toggle');
	
	const menu = menuToggle(navi, toggles, {
		omitToClose: '.modal',
		class: 'opened',
		open: function() {
			scrollLock.disablePageScroll();
		},
		close: function() {
			scrollLock.clearQueueScrollLocks();
			scrollLock.enablePageScroll();
		}
	});

	// открытие и закрытие меню, свайпом на мобильных устройствах
	navi.addEventListener('swiped-left', (e) => menu.close(e));
	// чтобы не перекрывались с сайдбаром
	document.querySelectorAll('button.controls__button_search, .header__button_search')?.forEach(button => {
		button.addEventListener('click', (e) => menu.close(e, false));
	});

})();