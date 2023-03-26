import { Button } from '@mui/material';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import { getProductData } from '../data/products';

import styles from '../scss/cartProducts.module.scss';

import example from '../images/facial.jpg';

export default function CartProduct(props) {
	const cart = useContext(CartContext);
	const id = props.id;
	const quantity = props.quantity;
	const productData = getProductData(id);

	return (
		<div className={styles.itemCard}>
			<div className={styles.info}>
				<div className={styles.cartThumbnail}>
					<img src={productData.imgUrl} alt=""></img>
				</div>
				<div className={styles.itemDescription}>
					<h3>{productData.name}</h3>
					<div>{quantity} total</div>
					<div>${(quantity * productData.price).toFixed(2)}</div>
				</div>
			</div>
			<Button variant="outlined" onClick={() => cart.deleteFromCart(id)}>
				Remove
			</Button>
			<hr></hr>
		</div>
	);
}
