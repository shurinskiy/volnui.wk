import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import enquire from 'enquire.js';
import lightGallery from 'lightgallery'; 
import lgZoom from 'lightgallery/plugins/zoom';
import { driveTabs } from "../../js/libs/driveTabs";

(() => {

	driveTabs({
		container: '.detail',
		button: '.d-form__toggles button',
		block: ['.gallery__slider', '.d-form__color']
	}, function() {
		this.classList.add('showing');
	
		this.addEventListener('animationend', e => {
			this.classList.remove('showing');
		}, { once: true });
	});
	
	document.querySelectorAll('.gallery__slider').forEach((item, i) => {
		let swiper;

		const enableSwiper = (el) => {
			swiper = new Swiper(el, {
				modules: [Pagination],
				spaceBetween: 0,
				slidesPerView: 1,
				threshold: 10,
				pagination: {
					el: `.gallery__dots_${i}`,
					bulletClass: 'gallery__dot',
					bulletActiveClass: 'active'
				},
				on: {
					beforeInit: function(item) {
						item.el.querySelector('.gallery__dots').classList.add(`gallery__dots_${i}`);
					},
				}
			});
		}

		lightGallery(item.querySelector('.gallery__wrapper'), {
			plugins: [lgZoom],
			download: false,
			share: false,
		});		
			
		enquire.register("screen and (max-width: 640px", {
			match: function() {
				enableSwiper(item);
			},
			unmatch: function() {
				if (swiper !== undefined ) {
					swiper.destroy(true, true);
				} 
			}
		});
	});
	
})();