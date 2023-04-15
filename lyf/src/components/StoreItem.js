import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import formatCurrency from '../utilities/formatCurrency';
import { CartContext } from '../CartContext';

import styles from '../scss/storeItem.module.scss';

import {
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
} from '@mui/material';

export default function StoreItem(props) {
	// props.product is the products
	const product = props.product;
	const cart = useContext(CartContext);
	const productQuantity = cart.getProductQuantity(product.id);

	return (
		<Card
			className={styles.cards}
			sx={{
				maxWidth: 345,
				height: 280,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}>
			<NavLink to={`/product/${product.slug}`}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="140"
						src={product.imgUrl[0]}
						alt={product.id}
					/>
					<CardContent>
						<Typography
							gutterBottom
							variant="small"
							component="div"
							className={styles.noWrap}>
							{product.name}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{formatCurrency(product.price)}
						</Typography>
					</CardContent>
				</CardActionArea>
			</NavLink>
			<CardActions
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<div className={styles.quantity}>
					{productQuantity === 0 ? (
						<Button
							onClick={() => cart.addOneToCart(product.id)}
							variant="contained">
							Add To Cart
						</Button>
					) : (
						<div className={styles.quantButtons}>
							<Button
								onClick={() => cart.removeOneFromCart(product.id)}
								className={styles.minus}>
								-
							</Button>
							<span>In Cart: {productQuantity}</span>
							<Button
								onClick={() => cart.addOneToCart(product.id)}
								className={styles.plus}>
								+
							</Button>
						</div>
					)}
				</div>
			</CardActions>
		</Card>
	);
}
