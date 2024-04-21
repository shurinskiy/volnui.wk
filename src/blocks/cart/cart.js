(() => {
	document.querySelectorAll('.cart__control').forEach(control => {
		const buttons = control.querySelectorAll('button');
		const input = control.querySelector('input');

		control.addEventListener('click', e => {
			e.preventDefault();

			if(e.target === buttons[1]) {
				++input.value;
			} else if (e.target === buttons[0]) {
				(input.value > 0) && --input.value;
			}
		});
	});

})();
