/* 
* Переключатель класса для мобильного меню. Отслеживает клик по заданным
* кнопкам и переключает класс для заданного блока. Так же отслеживает клик
* по страничке за пределами заданного блока.
* 
* @разметка
* 
<div class="menu">
	<button class="menu__close"></button>
	<a class="menu__item" href="./">One</a>
	<a class="menu__item" href="./">Two</a>
	<a class="menu__item" href="./">Three</a>
</div>
<button class="menu__toggle"></button>
* 
* @вызов
* 
import scrollLock from 'scroll-lock';
import { menuToggle } from "../../js/libs/menuToggle";
const menu = document.querySelector('.menu');
const toggles = document.querySelectorAll('.menu__toggle, .menu__close');
menuToggle(menu, toggles,  {
	scrollLock,
	class: 'opened',
	globalClose: true,
	omitToClose: '.modal, .form',
	open: function() {
		console.log(this)
	},
	close: function() {
		...
	}
});
* 
*/

export const menuToggle = (menu, toggles, options = {}) => {
	class Menu {
		constructor(menu, toggles, options) {
			if(!menu || !menu instanceof Element || !toggles) return;

			this.options = {
				class: 'opened',
				globalClose: true,
				...options
			};

			this.init();
		}
			

		open(e, cb = this.options.open) {
			if(e) {
				e.preventDefault();
				e.stopPropagation();
			}

			menu.classList.add(`${this.options.class}`);

			if (typeof cb === 'function') cb.call(menu);
			return true;
		}
		

		close(e, cb = this.options.close) {
			if (e) e.stopPropagation();
			
			menu.classList.remove(`${this.options.class}`);
			menu.removeAttribute('style');

			if (typeof cb === 'function') cb.call(menu);
			return false;
		}
	
		toggle(e) {
			menu.classList.contains(`${this.options.class}`) ? this.close(e) : this.open(e);
		}
		
		omit(e) {
			const omits = this.options.omitToClose?.split(",").map((item) => item.trim());
			return omits?.some(omit => !!e.target.closest(`${omit}`));
		}

		
		init() {
			toggles.forEach(toggle => {
				toggle.addEventListener('click', (e) => this.toggle(e));
			});

			if(this.options.globalClose) {
				['click','touchstart'].forEach(event => {
					document.addEventListener(event, (e) => {
						const isopen = menu.classList.contains(`${this.options.class}`);
						const isself = e.target.closest(`.${menu.className.split(' ')[0]}`);

						if(isopen && !isself && !this.omit(e)) {
							e.preventDefault();
							this.close(e);
						}
					}, { passive: false });
				});
			}
		}
	}

	return new Menu(menu, toggles, options);
}