import { results } from '../main.js';
import { renderCards } from "./cardsRender.js";

const filterRating = document.getElementById('filter-rating');
const filterCategory = document.getElementById('filter-category');

export function cardsFilter(data) {
	// Фильтер по категории
	filterCategory.addEventListener('change', (e) => {
		const value = e.target.value;
		filterApply(value, data);
	});

	function filterApply(value, products) {
		const reg = new RegExp(value);
		
		const filteredCardsData = products.filter(card => {
			if(reg.test(card.category)) {
				return true;
			} else {
				return false;
			}
		});

		if (filteredCardsData.length > 0) {
			renderCards(filteredCardsData);
		} else {
			results.innerHTML = `
				<div class="result-error">Sorry, nothing was found in the category ${value}</span>.<br>
					<p>Try changing the filter settings<p>
				</div>
			`;
		}
	}
	}
