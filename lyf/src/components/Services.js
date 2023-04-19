import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { Grid } from '@mui/material';

import styles from '../scss/services.module.scss';

import bikini from '../images/bikini.jpg';
import brazilian from '../images/brazilian.jpg';
import eyebrows from '../images/eyebrows.jpg';
import legs from '../images/full-leg.jpg';
import halfLeg from '../images/half-leg.jpg';
import lips from '../images/lips.jpg';
import underarms from '../images/underarms.jpg';
import facial from '../images/facial.jpg';

// import { getServices } from '../data/services';

export default function Services(props) {
	const [hoveredService, setHoveredService] = useState(null);
	// const { identifier } = useParams();
	// const service = getServices(identifier);

	const handleMouseEnter = (serviceName) => {
		setHoveredService(serviceName);
	};

	const handleMouseLeave = () => {
		setHoveredService(null);
	};

	const getServiceCard = (serviceName, imageSource, serviceIdentifier) => {
		return (
			<Grid item xs={12} md={3} className={styles.serviceCard}>
				<NavLink
					to={`/services/${serviceIdentifier}`}
					onMouseEnter={() => handleMouseEnter(serviceName)}
					onMouseLeave={handleMouseLeave}
					className={styles.imageWrapper}>
					<img src={imageSource} alt="" />
					{hoveredService === serviceName && (
						<div className={styles.serviceName}>{serviceName}</div>
					)}
				</NavLink>
			</Grid>
		);
	};

	return (
		<div className={styles.main}>
			<h1 className={styles.header}>Services</h1>
			<Grid container className={styles.cards}>
				{getServiceCard('Brazilian Wax', brazilian)}
				{getServiceCard('Bikini Wax', bikini)}
				{getServiceCard('Eyebrow Sculpting', eyebrows)}
				{getServiceCard('Full Leg Wax', legs)}
				{getServiceCard('Half Leg Wax', halfLeg)}
				{getServiceCard('Lip Wax', lips)}
				{getServiceCard('Underarms', underarms)}
				{getServiceCard('Total Facial', facial)}
			</Grid>
		</div>
	);
}
