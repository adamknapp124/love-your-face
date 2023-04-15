import React, { lazy } from 'react';

import styles from './scss/app.module.scss';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import CartProvider from './CartContext';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Store = lazy(() => import('./pages/Store'));
const Success = lazy(() => import('./pages/Success'));
const Cancel = lazy(() => import('./pages/Cancel'));
const Cart = lazy(() => import('./pages/Cart'));
const ServiceInfo = lazy(() => import('./pages/ServiceInfo'));
const SingleItem = lazy(() => import('./components/SingleItem'));

function App() {
	return (
		<CartProvider>
			<div className={styles.app}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/store" element={<Store />} />
					<Route path="/success" element={<Success />} />
					<Route path="/cancel" element={<Cancel />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/product/:slug" element={<SingleItem />} />
					<Route path="/services/:pathString" element={<ServiceInfo />} />
				</Routes>
			</div>
		</CartProvider>
	);
}

export default App;
