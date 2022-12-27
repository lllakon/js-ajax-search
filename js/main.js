import { renderCards } from "./components/cardsRender.js";
import { cardOpenFn } from "./components/cardModal.js";
const API_URL = 'https://fakestoreapi.com/products';

getData(API_URL);

async function getData(url) {
	let data = [];

	try {
		const response = await fetch(url);
		data = await response.json();

		renderCards(data);
		cardOpenFn(data);
	} catch (e) {
		console.error(e)
		const result = document.querySelector('.results');
		result.innerHTML = 'Ошибка <br> Что-то пошло не так :(';
		result.classList.add('loading-error');
	}
}