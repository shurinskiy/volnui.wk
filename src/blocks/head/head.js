(() => {

	document.querySelector('.head__intro button')?.addEventListener('click', ({target: t}) => {
		let span = t.parentNode.querySelector('span');
		span.style.display = 'inline';
		
		t.remove();
	});

})();