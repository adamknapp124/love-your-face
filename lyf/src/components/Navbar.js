import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { CartContext } from '../CartContext';
import { Modal } from 'react-bootstrap';
import { Container } from '@mui/system';
import { Button } from '@mui/material';

import styles from '../scss/navbar.module.scss';
import cart from '../images/SVG/cart.svg';
import logo from '../images/loveyou-logo.svg';

export default function Navbar(props) {
	const shoppingCart = useContext(CartContext);
	const [dropdownMenu, setDropdownMenu] = useState(false);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

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
								<img src={logo} alt="" />{' '}
							</NavLink>
						</div>
						<Button
							onClick={handleShow}
							className={styles.cart}
							variant="outlined">
							<img src={cart} alt="" />
							<div className={styles.cartNotify}>{productsCount}</div>
						</Button>
					</div>
				</Container>
			</nav>
			<Container>
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Shopping Cart</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h1>This is the modal body</h1>
					</Modal.Body>
				</Modal>
			</Container>
		</>
	);
}
