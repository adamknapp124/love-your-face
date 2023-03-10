import React from 'react';

import { NavLink } from 'react-router-dom';
import styles from '../scss/button.module.scss';

const STYLE = [`${styles.btnPrimary} ${styles.btnOutline}`];

const SIZES = [`${styles.btnMedium}, ${styles.btnLarge}`];

export const Button = ({
	children,
	type,
	onClick,
	buttonStyle,
	buttonSize,
}) => {
	const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];

	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

	return (
		<NavLink to="/sign-up" className={styles.btnMobile}>
			<button
				className={`${styles.btn} ${checkButtonStyle} ${checkButtonSize}`}
				onClick={onClick}
				type={type}>
				{children}
			</button>
		</NavLink>
	);
};
