import React from 'react';
import { productsArray } from '../data/products';

import styles from '../scss/store.module.scss';

import { Grid } from '@mui/material';
import { Container } from '@mui/system';

import StoreItem from '../components/StoreItem';

export default function Store() {
	return (
		<Container className={styles.store}>
			<h1>Store</h1>
			<Grid container spacing={2}>
				{productsArray.map((product, idx) => (
					<Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
						<StoreItem product={product}>{product.name}</StoreItem>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
