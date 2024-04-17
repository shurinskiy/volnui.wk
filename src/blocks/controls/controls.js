import { slideToggle } from "../../js/libs/helpers";

(() => {
	document.querySelector('button.controls__button_encrease')?.addEventListener('click', ({currentTarget: t}) => {
		const feed = document.querySelector('.feed');
		const items = feed.querySelectorAll('.feed__item');

		t.classList.toggle('active', feed.classList.toggle('feed_encreased'));

		items.forEach(item => {
			item.classList.add('showing');
	
			item.addEventListener('animationend', e => {
				item.classList.remove('showing');
			}, { once: true });
		})
	});

	document.querySelector('button.controls__button_filter')?.addEventListener('click', ({currentTarget: t}) => {
		slideToggle(document.querySelector('.filter'), {
			duration: 400,
			opacity: true
		});
	});

})();