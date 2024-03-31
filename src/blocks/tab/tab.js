import { driveTabs } from "../../js/libs/driveTabs";

(() => {
	
	driveTabs({
		container: '.tab',
		button: '.tab__button',
		block: '.tab__block',
		cls: 'active'
	}, function() {
		this.classList.add('showing');
	
		this.addEventListener('animationend', e => {
			this.classList.remove('showing');
		}, { once: true });
	});

})();
