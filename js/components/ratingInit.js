// Card rating
export function initRating() {
	let value = document.querySelector('.rating__value');
	let ratingActive = document.querySelector('.rating__active');

	setRatingActiveWidth(value);

	function setRatingActiveWidth(value) {
		const ratingActiveWidth = +value.textContent / 0.05;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}
}