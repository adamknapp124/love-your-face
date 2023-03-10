import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from '@mui/system';
import { Button } from '@mui/material';

import styles from '../scss/navbar.module.scss';
import cart from '../images/SVG/cart.svg';
import logo from '../images/loveyou-logo.svg';

export default function Navbar(props) {
	const [dropdownMenu, setDropdownMenu] = useState(false);

	const handleClick = () => {
		props.setClick(!props.click);
	};

	const showBurgerMenu = () => {
		if (window.innerWidth <= 960) {
			setDropdownMenu(true);
		} else {
			setDropdownMenu(false);
		}
	};

	window.addEventListener('resize', showBurgerMenu);

	return (
		<nav className={styles.navbar}>
			<Container>
				<div className={styles.navContainer}>
					{!dropdownMenu && (
						<div className={styles.nav}>
							<NavLink to="/" className={styles.link}>
								Home
							</NavLink>
							<NavLink to="/about" className={styles.link}>
								About
							</NavLink>
							<NavLink to="/services" className={styles.link}>
								Services
							</NavLink>
							<NavLink to="/store" className={styles.link}>
								Schedule
							</NavLink>
						</div>
					)}
					{dropdownMenu && (
						<div className={styles.menuIcon} onClick={handleClick}>
							<i className={props.click ? 'fas fa-times' : 'fas fa-bars'} />
						</div>
					)}
					<div className={styles.logo}>
						<NavLink to="/" className={styles.logo}>
							<img src={logo} alt="" />{' '}
						</NavLink>
					</div>
					<Button className={styles.cart} variant="outlined">
						<img src={cart} alt="" />
						<div className={styles.cartNotify}>3</div>
					</Button>
				</div>
			</Container>
		</nav>
	);
}
