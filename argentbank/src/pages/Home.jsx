import React from 'react';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Nav from '../components/Nav/Nav';

const Home = () => {
	return (
		<div className='app'>
			<Nav></Nav>
			<main>
				<Hero />
				<Features />
			</main>
			<Footer />
		</div>
	);
};

export default Home;
