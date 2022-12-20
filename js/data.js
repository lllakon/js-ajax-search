const category = {
	tech: 'Техника',
	wear: 'Одежда',
	shoes: 'Обувь',
}

export const cardsData = [
	{
		id: 1,
		title: 'Телевизор',
		decription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, accusamus.',
		params: {
			year: 2022,
			color: 'Чёрный',
			country: 'Korean',
			category: category.tech
		},
		count: 3,
		cost: 30000,
	},
	{
		id: 2,
		title: 'Толстовка',
		decription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, accusamus.',
		params: {
			year: 2021,
			color: 'Чёрный',
			country: 'США',
			category: category.wear
		},
		count: 9,
		cost: 4500,
	},
	{
		id: 3,
		title: 'Кроссовки',
		decription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, accusamus.',
		params: {
			year: 2020,
			color: 'Фиолетовый',
			country: 'Франция',
			category: category.shoes
		},
		count: 0,
		cost: 60000,
	},
	{
		id: 4,
		title: 'Холодильник Bosch',
		decription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, accusamus.',
		params: {
			year: 2021,
			color: 'Серый',
			country: 'Германия',
			category: category.tech
		},
		count: 18,
		cost: 40000,
	},
	{
		id: 5,
		title: 'Джинсы мужские',
		decription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, accusamus.',
		params: {
			year: 2022,
			color: 'Синий',
			country: 'Россия',
			category: category.wear
		},
		count: 600,
		cost: 2500,
	},
];