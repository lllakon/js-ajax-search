const results = document.getElementById('results');

export function generateCards(data) {
	const cards = [];
	console.log(data)
	
	data.forEach((e) => {
	
		cards.push(
		`
			<div class="card">
			<div class="image-wrapper"><img src="${e.image}" class="card__img" alt="Card image"></img></div>
			
				<div class=card__content>
					<h3 class="card__title">${e.title}</h3>
					<div class="card__description"></div>
					<div class="card__info">
						<div class="card__param">
							<label>Год:</label>
							<div id="year"></div>
						</div>
						<div class="card__param">
							<label>Цвет:</label>
							<div id="color"></div>
						</div>
						<div class="card__param">
							<label>Категория:</label>
							<div id="category"></div>
						</div>
						<div class="card__param">
							<label>Страна:</label>
							<div id="country"></div>
						</div>
					</div>
					<div class="card__footer">
						<div class="card__count">
							<label>Количество:</label>
							<div id="count"></div>
						</div>
							<div class="card__cost">
								<label>Цена:</label>
								<div></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`);
	
	})
	
	// for(let i = 0; i < data.length; i++) {
	// 	cards.push(
	// 	`
	// 		<div class="card">
	// 		<img src="" class="card__img" alt="Card image"></img>
	// 			<div class=card__content>
	// 				<h3 class="card__title">${data.title}</h3>
	// 				<div class="card__description"></div>
	// 				<div class="card__info">
	// 					<div class="card__param">
	// 						<label>Год:</label>
	// 						<div id="year"></div>
	// 					</div>
	// 					<div class="card__param">
	// 						<label>Цвет:</label>
	// 						<div id="color"></div>
	// 					</div>
	// 					<div class="card__param">
	// 						<label>Категория:</label>
	// 						<div id="category"></div>
	// 					</div>
	// 					<div class="card__param">
	// 						<label>Страна:</label>
	// 						<div id="country"></div>
	// 					</div>
	// 				</div>
	// 				<div class="card__footer">
	// 					<div class="card__count">
	// 						<label>Количество:</label>
	// 						<div id="count"></div>
	// 					</div>
	// 						<div class="card__cost">
	// 							<label>Цена:</label>
	// 							<div></div>
	// 						</div>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	`);
	// }

	results.innerHTML = cards.join('');
}
