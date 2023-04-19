import React from 'react';
import { useParams } from 'react-router-dom';

import { getServices } from '../data/services';

export default function BrazilianInfo(props) {
	const { identifier } = useParams();
	const service = getServices(identifier);

	if (!service) {
		return <div>Product not found</div>;
	}
	return (
		<>
			<div>{service.name}</div>
			<div>{service.name}</div>
			<div>{service.name}</div>
			<div>{service.name}</div>
			<div>{service.name}</div>
			<div>{service.name}</div>
			<div>{service.name}</div>
			<div>{service.name}</div>
			<div>{service.name}</div>
			<div>{service.name}</div>
			<div>{service.name}</div>
			<div>{service.name}</div>
		</>
	);
}
