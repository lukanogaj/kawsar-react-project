import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/Navabar";
import Hero from "./components/Hero";
import SliderLogos from "./components/Slider";
function App() {
	return (
		<Layout>
			<Navbar />
			<Hero />
			<SliderLogos />
		</Layout>
	);
}

export default App;
