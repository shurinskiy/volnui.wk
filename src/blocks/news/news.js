(() => {

	document.querySelectorAll('.news__items[data-hidden]').forEach(block => {
		const count = +block.dataset.hidden;
		const items = block.querySelectorAll('.news__item');
		const more = document.createElement('button');

		more.className = 'news__more button';
		more.innerText = 'Смотреть все';

		items.forEach((item, i) => {
			if (i >= count)
				item.style.display = 'none';
		});

		if (items.length > count) {
			block.parentNode.append(more);
		
			more.addEventListener('click', e => {
				items.forEach((item, i) => {

					if (i >= count) {
						item.classList.add('showing');
						item.removeAttribute('style');
	
						item.addEventListener('animationend', e => {
							item.classList.remove('showing');
						}, { once: true });
					}
						
				});

				more.remove();
			});
		}
	});

})();
