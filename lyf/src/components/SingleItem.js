import React from 'react';
import { useParams } from 'react-router-dom';

import { Container } from '@mui/system';

import formatCurrency from '../utilities/formatCurrency';

import { getProducts } from '../data/products';
import styles from '../scss/singleItem.module.scss';

// import { Container } from '@mui/system';
// import { Grid } from '@mui/material';

export default function SingleItem() {
	const { slug } = useParams();
	const product = getProducts(slug);

	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<div className={styles.mainContent}>
			<div className={styles.productInfo}>
				<Container>
					<div className={styles.header}>{product.name}</div>
					<div className={styles.body}>
						<img src={product.imgUrl[0]} alt=""></img>
						<div className={styles.salesContent}>
							<div>{product.description}</div>
							<div>{product.category}</div>
							<div className={styles.price}>
								{formatCurrency(product.price)}
							</div>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
}
