import { initRating } from './ratingInit.js';

const ratings = document.querySelectorAll('.rating');
const results = document.querySelector('.results');

export function cardOpenFn(data) {
	results.addEventListener('click', (e) => {
		let cardClass = e.target;
		let cardId = e.target.id;
		
		if (cardId) {
			// Определение содержимого модального окна
			data.filter((item) => openModalWindow(item, cardClass, cardId));
			// Инициализация рейтинга
			initRating()
		}
	});
}

function openModalWindow(item, cardClass, cardId) {
	if(item.id == cardId) {
		cardClass.classList.add('card--active'); // Реакция карточки при показе модалки
		document.body.classList.add('scroll-off'); // Выключение скролла
		
		const modal = document.createElement('div');
		const overlay = document.createElement('div');
		
		modal.classList.add('modal-window');
		overlay.classList.add('overlay');
		
		document.body.append(overlay, modal);
		modal.innerHTML = `
		<div class="modal-window__close-btn">X</div>
		<img class="modal-window__image" style="width:200px;" src="${item.image}" alt="Modal image">
		<div class="modal-window__title">${item.title}</div>
		<div class="modal-window__rating rating">
	
			<div class="rating__body">
				<div class="rating__active"></div>
			</div>
			<div class="rating__value">${item.rating.rate}</div>
	
		</div>
		<div class="modal-window__number">${item.price}$</div>
		<div class="modal-window__description">${item.description}</div>
		<div class="modal-window__info param">
			<div class="param__item"></div>
			<div class="param__item"></div>
			<div class="param__item"></div>
		</div>
		`
		// Прослушка клика для закрытия модалки
		window.addEventListener('click', (e) => {
			e.target.classList.contains('overlay') || e.target.classList.contains('modal-window__close-btn') 
			? closeModalWindow(overlay, modal, cardClass)
			: null
		})
	}
}

function closeModalWindow(modal, overlay, cardClass) {
	modal.remove();
	overlay.remove();

	cardClass.classList.remove('card--active'); // Реакция карточки при показе модалки
	document.body.classList.remove('scroll-off'); // Включить скролл
}
