import Swiper from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

(() => {
	const slider = document.querySelector('.hero__slider');

	if (! slider) return;

	const status = document.querySelector('.hero__status');
	const total = status.querySelector('.hero__s-total');
	const current = status.querySelector('.hero__s-current');
	const progress = status.querySelector('.hero__s-progress span');

	const changeHandler = (sw) => {
		let done = sw.realIndex + 1;
		let max = sw.slides.length;

		total.innerText = ("0" + max).slice(-2);
		current.innerText = ("0" + done).slice(-2);
		progress.style.width = (done / max * 100) + '%';

		sw.slides.forEach(slide => {
			let video = slide.querySelector('video');
			let isPlaying;

			if(video) {
				video.controls = false;
				isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > video.HAVE_CURRENT_DATA;

				(slide.dataset.swiperSlideIndex == sw.realIndex) ? (isPlaying || video.play()) : video.pause();
			}
		});
	}

	new Swiper(slider, {
		modules: [ Autoplay, Pagination, Navigation ],
		spaceBetween: 0,
		loop: true,
		speed: 1000,
		autoplay: { 
			delay: 10000,
			disableOnInteraction: true
		},
		navigation: {
			nextEl: `.hero__link`, 
		},
		pagination: {
			el: '.hero__dots',
			bulletClass: 'hero__dot',
			bulletActiveClass: 'active',
			clickable: true,
		},
		on: {
			init: changeHandler,
			slideChangeTransitionEnd: changeHandler,
		}
	});

})();
