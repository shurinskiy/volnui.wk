import { driveTabs } from "../../js/libs/driveTabs";

(() => {

	driveTabs({
		container: '.info',
		button: '.info__button',
		block: ['.info__block', '.info__title']
	}, function() {
		this.classList.add('showing');
	
		this.addEventListener('animationend', e => {
			this.classList.remove('showing');
		}, { once: true });
	});

})();
