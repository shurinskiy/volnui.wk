(() => {

	const aside = document.querySelector('.detail__sticky');
	if (! aside) return;

	const asideHeight = aside.offsetHeight;
	const screenHeight = window.innerHeight;
	const startScroll = 20;
	const endScroll = window.innerHeight - asideHeight;
	const currPos = window.scrollY;

	aside.style.top = startScroll + 'px'

	const asideScrollListener = () => {
		if (asideHeight <= screenHeight) {
			aside.style.top = startScroll + 'px'
			return
		}
		endScroll = window.innerHeight - aside.offsetHeight

		let asideTop = parseInt(aside.style.top.replace('px;', ''))

		if (asideHeight > screenHeight) {
			if (window.scrollY < currPos) {
				if (asideTop < startScroll) {
					aside.style.top = (asideTop + currPos - window.scrollY) + 'px'
				} else if (asideTop >= startScroll && asideTop !== startScroll) {
					aside.style.top = startScroll + 'px'
				}
			} else {
				if (asideTop > endScroll) {
					aside.style.top = (asideTop + currPos - window.scrollY) + 'px'
				} else if (asideTop < (endScroll) && asideTop !== endScroll) {
					aside.style.top = endScroll + 'px'
				}
			}
		}
		currPos = window.scrollY
	}

	window.addEventListener('resize', () => {
		asideHeight = aside.offsetHeight
		screenHeight = window.innerHeight
	})

	window.addEventListener('scroll', asideScrollListener, {
		capture: true,
		passive: true
	})	

})();
