import ymaps from 'ymaps';

(() => {

	const yurl = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';

	ymaps.load(yurl).then(map => {
		const shops_dom = document.querySelector('.map');
		let ctrlKey = false;
		
		if (shops_dom) {
		
			const shops = new map.Map(shops_dom, {
				center: [55.755864, 37.617698],
				controls: [],
				zoom: 12
			});
	
			const zoomControl = new map.control.ZoomControl({
				options: {
					size: 'small',
					float: 'none',
					position: {
						bottom: 10,
						left: 10
					}
				}
			});
			
			// Кастомная иконка
			const myIcon = {
				iconLayout: 'default#image',
				iconImageHref: 'images/map-hint-icon.svg',
				iconImageSize: [36, 36],
				iconImageOffset: [-15, -15]
			};
			
			// Магазины
			const myObjects = [
				new map.Placemark([55.742884, 37.657745], {
					balloonContentHeader: '<a href = "#">"Volnui"</a><br>' +
						'<span class="description">Сеть магазинов одежды</span>',
					balloonContentBody: '<img src="images/logo.svg" height="41" width="150"> <br/> ' +
						'<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
						'<b>Время работы:</b> <br/> Пн-Пт: 09:00-17:30 (по мск)',
					balloonContentFooter: 'Волнуй, а не волнуйся!',
					hintContent: 'Магазин одежды "Volnui"'
				}, { ...myIcon }),

				new map.Placemark([55.760753, 37.625100], {
					balloonContent: '<strong>Второй магазин</strong>',
					hintContent: 'Магазин одежды "Volnui"'
				}, { ...myIcon }),
				
				new map.Placemark([55.749851, 37.567060], {
					balloonContent: '<strong>Третий магазин</strong>',
					hintContent: 'Магазин одежды "Volnui"'
				}, { ...myIcon })
			];
	

			shops.controls.add(zoomControl);
			shops.behaviors.disable('scrollZoom');
			myObjects.forEach(obj => shops.geoObjects.add(obj));


			// Переход к объекту с открытием балуна, по внешним ссылкам
			document.querySelectorAll('.c-card__maplink').forEach(link => {
				link.addEventListener('click', function(e) {
					// e.preventDefault();
					const coords = this.getAttribute('data-coords').split(',').map(Number);

					shops
						.setCenter(coords, 15, { duration: 500 })
						.then(() => shops.setZoom(17, { duration: 500 }))
						.then(() => map.geoQuery(myObjects).getCentralObject(shops).balloon.open());
				});
			})

			// Масштабирование карты с зажатым контролом
			document.addEventListener('keydown', (e) => {
				if((e.isComposing || e.keyCode === 17) && !ctrlKey) {
					ctrlKey = true;
					shops.behaviors.enable('scrollZoom');
				}
			});

			document.addEventListener('keyup', (e) => {
				if((e.isComposing || e.keyCode === 17) && ctrlKey) {
					ctrlKey = false;
					shops.behaviors.disable('scrollZoom');
				}
			});
	
		}
	}).catch(error => console.log('Failed to load Yandex Maps', error));

})();
