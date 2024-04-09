(() => {

	document.querySelector('button.controls__button_encrease')?.addEventListener('click', ({currentTarget: t}) => {
		t.classList.toggle('active', document.querySelector('.feed').classList.toggle('feed_encreased'));
	});

})();
