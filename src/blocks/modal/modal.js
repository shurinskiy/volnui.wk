import scrollLock from 'scroll-lock';
import { makeModalFrame } from "../../js/libs/modal";

(() => {
	makeModalFrame({
		init: function(underlay) {
			underlay.setAttribute('data-scroll-lock-scrollable', '');
		},
		open: function() {
			scrollLock.disablePageScroll();
		},
		close: function() {
			scrollLock.enablePageScroll();
		}
	});

})();