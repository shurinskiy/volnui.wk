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

})();