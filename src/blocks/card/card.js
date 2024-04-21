import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

(() => {
	document.querySelectorAll('.card__slider.swiper')?.forEach((item, i) => {

		new Swiper(item, {
			modules: [Pagination],
			spaceBetween: 0,
			slidesPerView: 1,
			threshold: 10,
			pagination: {
				el: `.card__dots_${i}`,
				bulletClass: 'card__dot',
				bulletActiveClass: 'active'
			},
			on: {
				beforeInit: function(slider) {
					slider.el.querySelector('.card__dots').classList.add(`card__dots_${i}`);
				},
			}
		});
	});

	document.querySelectorAll('.card .card__favorite').forEach(button => {
		button.addEventListener('click', e => {
			e.preventDefault();
			e.currentTarget.classList.toggle('card__favorite_set');
		})
	})

})();
