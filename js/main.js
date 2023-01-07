import { renderCards } from "./components/cardsRender.js";
import { cardOpenFn } from "./components/cardModal.js";
import { productSearch } from "./components/productSearch.js";
import { cardsFilter } from "./components/filter.js"
const API_URL = 'https://fakestoreapi.com/products';
export const results = document.querySelector('.results');

getData(API_URL);

async function getData(url) {
	let data = [];

	try {
		const response = await fetch(url);
		data = await response.json();

		renderCards(data);
		cardsFilter(data);
		productSearch(data);
		cardOpenFn(data);
	} catch (e) {
		console.error(e)
		const result = document.querySelector('.results');
		result.innerHTML = 'Ошибка <br> Что-то пошло не так :(';
		result.classList.add('loading-error');
	}
}