import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import enquire from 'enquire.js';
import lightGallery from 'lightgallery'; 
import lgZoom from 'lightgallery/plugins/zoom';

(() => {
	const sliders = document.querySelectorAll('.gallery__slider');
	const blocks = [sliders, document.querySelectorAll('.d-form__color')];
	const buttons = document.querySelectorAll('.d-form__toggles button');

	buttons.forEach((button, i) => {
		button.addEventListener('click', (e) => {
			e.preventDefault();

			if (! e.target.classList.contains('active')) {
				buttons.forEach((button, i) => {
					button.classList.remove('active');
					blocks.map(set => set[i].classList.remove('active'));
				});
	
				button.classList.add('active');

				blocks.map(set => {
					set[i].classList.add('active','showing');

					set[i].addEventListener('animationend', e => {
						set[i].classList.remove('showing');
					}, { once: true });
				});
			}
		});
	});

	sliders.forEach((slider, i) => {
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
					beforeInit: function(slider) {
						slider.el.querySelector('.gallery__dots').classList.add(`gallery__dots_${i}`);
					},
				}
			});
		}

		lightGallery(slider.querySelector('.gallery__wrapper'), {
			plugins: [lgZoom],
			download: false,
			share: false,
		});		
			
		enquire.register("screen and (max-width: 640px", {
			match: function() {
				enableSwiper(slider);
			},
			unmatch: function() {
				if (swiper !== undefined ) {
					swiper.destroy(true, true);
				} 
			}
		});
	});
	
})();