import { results } from '../main.js';

export function renderCards(data) {
	let cards = [];
	data.forEach((e) => {
		cards.push(
		`
			<div class="card">
			<div class="card-overlay" id="${e.id}"></div>
			<div class="image-wrapper"><img src="${e.image}" class="card__img" alt="Card image"></img></div>
			
				<div class=card__content>
					<h3 class="card__title">${e.title}</h3>
					<div class="card__description">${e.description}</div>
					<div class="card__info">
						<div class="card__param">
							<label>Year:</label>
							<div id="year">${randomYear(2018, 2024)}</div>
						</div>
						<div class="card__param">
							<label>Category:</label>
							<div id="category">${e.category}</div>
						</div>
						<div class="card__param">
							<label>Delivery from:</label>
							<div id="country">Florida</div>
						</div>
					</div>
					<div class="card__footer">
						<div class="card__count">
							<label>Rating:</label>
							<div id="rating">${e.rating.rate}</div>
						</div>
							<div class="card__cost">
								<label>Price:</label>
								<div>${e.price}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`);
	});

	results.innerHTML = cards.join('');
	
}
///
function randomYear(min, max){
	const r = Math.random()*(max-min) + min
	return Math.floor(r)
}