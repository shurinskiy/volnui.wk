import scrollLock from 'scroll-lock';
import { menuToggle } from "../../js/libs/menuToggle";

(() => {
	const search = document.querySelector('.search');
	if(!search) return;
	
	const toggles = document.querySelectorAll('button.controls__button_search, .header__button_search, button.search__close');

	const sidebar = menuToggle(search, toggles, {
		omitToClose: '.modal',
		class: 'opened',
		open: function() {
			const maxw = parseInt(getComputedStyle(this).maxWidth);
			const scrollw = scrollLock.getPageScrollBarWidth();

			Object.assign(this.style, { maxWidth: maxw + scrollw + 'px' });
			scrollLock.disablePageScroll();
		},
		close: function() {
			scrollLock.clearQueueScrollLocks();
			scrollLock.enablePageScroll();
		}
	});
	
	// открытие и закрытие меню, свайпом на мобильных устройствах
	search.addEventListener('swiped-right', (e) => sidebar.close(e));
	// чтобы не перекрывались с главным меню
	document.querySelector('button.header__toggle')?.addEventListener('click', (e) => sidebar.close(e, false));

})();