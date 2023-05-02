import React, {
	useState,
	useEffect,
	useLayoutEffect,
	useRef,
	useCallback,
	useContext,
} from 'react';
import { NavLink } from 'react-router-dom';

import { CartContext } from '../CartContext';
import CartProduct from './CartProducts';

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
	const buttonRef = useRef(null);
	const hamburgerRef = useRef(null);

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

	const handleClickOutsideCart = useCallback(
		(event) => {
			if (
				cartRef.current &&
				!cartRef.current.contains(event.target) &&
				event.target !== buttonRef.current &&
				event.target !== cartRef.current
			) {
				console.log(event.target);
				setCartClick(false);
			}
		},
		[cartRef, buttonRef]
	);

	const handleClickOutsideNav = useCallback(
		(event) => {
			if (
				navRef.current &&
				event.target !== hamburgerRef.current &&
				event.target !== navRef.current
			) {
				setClick(false);
			}
		},
		[navRef, hamburgerRef]
	);

	const showBurgerMenu = () => {
		if (window.innerWidth <= 960) {
			setDropdownMenu(true);
		} else {
			setDropdownMenu(false);
		}
	};

	const checkout = async () => {
		await fetch('http://localhost:4000/checkout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ items: shoppingCart.items }),
		})
			.then((response) => {
				return response.json();
			})
			.then((response) => {
				if (response.url) {
					window.location.assign(response.url);
				}
			});
	};

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		document.addEventListener('mousedown', handleClickOutsideCart);
		document.addEventListener('mousedown', handleClickOutsideNav);
		if (width > 960) {
			setClick(false);
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutsideNav);
			document.removeEventListener('mousedown', handleClickOutsideCart);
			window.removeEventListener('resize', handleResize);
		};
	}, [width, handleClickOutsideCart, handleClickOutsideNav]);

	useLayoutEffect(() => {
		showBurgerMenu();
	});

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
								ref={hamburgerRef}
								className={styles.menuIcon}
								onClick={handleClick}>
								<i className={props.click ? 'fas fa-times' : 'fas fa-bars'} />
							</div>
						)}
						<div className={styles.logo}>
							<NavLink to="/" className={styles.logo}>
								<img src={logo} alt="" />
							</NavLink>
						</div>
						<Button
							ref={buttonRef}
							onClick={handleCartToggleClick}
							className={styles.toggleButton}
							variant="outlined">
							<img src={cart} alt="" />
							{productsCount > 0 && (
								<div className={styles.cartNotify}>{productsCount}</div>
							)}
						</Button>
					</div>
				</Container>
			</nav>
			{cartClick && (
				<div
					ref={cartRef}
					className={cartClick ? styles.cartActive : styles.cartInactive}>
					<div className={styles.shoppingCart}>
						<h1 className={styles.cartHeader}>Shopping Cart</h1>
						<hr></hr>
						{productsCount > 0 ? (
							<>
								{shoppingCart.items.map((currentProduct, idx) => (
									<CartProduct
										key={idx}
										id={currentProduct.id}
										quantity={currentProduct.quantity}
									/>
								))}

								<h1>Total: {shoppingCart.getTotalCost().toFixed(2)}</h1>

								<Button variant="outlined" onClick={checkout}>
									Checkout
								</Button>
							</>
						) : (
							<h1>there are no items in your cart</h1>
						)}
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
