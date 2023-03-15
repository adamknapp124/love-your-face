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
	const [width, setWidth] = useState(window.innerWidth);
	const [cartClick, setCartClick] = useState(false);
	const [click, setClick] = useState(false);

	const closeMobileMenu = () => setClick(false);
	const shoppingCart = useContext(CartContext);
	const cartRef = useRef(null);
	const navRef = useRef(null);
	const buttonReference = document.getElementById('toggle-button');
	const svcReference = document.getElementById('svcReference');
	const redBlobReference = document.getElementById('redBlobReference');

	const hamburger = document.getElementById('hamburger');
	const hamburgerIcon = document.getElementById('hamburger-icon');

	const handleClick = () => {
		setClick(!click);
	};

	const handleCartToggleClick = () => {
		console.log('handleCartToggle');
		if (cartRef.current) {
			setCartClick(false);
			return;
		}
		setCartClick(true);
	};

	const handleClickOutsideCart = (event) => {
		// represents panel opened or closed
		console.log(event.target !== redBlobReference);
		console.log(event.target);
		console.log(cartRef.current);

		if (
			cartRef.current &&
			event.target !== svcReference &&
			event.target !== redBlobReference &&
			event.target !== buttonReference &&
			event.target !== cartRef.current
		) {
			setCartClick(false);
		}
	};
	const handleClickOutsideNav = (event) => {
		if (
			navRef.current &&
			event.target !== hamburger &&
			event.target !== hamburgerIcon &&
			event.target !== navRef.current
		) {
			setClick(false);
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
		document.addEventListener('mousedown', handleClickOutsideNav);
		return () => {
			document.removeEventListener('mousedown', handleClickOutsideCart);
			document.removeEventListener('mousedown', handleClickOutsideNav);
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
							<div
								id="hamburger"
								className={styles.menuIcon}
								onClick={handleClick}>
								<i
									id="hamburger-icon"
									className={props.click ? 'fas fa-times' : 'fas fa-bars'}
								/>
							</div>
						)}
						<div className={styles.logo}>
							<NavLink to="/" className={styles.logo}>
								<img src={logo} alt="" />
							</NavLink>
						</div>
						<Button
							id="toggle-button"
							onClick={handleCartToggleClick}
							className={styles.toggleButton}
							variant="outlined">
							<img id="svcReference" src={cart} alt="" />
							<div id="redBlobReference" className={styles.cartNotify}>
								{productsCount}
							</div>
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
				<div
					ref={navRef}
					className={click && width ? styles.active : styles.inactive}>
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
