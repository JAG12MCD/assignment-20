import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
	const [selectedTab, setSelectedTab] = useState('AboutMe');

	return (
		<div className="App">
			<Header handleTabChange={setSelectedTab}></Header>
			<main>
				{selectedTab === 'AboutMe' && <Aboutme />}
				{selectedTab === 'Contact' && <Contact />}
				{selectedTab === 'Portfolio' && <Portfolio />}
			</main>
			<Footer />
		</div>
	);
}

export default App;
