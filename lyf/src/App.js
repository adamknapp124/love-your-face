import React, { lazy } from 'react';

import styles from './scss/app.module.scss';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Header from './components/Navbar';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Store = lazy(() => import('./pages/Store'));

function App() {
	return (
		<div className={styles.app}>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/store" element={<Store />} />
			</Routes>
		</div>
	);
}

export default App;
