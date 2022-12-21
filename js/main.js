import { generateCards } from './cardsRender.js';

const API_URL = 'https://fakestoreapi.com/products';

getData(API_URL);

export async function getData(url) {
	try {
		const response = await fetch(url);
		const data = await response.json();
		generateCards(data);
	} catch (e) {
		console.error(e)
		document.querySelector('.results').innerHTML = 'Что-то пошло не так :('
	}
}
