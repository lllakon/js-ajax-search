import { generateCards } from "./cardsRender.js";
import { cardOpenFn } from "./cardOpen.js";

export async function getData(url) {
	let data = [];

	try {
		const response = await fetch(url);
		data = await response.json();
		generateCards(data);
		cardOpenFn(data);
	} catch (e) {
		console.error(e)
		document.querySelector('.results').innerHTML = 'Что-то пошло не так :('
	}
}