import React from 'react';

import styles from '../scss/singleItem.module.scss';
import example from '../images/facial.jpg';

import { Container } from '@mui/system';
import { Grid } from '@mui/material';

export default function SingleItem() {
	return (
		<Container>
			<Grid container className={styles.item}>
				<Grid item xs={7} className={styles.images}>
					<Grid container className={styles.imageBackdrop}>
						<img src={example} alt="" className={styles.image}></img>
						<div className={styles.imageSplide}></div>
					</Grid>
				</Grid>
				<Grid item xs={5} className={styles.purchaseInfo}>
					<h1>BIOME+ cleansing comfort balm</h1>
					<small>Size: 4 fl oz./118mL</small>
					<div className={styles.reviews}>Reviews</div>
					<div className={styles.purchaseOptions}>
						<h3>One-time purchase</h3>
						<h3>Subscribe and save</h3>
					</div>
					<div className={styles.quantity}>Quantity</div>
					<button>Add To Cart</button>
					<div className={styles.itemDescription}>
						A skin-nourishing cleansing balm that melts away makeup, sunscreen
						and impurities, with certified microbiome-friendly squalane and
						plant oils
					</div>
				</Grid>
			</Grid>
		</Container>
	);
}
