import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from '@mui/system';

import Navbar from '../components/Navbar';
import Services from '../components/Services';

import styles from '../scss/home.module.scss';

export default function Home() {
	const [click, setClick] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);

	const closeMobileMenu = () => setClick(false);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		if (width > 960) {
			setClick(false);
		}
	}, [width]);

	return (
		<div className={styles.homepage}>
			<Navbar click={click} setClick={setClick} />
			<main className={styles.content}>
				<Container>
					<div className={styles.mainContent}>
						<div className={styles.hero}></div>
						<div className={styles.bubble}>
							<Services />
							<div>
								What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
								printing and typesetting industry. Lorem Ipsum has been the
								industry's standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to make a
								type specimen book.
							</div>
							<br></br>
							It has survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum. Why do we use it? It is a long established fact that
							a reader will be distracted by the readable content of a page when
							looking at its layout. The point of using Lorem Ipsum is that it
							has a more-or-less normal distribution of letters, as opposed to
							using 'Content here, content here', making it look like readable
							English. Many desktop publishing packages and web page editors now
							use Lorem Ipsum as their default model text, and a search for
							'lorem ipsum' will uncover many web sites still in their infancy.
							Various versions have evolved over the years, sometimes by
							accident, sometimes on purpose (injected humour and the like).
							Where does it come from? Contrary to popular belief, Lorem Ipsum
							is not simply random text. It has roots in a piece of classical
							Latin literature from 45 BC, making it over 2000 years old.
							Richard McClintock, a Latin professor at Hampden-Sydney College in
							Virginia, looked up one of the more obscure Latin words,
							consectetur, from a Lorem Ipsum passage, and going through the
							cites of the word in classical literature, discovered the
							undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
							1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
							and Evil) by Cicero, written in 45 BC. This book is a treatise on
							the theory of ethics, very popular during the Renaissance. The
							first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
							from a line in section 1.10.32. The standard chunk of Lorem Ipsum
							used since the 1500s is reproduced below for those interested.
							Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
							by Cicero are also reproduced in their exact original form,
							accompanied by English versions from the 1914 translation by H.
							Rackham.What is Lorem Ipsum? Lorem Ipsum is simply dummy text of
							the printing and typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s, when an
							unknown printer took a galley of type and scrambled it to make a
							type specimen book. It has survived not only five centuries, but
							also the leap into electronic typesetting, remaining essentially
							unchanged. It was popularised in the 1960s with the release of
							Letraset sheets containing Lorem Ipsum passages, and more recently
							with desktop publishing software like Aldus PageMaker including
							versions of Lorem Ipsum. Why do we use it? It is a long
							established fact that a reader will be distracted by the readable
							content of a page when looking at its layout. The point of using
							Lorem Ipsum is that it has a more-or-less normal distribution of
							letters, as opposed to using 'Content here, content here', making
							it look like readable English. Many desktop publishing packages
							and web page editors now use Lorem Ipsum as their default model
							text, and a search for 'lorem ipsum' will uncover many web sites
							still in their infancy. Various versions have evolved over the
							years, sometimes by accident, sometimes on purpose (injected
							humour and the like). Where does it come from? Contrary to popular
							belief, Lorem Ipsum is not simply random text. It has roots in a
							piece of classical Latin literature from 45 BC, making it over
							2000 years old. Richard McClintock, a Latin professor at
							Hampden-Sydney College in Virginia, looked up one of the more
							obscure Latin words, consectetur, from a Lorem Ipsum passage, and
							going through the cites of the word in classical literature,
						</div>
					</div>
				</Container>
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
			</main>
		</div>
	);
}
