import React, { lazy } from 'react';

import styles from './scss/app.module.scss';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Header from './components/Navbar';
import CartProvider from './CartContext';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Store = lazy(() => import('./pages/Store'));
const Success = lazy(() => import('./pages/Success'));
const Cancel = lazy(() => import('./pages/Cancel'));
const Cart = lazy(() => import('./pages/Cart'));

function App() {
	return (
		<CartProvider>
			<div className={styles.app}>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/store" element={<Store />} />
					<Route path="/success" element={<Success />} />
					<Route path="/cancel" element={<Cancel />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</div>
		</CartProvider>
	);
}

export default App;
