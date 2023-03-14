const productsArray = [
	{
		id: 1,
		name: 'BIOME+ cleansing comfort balm',
		price: 39,
		imgUrl: '../images/biome-cleansing-comfort-balm.webp',
	},
	{
		id: 2,
		name: 'ORMEDIC balancing facial cleanser',
		price: 38,
		imgUrl: '../images/ormedic-balancing-facial-cleanser.webp',
	},
	{
		id: 3,
		name: 'Discovery-size ORMEDIC balancing facial cleanser',
		price: 12,
		imgUrl: '../images/ormedic-balancing-facial-cleanser-discovery.webp',
	},
	{
		id: 4,
		name: 'VITAL C hydrating facial cleanser',
		price: 38,
		imgUrl: '../images/vital-c-hydrating-facial-cleanser.webp',
	},
	{
		id: 5,
		name: 'the MAX facial cleanser',
		price: 36,
		imgUrl: '../images/the-max-facial-cleanser.webp',
	},
	{
		id: 6,
		name: 'AGELESS total facial cleanser',
		price: 38,
		imgUrl: '../images/ormedic-balancing-facial-cleanser.webp',
	},
	{
		id: 7,
		name: 'CLEAR CELL salicylic gel cleanser',
		price: 36,
		imgUrl: '../images/clear-cell-salicylic-gel-cleanser.webp',
	},
	{
		id: 8,
		name: 'Discovery-size CLEAR CELL clarifying salicylic gel cleanser',
		price: 11,
		imgUrl: '../images/clear-cell-salicylic-gel-cleanser-discovery.webp',
	},
	{
		id: 9,
		name: 'ILUMA intense brightening exfoliating cleanser',
		price: 40,
		imgUrl: '../images/iluma-intense-brightening-exfoliating-cleanser.webp',
	},
	{
		id: 10,
		name: 'Discovery-size ILUMA intense brightening exfoliating cleanser',
		price: 18.3,
		imgUrl:
			'../images/iluma-intense-brightening-exfoliating-cleanser-discovery.webp',
	},
	{
		id: 11,
		name: 'I BEAUTY refreshing facial wipes',
		price: '$16',
		imgUrl: '../images/i-beauty-refreshing-facial-wipes.webp',
	},
	{
		id: 12,
		name: 'IMAGE MD restoring facial cleanser',
		price: 12,
		imgUrl: '../images/image-md-restoring-facial-cleanser.webp',
	},
	{
		id: 13,
		name: 'Double Cleanse Power Duo',
		price: 45.46,
		imgUrl: '../images/double-cleanse-power-duo.webp',
	},
];

export function getProductData(id) {
	let productData = productsArray.find((product) => product.id === id);

	if (productData === undefined) {
		console.log('Product data does not exist for ID: ' + id);
		return undefined;
	}
	return productData;
}

export { productsArray };
