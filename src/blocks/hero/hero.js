import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

(() => {
	const slider = document.querySelector('.hero__slider');

	if (! slider) return;

	const status = document.querySelector('.hero__status');
	const total = status.querySelector('.hero__s-total');
	const current = status.querySelector('.hero__s-current');
	const progress = status.querySelector('.hero__s-progress span');

	const statusRender = (sw) => {
		let done = sw.realIndex + 1;
		let max = sw.slides.length;

		total.innerText = ("0" + max).slice(-2);
		current.innerText = ("0" + done).slice(-2);
		progress.style.width = (done / max * 100) + '%';
	}

	new Swiper(slider, {
		modules: [ Autoplay, Pagination ],
		spaceBetween: 0,
		loop: true,
		speed: 1000,
		autoplay: { 
			delay: 10000,
			disableOnInteraction: true
		},
		pagination: {
			el: '.hero__dots',
			bulletClass: 'hero__dot',
			bulletActiveClass: 'active',
			clickable: true,
		},
		on: {
			init: statusRender,
			slideChangeTransitionEnd: statusRender
		}
	});

})();
