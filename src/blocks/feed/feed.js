(() => {
	const videos = document.querySelectorAll('.feed__video video');

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => ! entry.isIntersecting ? entry.target.pause() : entry.target.play());
	}, { threshold: 0.4 });

	videos.forEach(video => {
		video.addEventListener('pause', e => e.currentTarget.controls = false);
		video.addEventListener('play', e => e.currentTarget.controls = false);
		video.controls = false;

		observer.observe(video);
	});	

})();