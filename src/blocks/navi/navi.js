import { slideToggle } from "../../js/libs/helpers";

(() => {

	document.querySelectorAll('.navi__block > .navi__title').forEach(cap => {
		cap.addEventListener('click', e => {
			e.stopPropagation();
			e.target.classList.toggle('opened', slideToggle(cap.nextElementSibling, 400));
		})
	});

})();