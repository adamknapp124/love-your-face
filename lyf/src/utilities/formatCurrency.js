export default function formatCurrency(number) {
	const currency_formatter = new Intl.NumberFormat(undefined, {
		currency: 'USD',
		style: 'currency',
	});
	return currency_formatter.format(number);
}
