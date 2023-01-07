import { renderCards } from './cardsRender.js';
import { results } from '../main.js';

const input = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');

export function productSearch(data) {
	let searchValue = '';

	// Изменения значения поля поиска
	input.oninput = (e) => {
		searchValue = e.target.value;
	}

	// Клик по кнопке поиска
	searchBtn.onclick = () => {
		filterSearch(data);
	}

	// Enter в input
	input.addEventListener('keydown', () => {
		if(event.keyCode === 13) {
			filterSearch(data);
		}
	});
	// Поиск товаров
	function filterSearch(products) {
		const reg = new RegExp(searchValue, 'i');
		
		const filteredCardsData = products.filter(card => {
			if(reg.test(card.title)) {
				return true;
			} else {
				return false;
			}
		}
		);
		
		if (filteredCardsData.length > 0) {
			renderCards(filteredCardsData);
		} else {
			results.innerHTML = `
				<div class="result-error">No results for <span>${searchValue}</span>.<br>
					<p>Try checking your spelling or use more general terms<p>
				</div>
			`;
		}
	}
}
