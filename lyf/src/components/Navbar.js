import React, { useState, useEffect, useRef, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { CartContext } from '../CartContext';

import { Container } from '@mui/system';
import { Button } from '@mui/material';

import styles from '../scss/navbar.module.scss';
import cart from '../images/SVG/cart.svg';
import logo from '../images/loveyou-logo.svg';

export default function Navbar(props) {
	const [dropdownMenu, setDropdownMenu] = useState(false);
	const [wasDismissed, setWasDismissed] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);
	const [cartClick, setCartClick] = useState(false);
	const [click, setClick] = useState(false);

	const closeMobileMenu = () => setClick(false);
	const shoppingCart = useContext(CartContext);
	const cartRef = useRef(null);

	const handleClick = () => {
		setClick(!click);
	};

	const handleCartToggleClick = () => {
		if (wasDismissed) {
			setWasDismissed(false);
			return;
		}
		setCartClick(true);
	};

	const handleClickOutsideCart = (event) => {
		if (
			cartRef.current &&
			cartClick &&
			!cartRef.current.contains(event.target)
		) {
			setWasDismissed(true);
			setCartClick(false);
		}
	};

	const showBurgerMenu = () => {
		if (window.innerWidth <= 960) {
			setDropdownMenu(true);
		} else {
			setDropdownMenu(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutsideCart);
		return () => {
			document.removeEventListener('mousedown', handleClickOutsideCart);
		};
	});

	useEffect(() => {
		showBurgerMenu();
	}, []);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		if (width > 960) {
			setClick(false);
		}
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [width]);

	const productsCount = shoppingCart.items.reduce(
		(sum, product) => sum + product.quantity,
		0
	);

	window.addEventListener('resize', showBurgerMenu);

	return (
		<>
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
									Store
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
								<img src={logo} alt="" />
							</NavLink>
						</div>
						<Button
							onClick={handleCartToggleClick}
							className={styles.cartToggleButton}
							variant="outlined">
							<img src={cart} alt="" />
							<div className={styles.cartNotify}>{productsCount}</div>
						</Button>
					</div>
				</Container>
			</nav>
			{cartClick && (
				<div
					ref={cartRef}
					className={cartClick ? styles.cartActive : styles.cartInactive}>
					<div className={styles.shoppingCart}>
						<h1>Shopping Cart</h1>
					</div>
				</div>
			)}
			{click && (
				<div className={click && width ? styles.active : styles.inactive}>
					<ul>
						<li className={styles.navItem}>
							<NavLink
								to="/"
								className={styles.navLinks}
								onClick={closeMobileMenu}>
								Home
							</NavLink>
						</li>
						<li className={styles.navItem}>
							<NavLink
								to="/about"
								className={styles.navLinks}
								onClick={closeMobileMenu}>
								About
							</NavLink>
						</li>
						<li className={styles.navItem}>
							<NavLink
								to="/services"
								className={styles.navLinks}
								onClick={closeMobileMenu}>
								Services
							</NavLink>
						</li>
						<li className={styles.navItem}>
							<NavLink
								to="/schedule"
								className={styles.navLinks}
								onClick={closeMobileMenu}>
								Schedule
							</NavLink>
						</li>
					</ul>
				</div>
			)}
		</>
	);
}
