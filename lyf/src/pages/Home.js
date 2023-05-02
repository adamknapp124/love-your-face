import React from 'react';

import { Container } from '@mui/system';

import Services from '../components/Services';

import styles from '../scss/home.module.scss';

export default function Home() {
	return (
		<div className={styles.homepage}>
			<div className={styles.imageContainer}>
				<div className={styles.hero}></div>
			</div>
			<main className={styles.content}>
				<Container>
					<div className={styles.mainContent}>
						<div className={styles.bubble}>
							<div>
								Hello Beautiful People! Allow me to introduve myself! My name is
								Christina Durkan, and I am a licensed esthetician in Orofino,
								ID. I am deeply dedicated to helping other people embrace their
								true, natural beauty, inside and out. My facials are customized
								to each and every persons specific skincare needs, and range
								anywhere from anti-aging for mature skin, deep-cleaning for acne
								prone skin, brightening for hyperpigmentation, and calming for
								skin that is sensitive and prone to redness. My 11 years of spa
								experience combined with my holistic approach to skincare and my
								intuitive touch and ability to soothe and calm your energy,
								makes my treatment room the perfect safe place for my clientsto
								relax, unwind, and transform. I'm looking forward to seeing you
								soon.
							</div>
							<Services />
						</div>
					</div>
				</Container>
			</main>
		</div>
	);
}
