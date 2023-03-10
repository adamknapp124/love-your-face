import React from 'react';

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

export default function Services() {
	return (
		<Grid container className={styles.cards}>
			<Grid item xs={12} md={3} className={styles.serviceCard}>
				<img src={brazilian} alt="" />
			</Grid>
			<Grid item xs={12} md={3} className={styles.serviceCard}>
				<img src={bikini} alt="" />
			</Grid>
			<Grid item xs={12} md={3} className={styles.serviceCard}>
				<img src={eyebrows} alt="" />
			</Grid>
			<Grid item xs={12} md={3} className={styles.serviceCard}>
				<img src={legs} alt="" />
			</Grid>
			<Grid item xs={12} md={3} className={styles.serviceCard}>
				<img src={halfLeg} alt="" />
			</Grid>
			<Grid item xs={12} md={3} className={styles.serviceCard}>
				<img src={lips} alt="" />
			</Grid>
			<Grid item xs={12} md={3} className={styles.serviceCard}>
				<img src={underarms} alt="" />
			</Grid>
			<Grid item xs={12} md={3} className={styles.serviceCard}>
				<img src={facial} alt="" />
			</Grid>
		</Grid>
	);
}
