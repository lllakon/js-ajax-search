export function cardOpenFn(data) {
	console.log('Загрузились');
	console.log('Модалки включены');


	// const loadedCards = document.querySelectorAll('.card-overlay');
	// loadedCards.forEach((item) => {
	// 	item.addEventListener('click', () => {
	// 		console.log(item.id)
	// 	});
	// });

	document.addEventListener('click', (e) => {
		let cardClass = e.target;
		let cardId = e.target.id;
		if (cardId) {
			data.filter((item) => {
				if(item.id == cardId) {

					console.log('ID совпал')
					cardClass.classList.add('card--active'); // Показать модалку
					document.body.classList.add('scroll-off'); // Выключение скролла
					
					const div = document.createElement('div');
					div.classList.add('modal-window');
					document.body.append(div)
					div.innerHTML = 'hi'
				}
			});
		}

	});

	// console.log(data)
	// data.forEach((e) => {
	// 	console.log(e.id)
	// });
}