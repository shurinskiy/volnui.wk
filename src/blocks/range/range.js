import { rangeTweaker } from "../../js/libs/rangeTweaker";

(() => {
	rangeTweaker(document.querySelector('.range'), {
		// startMin: 0,
		// startMax: 7500,
		// maxPrice: 10000,
		input: false,
	});

})();