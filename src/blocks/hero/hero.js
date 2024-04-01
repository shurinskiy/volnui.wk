import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

(() => {

	new Swiper(".hero__slider", {
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
		}
	});

})();
