import { itemsLimiter } from "../../js/libs/itemsLimiter";

(() => {

	itemsLimiter(document.querySelectorAll('[data-hidden]'), {
		buttonClass: 'news__more button',
		buttonText: 'Смотреть все',
	});

})();