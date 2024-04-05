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

	document.querySelectorAll('.gallery__wrapper').forEach(gallery => {
		lightGallery(gallery, {
			plugins: [lgZoom],
			download: false,
			share: false,
		});		
	})

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

		enquire.register("screen and (max-width: 780px", {
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
