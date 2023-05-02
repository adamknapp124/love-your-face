import React from 'react';
import { Container } from '@mui/system';
import styles from '../scss/serviceInfo.module.scss';
import { useParams } from 'react-router-dom';
import formatCurrency from '../utilities/formatCurrency';

import { getServices } from '../data/services';

export default function BrazilianInfo(props) {
	const { identifier } = useParams();
	const service = getServices(identifier);

	if (!service) {
		return <div>Product not found</div>;
	}
	return (
		<Container>
			<div className={styles.serviceInfo}>
				<div>{service.name}</div>
				<img src={service.imageUrl} alt=""></img>
				<div>{formatCurrency(service.price)}</div>
				<div>{service.description}</div>
			</div>
		</Container>
	);
}
