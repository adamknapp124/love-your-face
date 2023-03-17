import { Button } from '@mui/material';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import { getProductData } from '../data/products';

export default function CartProduct(props) {
	const cart = useContext(CartContext);
	const id = props.id;
	const quantity = props.quantity;
	const productData = getProductData(id);

	return (
		<>
			<h3>{productData.name}</h3>
			<p>{quantity} total</p>
			<p>${(quantity * productData.price).toFixed(2)}</p>
			{/* <img src={product.imgUrl} alt="" /> */}
			<Button variant="outlined" onClick={() => cart.deleteFromCart(id)}>
				Remove
			</Button>
			<hr></hr>
		</>
	);
}
