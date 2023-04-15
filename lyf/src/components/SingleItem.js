import React from 'react';
import { useParams } from 'react-router-dom';

import formatCurrency from '../utilities/formatCurrency';

import { getProducts } from '../data/products';
// import styles from '../scss/singleItem.module.scss';

// import { Container } from '@mui/system';
// import { Grid } from '@mui/material';

export default function SingleItem(props) {
	const { slug } = useParams();
	const product = getProducts(slug);

	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<>
			<div>{product.name}</div>
			<div>
				<img src={product.imgUrl[0]} alt=""></img>
			</div>
			<div>{product.description}</div>
			<div>{product.category}</div>
			<div>{formatCurrency(product.price)}</div>
		</>
	);
}
