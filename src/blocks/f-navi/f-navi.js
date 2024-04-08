import { slideToggle } from "../../js/libs/helpers";

(() => {

	document.querySelectorAll('.f-navi__block > .f-navi__title').forEach(cap => {
		cap.addEventListener('click', e => {
			if(getComputedStyle(e.target).cursor !== 'pointer') return;

			e.stopPropagation();
			e.target.classList.toggle('opened', slideToggle(cap.nextElementSibling, 400));
		})
	});

})();