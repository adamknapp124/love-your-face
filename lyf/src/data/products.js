const productsArray = [
	{
		id: 'price_1Mm4UlESzDk5tVATRLSA6E3M',
		name: 'BIOME+ cleansing comfort balm',
		price: 39,
		imgUrl: '../images/biome-cleansing-comfort-balm.webp',
	},
	{
		id: 'price_1Mm4W4ESzDk5tVATeyQ9KIrq',
		name: 'ORMEDIC balancing facial cleanser',
		price: 38,
		imgUrl: '../images/ormedic-balancing-facial-cleanser.webp',
	},
	{
		id: 'price_1Mm4WZESzDk5tVATh2dMJi39',
		name: 'Discovery-size ORMEDIC balancing facial cleanser',
		price: 12,
		imgUrl: '../images/ormedic-balancing-facial-cleanser-discovery.webp',
	},
	{
		id: 'price_1Mm4XFESzDk5tVAT8vmimYR7',
		name: 'VITAL C hydrating facial cleanser',
		price: 38,
		imgUrl: '../images/vital-c-hydrating-facial-cleanser.webp',
	},
	{
		id: 'price_1Mm4XdESzDk5tVATuIQEX9Bn',
		name: 'the MAX facial cleanser',
		price: 36,
		imgUrl: '../images/the-max-facial-cleanser.webp',
	},
	{
		id: 'price_1Mm4XuESzDk5tVATZgoSrmmr',
		name: 'AGELESS total facial cleanser',
		price: 38,
		imgUrl: '../images/ormedic-balancing-facial-cleanser.webp',
	},
	{
		id: 'price_1Mm4YTESzDk5tVATIoVBEQl0',
		name: 'CLEAR CELL salicylic gel cleanser',
		price: 36,
		imgUrl: '../images/clear-cell-salicylic-gel-cleanser.webp',
	},
	{
		id: 'price_1Mm4YyESzDk5tVATqTnjxOs5',
		name: 'Discovery-size CLEAR CELL clarifying salicylic gel cleanser',
		price: 11,
		imgUrl: '../images/clear-cell-salicylic-gel-cleanser-discovery.webp',
	},
	{
		id: 'price_1Mm4ZNESzDk5tVATtMrw71H3',
		name: 'ILUMA intense brightening exfoliating cleanser',
		price: 40,
		imgUrl: '../images/iluma-intense-brightening-exfoliating-cleanser.webp',
	},
	{
		id: 'price_1Mm4ZjESzDk5tVAT6YFQTUC9',
		name: 'Discovery-size ILUMA intense brightening exfoliating cleanser',
		price: 18.3,
		imgUrl:
			'../images/iluma-intense-brightening-exfoliating-cleanser-discovery.webp',
	},
	{
		id: 'price_1Mm4aCESzDk5tVAT8YElE662',
		name: 'I BEAUTY refreshing facial wipes',
		price: 16,
		imgUrl: '../images/i-beauty-refreshing-facial-wipes.webp',
	},
	{
		id: 'price_1Mm4aeESzDk5tVATr9exVpDY',
		name: 'IMAGE MD restoring facial cleanser',
		price: 12,
		imgUrl: '../images/image-md-restoring-facial-cleanser.webp',
	},
	{
		id: 'price_1Mm4b3ESzDk5tVATil4Gi5AD',
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
