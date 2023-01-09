import 'bootstrap/dist/css/bootstrap.min.css';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Newsletter from './components/Newsletter/Newsletter';
import Pricing from './components/Pricing/Pricing';
import GlobalStyle from './components/Styles/GlobalStyle';

function App() {
	return (
		<>
			<GlobalStyle />
			<Navbar />
			<Hero />
			<Features />
			<Pricing />
			<Newsletter />
			<Footer />
		</>
	);
}

export default App;
