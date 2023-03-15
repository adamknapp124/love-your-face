import styles from '../scss/shoppingCart.module.scss';

export default function ShoppingCart({ handleClose }) {
	return (
		<div className={styles.cartBackdrop} onClick={handleClose}>
			<div className={styles.shoppingCart} onClick={(e) => e.stopPropagation()}>
				<h1>Shopping Cart</h1>
			</div>
		</div>
	);
}
