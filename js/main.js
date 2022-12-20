import { cardsData } from './data.js'

const results = document.getElementById('results');

function generateCards(count) {
	const cards = [];
	for(let i = 0; i < cardsData.length; i++) {
		cards.push(
		`
			<div class="card">
			<img src="https://placeimg.com/300/200/arch?id=${i}" class="card__img" alt="Card image"></img>
				<div class=card__content>
					<h3 class="card__title">${cardsData[i].title}</h3>
					<div class="card__description">${cardsData[i].decription}</div>
					<div class="card__info">
						<div class="card__param">
							<label>Год:</label>
							<div id="year">${cardsData[i].params.year}</div>
						</div>
						<div class="card__param">
							<label>Цвет:</label>
							<div id="color">${cardsData[i].params.color}</div>
						</div>
						<div class="card__param">
							<label>Категория:</label>
							<div id="category">${cardsData[i].params.category}</div>
						</div>
						<div class="card__param">
							<label>Страна:</label>
							<div id="country">${cardsData[i].params.country}</div>
						</div>
					</div>
					<div class="card__footer">
						<div class="card__count">
							<label>Количество:</label>
							<div id="count">${cardsData[i].count}</div>
						</div>
							<div class="card__cost">
								<label>Цена:</label>
								<div>${cardsData[i].cost}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`);
	}

	return cards;
}

const cardsArray = generateCards();

results.innerHTML = cardsArray.join('');