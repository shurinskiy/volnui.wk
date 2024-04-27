import scrollLock from 'scroll-lock';
import { makeModalFrame } from "../../js/libs/modal";

(() => {
	makeModalFrame({
		open: function() {
			scrollLock.disablePageScroll();
		},
		close: function() {
			scrollLock.enablePageScroll();
		}
	});

})();